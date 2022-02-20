import { Router, Request ,Response } from "express"
import Operation from "../models/Operation"

const router = Router()

router.get("/", async (req: Request, res : Response) => {
    const user = await Operation.findAll()
    res.send(user)
})

router.post("/", async (req: Request, res : Response) => {
    const { body } = req
   //  console.log(body)    
   //  const { id, name } = await Operation.create({
   //      name: body.username
   //  })
   //  res.send({
   //      id,
   //      name
   //  })
})

export default router