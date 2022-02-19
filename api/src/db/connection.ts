import { Sequelize } from "sequelize"
import { Express } from "express"
import { config } from "dotenv"
config()
// console.log(process.env.URI_DATABASE_LOCAL)
const db = new Sequelize(process.env.URI_DATABASE_LOCAL as string,{
   logging:false
})


export default db