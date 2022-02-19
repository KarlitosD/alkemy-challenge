import express, { json, urlencoded } from "express"
import cors from "cors"

import db from "./db/connection"
import router from "./routes/index.router"

const app = express()

app.use(json())
app.use(urlencoded({ extended:true }))
app.use(cors())

app.use("/api", router)

db.sync({force:true}).then(() => {
    app.listen(3000, () =>{
        console.log("Server and database started")
    })
}).catch(error => console.log("Oh oh, don't work"))
