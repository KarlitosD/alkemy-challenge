import { Sequelize } from "sequelize"
import CONFIG from "../config/index"

const db = new Sequelize(CONFIG.DB_URI,{
   logging:false
})

export default db