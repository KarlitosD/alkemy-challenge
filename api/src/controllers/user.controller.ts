import { Request, Response, NextFunction } from "express"
import User from "../models/User"
import createError from "../utils/createError"

export const getUser = (req: Request, res: Response, next: NextFunction) => {
	try {
		const user = User.findByPk(req.userId)
		if(!user) createError(404, "User not found")
		res.status(201).send(user)
	} catch (error) {
		next(error)
	}
}