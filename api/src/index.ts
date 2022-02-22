import express, { json, urlencoded } from "express"
import cors from "cors"
import helmet from "helmet"

import CONFIG from "./config/index"

import router from "./routes/index.router"
import db from "./db/connection"
import "./db/associations"

import errorHandler from "./middlewares/errorHandler"

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())

app.use("/api", router)
app.use(errorHandler)

db.sync({ force: false }).then(() => {
	app.listen(CONFIG.PORT, () => {
		console.log("Server and database started")
	})
}).catch(({ message }) => console.log({
	tittle: "An error has occurred :(",
	message
}))
