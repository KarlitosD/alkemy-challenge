import { Router, Request, Response } from "express"
import User from "../models/User"
import { comparePassword, hashPassword } from "../utils/brcrypt"
import CONFIG from "../config/index"
import jwt from "jsonwebtoken"
import { nextTick } from "process"
import createError from "../utils/createError"

const router = Router()

router.get("/:id", async (req: Request, res: Response, next) => {
    try {
        const { params: { id } } = req
        const user = await User.findByPk(id, {
            attributes: ["id", "name", "email", "createdAt"]
        })

        if(!user) throw createError(404, "User not found")

        res.send(user)
    } catch (error) {
        next(error)
    }
})

router.post("/register", async (req: Request, res: Response, next) => {
    try {
        const { body: { username, password, email } } = req
        const { id, name } = await User.create({
            name: username,
            email,
            password: await hashPassword(password)
        })
        const token = jwt.sign({ id, name }, CONFIG.SECRET)
        res.send({
            username:name,
            id,
            token
        })
    } catch (error) {
        next(error)
    }
})

router.post("/login", async (req: Request, res: Response) => {
    const { body: { email, password: passwordHash } } = req
    try {
        const user = await User.findOne({ where:{ email }})
        
        if(!user) throw createError(404, "User not exist")
        if(!(await comparePassword(passwordHash, user.password))) throw createError(401, "Incorrect password")
        
        const objectToken = {
            username: user.name,
            id: user.id
        }
        const token = jwt.sign(objectToken, CONFIG.SECRET)
        
        res.send({
            ...objectToken,
            token
        })
    } catch (error) {
        const strError = JSON.stringify(error)
        res.status(500).send("no uwu")
    }
})

export default router


