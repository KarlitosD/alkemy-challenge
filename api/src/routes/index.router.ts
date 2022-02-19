import { Router, Request ,Response } from "express"
import UserRouter from "./users.router"

const router = Router()

router.use("/users",UserRouter)

router.get("/", async (req:Request, res:Response) => {


    res.send({
        "Hola": "Mama"
    })
})
export default router