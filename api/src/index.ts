import express, { json, urlencoded } from "express"
import cors from "cors"

import router from "./routes/index.router"
import db from "./db/connection"
import "./db/associations"

import errorHandler from "./middlewares/errorHandler"

const app = express()

app.use(json())
app.use(urlencoded({ extended:true }))
app.use(cors())

app.use("/api", router)
app.use(errorHandler)


db.sync({force:true}).then(() => {
    app.listen(3000, () =>{
        console.log("Server and database started")
    })
}).catch(error => console.log(error))
