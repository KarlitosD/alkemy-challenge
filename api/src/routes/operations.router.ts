import { Router } from "express"

import authorizationToken from "../middlewares/authorizationToken"
import {
    getOperations,
    createOperation,
    updateOperation,
    deleteOperation
} from "../controllers/operations.controller"

const router = Router()

router.use(authorizationToken)

router.get("/:userId", getOperations)

router.post("/", createOperation)

router.patch("/:operationId", updateOperation)

router.delete("/:operationId", deleteOperation)

export default router