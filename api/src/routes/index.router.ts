import { Router, Request ,Response } from "express"
import AuthRouter from "./auth.router"
import UserRouter from "./user.router"
import OperationRouter from "./operations.router"

const router = Router()

router.use("/auth", AuthRouter)
router.use("/user",UserRouter)
router.use("/operations",OperationRouter)

router.get("/", async (req:Request, res:Response) => {
    res.send({
        "hello": "world"
    })
})
export default router