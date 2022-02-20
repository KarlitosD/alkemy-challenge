
import bcrypt from 'bcrypt'

const hashPassword = (password:string) => bcrypt.hash(password, 10)

const comparePassword = (password:string, passwordHash:string) => bcrypt.compare(password, passwordHash)
    
export { hashPassword, comparePassword }