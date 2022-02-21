import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import createError from "../utils/createError"
import CONFIG from "../config/index"

export default (req: Request, res: Response, next: NextFunction) => {
   try {
      const header = req.headers["authorization"]
      if (!header || !header.toLocaleLowerCase().startsWith("bearer")) throw createError(401, "Header authorization not found")
      const token = header.substring(7)
      if (!token) throw createError(401, "Empty token") 
      const tokenValidated = jwt.verify(token, CONFIG.SECRET)
      if (!tokenValidated) throw createError(401, "The token is not valid")
      req.userId = (<any>tokenValidated).id
      next()
   } catch (error) {
      next(error)
   }
}