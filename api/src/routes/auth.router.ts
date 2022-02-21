import { Router, Request, Response } from "express"
import User from "../models/User"
import { comparePassword, hashPassword } from "../utils/brcrypt"
import CONFIG from "../config/index"
import jwt from "jsonwebtoken"
import createError from "../utils/createError"

const router = Router()

router.post("/register", async (req: Request, res: Response, next) => {
   try {
       const { body: { username, password, email } } = req
       const { id, name } = await User.create({
           name: username,
           email,
           password: await hashPassword(password)
       })
       const token: string = jwt.sign({ id, name }, CONFIG.SECRET, {
           expiresIn: "7d"
       })
       res.send({
           username:name,
           id,
           token
       })
   } catch (error) {
       next(error)
   }
})

router.post("/login", async (req: Request, res: Response, next) => {
   const { body: { email, password: passwordHash } } = req
   try {
       const user = await User.findOne({ where:{ email }})
       
       if(!user) throw createError(404, "User not exist")
       if(!(await comparePassword(passwordHash, user.password))) throw createError(401, "Incorrect password")
       
       const userForToken = {
           username: user.name,
           id: user.id
       }
       const token: string = jwt.sign(userForToken, CONFIG.SECRET,{
           expiresIn: "7d"
       })
       
       res.send({
           ...userForToken,
           token
       })
   } catch (error) {
       next(error)
   }
})

export default router