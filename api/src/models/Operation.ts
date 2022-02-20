import { DataTypes, Model, UUIDV4 } from "sequelize"
import db from "../db/connection"

class Operation extends Model{
   declare id : string
   declare concept : string
   declare amount: number
   declare typeOperation: string
   declare userId: string
}

Operation.init({
   id:{
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull:false,
      primaryKey: true,
      unique: true
   },
   concept:{
      type:DataTypes.STRING,
      allowNull: false
   },
   amount:{
      type:DataTypes.INTEGER,
      allowNull:true,
      unique:true,
   },
   typeOperation:{
      type:DataTypes.STRING,
      allowNull:false,
      field: "type"
   }
},{
   sequelize:db,
   tableName:"Operations",
})

export default Operation