import { Router, Request, Response } from "express"
import Operation from "../models/Operation"
import authorizationToken from "../middlewares/authorizationToken"
import createError from "../utils/createError"

const router = Router()

router.get("/:userId", async (req: Request, res: Response, next) => {
    try {
        const { params, query } = req
        const limit = query?.limit as string || 100
        const operations = await Operation.findAll({
            attributes: ["id", "concept"],
            where: { UserId: params.userId },
            limit: +limit
        })
        res.status(200).send(operations)
    } catch (error) {
        next(error)
    }
})

router.post("/" ,async (req: Request, res: Response, next) => {
    try {
        const { body } = req
        const { id: UserId, concept, amount, type, category } = body 
        const opeartion = await Operation.create({
            concept,
            typeOperation: type,
            amount,
            category,
            UserId,
        })
        res.status(201).send(opeartion)     
    } catch (error) {
        next(error)
    }
})

router.patch("/:operationId", async (req: Request, res: Response, next) => {
    try {
        const { body, params } = req
        const opeartion = await Operation.findByPk(params.operationId)
        if(!opeartion) throw createError(404, "Operation no exist")
        opeartion.update({ ...body })
        res.status(202).send(opeartion)
    } catch (error) {
        next(error)
    }
})


router.delete("/:operationId", async (req: Request, res: Response, next) => {
    try {
        const opeartion = await Operation.findByPk(req.params.operationId)
        if(!opeartion) throw createError(404, "Operation no exist")
        opeartion.destroy()
        res.status(202).send(opeartion)
    } catch (error) {
        next(error)        
    }
})

export default router