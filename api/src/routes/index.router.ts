import { Router, Request ,Response } from "express"
import UserRouter from "./user.router"
import OperationRouter from "./operations.router"

const router = Router()

router.use("/user",UserRouter)
router.use("/operations",OperationRouter)

router.get("/", async (req:Request, res:Response) => {
    res.send({
        "Hola": "Mama"
    })
})
export default router