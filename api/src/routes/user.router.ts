import { Router, Request, Response } from "express"
import User from "../models/User"
import { comparePassword, hashPassword } from "../utils/brcrypt"
import CONFIG from "../config/index"
import jwt from "jsonwebtoken"

const router = Router()

router.get("/:id", async (req: Request, res: Response) => {
    try {
        const { params: { id } } = req
        const user = await User.findByPk(id, {
            attributes: ["id", "name", "email", "createdAt"]
        })
        res.send(user)
    } catch (error) {
        res.status(500).send({
            message: "Algo salio mal"
        })
    }
})

router.post("/register", async (req: Request, res: Response) => {
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
        res.status(500).send({
            message: "Algo salio mal"
        })
    }
})

router.post("/login", async (req: Request, res: Response) => {
    const { body: { email, password: passwordHash } } = req
    try {
        const user = await User.findOne({ where:{ email }})
        
        if(!user) throw new Error("User no exist")
        if(!(await comparePassword(passwordHash, user.password))) throw new Error("Password incorrect")
        
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


