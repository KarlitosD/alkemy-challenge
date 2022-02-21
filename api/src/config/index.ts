import { config } from "dotenv"
config()

const ENV = {
	DB_URI: process.env.URI_DATABASE_LOCAL as string,
	PORT: process.env.PORT,
	SECRET: process.env.SECRET as string
}

export default ENV
