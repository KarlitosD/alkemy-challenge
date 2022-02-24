import { DataTypes, Model, UUIDV4 } from "sequelize"
import db from "../db/connection"

class Operation extends Model {
	declare id: string
	declare concept: string
	declare amount: number
	declare date: Date
	declare typeOperation: string
	declare userId: string
	declare category: string
}

Operation.init({
	id: {
		type: DataTypes.UUID,
		defaultValue: UUIDV4,
		allowNull: false,
		primaryKey: true,
		unique: true
	},
	concept: {
		type: DataTypes.STRING,
		allowNull: false
	},
	amount: {
		type: DataTypes.INTEGER,
		allowNull: true,
	},
	date: {
		type: DataTypes.DATE,
		allowNull: true,
	},
	type: {
		type: DataTypes.STRING,
		allowNull: false,
		field: "type"
	},
	category: {
		type: DataTypes.STRING,
		defaultValue: "none"
	}
}, {
	sequelize: db,
	tableName: "Operations",
	updatedAt: false
})

export default Operation