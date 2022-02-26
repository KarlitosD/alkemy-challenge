import { Request, Response, NextFunction } from "express"

import Operation from "../models/Operation"
import createError from "../utils/createError"

const getOperations = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { query } = req
		const limit = query?.limit as string || 100
		const operations = await Operation.findAll({
			attributes: ["id", "concept", "amount", "type", "category", "createdAt"],
			where: { UserId: req.userId },
			limit: +limit
		})
		res.status(200).send(operations)
	} catch (error) {
		next(error)
	}
}

const createOperation = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { body } = req
		const UserId = req.userId
		const { concept, amount, type, category, date } = body
		const opeartion = await Operation.create({
			concept,
			type,
			amount,
			category,
			UserId,
			date
		})

		res.status(201).send(opeartion)
	} catch (error) {
		next(error)
	}
}

const updateOperation = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { body, params } = req
		const opeartion = await Operation.findByPk(params.operationId)
		if (!opeartion) throw createError(404, "Operation no exist")
		const { concept, amount, category } = body
		opeartion.update({
			concept: concept || opeartion.concept,
			amount: amount || opeartion.amount,
			category: category || opeartion.category
		})
		res.status(202).send(opeartion)
	} catch (error) {
		next(error)
	}
}

const deleteOperation = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const opeartion = await Operation.findByPk(req.params.operationId)
		if (!opeartion) throw createError(404, "Operation no exist")
		opeartion.destroy()
		res.status(202).send(opeartion)
	} catch (error) {
		next(error)
	}
}

export { getOperations, createOperation, updateOperation, deleteOperation }