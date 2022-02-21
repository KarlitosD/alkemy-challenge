import { Request, Response, NextFunction } from "express"

import Operation from "../models/Operation"
import createError from "../utils/createError"

const getOperations = async (req: Request, res: Response, next: NextFunction) => {
   try {
       const { params, query } = req
       const limit = query?.limit as string || 100
       const operations = await Operation.findAll({
           attributes: ["id", "concept", "amount", "typeOperation", "category", "createdAt"],
           where: { UserId: params.userId },
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
       const { id: UserId, concept, amount, type, category } = body 
       const opeartion = await Operation.create({
           concept,
           type,
           amount,
           category,
           UserId,
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
       if(!opeartion) throw createError(404, "Operation no exist")
       opeartion.update({ ...body })
       res.status(202).send(opeartion)
   } catch (error) {
       next(error)
   }
}

const deleteOperation = async (req: Request, res: Response, next: NextFunction) => {
   try {
       const opeartion = await Operation.findByPk(req.params.operationId)
       if(!opeartion) throw createError(404, "Operation no exist")
       opeartion.destroy()
       res.status(202).send(opeartion)
   } catch (error) {
       next(error)        
   }
}

export { getOperations, createOperation, updateOperation, deleteOperation }