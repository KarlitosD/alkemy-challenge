import { DataTypes, Model, UUIDV4 } from "sequelize"
import db from "../db/connection"

class User extends Model{
   declare id : string
   declare name : string
}

User.init({
   id:{
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull:false,
      primaryKey: true,
      unique: true
   },
   name:{
      type:DataTypes.STRING,
      allowNull: false
   },
   email:{
      type:DataTypes.STRING,
      allowNull:true,
      unique:true,
   },
   password:{
      type:DataTypes.STRING(1000),
      allowNull:false
   },
   
},{
   sequelize:db,
   tableName:"Users",
   updatedAt:false
})

export default User