import { Request, Response, NextFunction } from "express"
import { HttpError } from "../utils/createError"
export default (err: HttpError, req: Request, res: Response, next: NextFunction) => {
   if(!err.isCustomError) res.status(500).send({ message: err.message })
   
   const { status, message } = err
   res.status(status).send({
      status,
      message
   })
}