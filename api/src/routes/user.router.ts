import { Router, Request, Response } from "express"
import User from "../models/User"
import createError from "../utils/createError"

const router = Router()

router.get("/:id", async (req: Request, res: Response, next) => {
	try {
		const { params: { id } } = req
		const user = await User.findByPk(id, {
			attributes: ["id", "name", "email", "createdAt"]
		})

		if (!user) throw createError(404, "User not found")

		res.send(user)
	} catch (error) {
		next(error)
	}
})

export default router


