import Operation from "../models/Operation"
import User from "../models/User"


User.hasMany(Operation)
Operation.belongsTo(User)
