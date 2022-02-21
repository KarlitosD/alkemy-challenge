
import bcrypt from 'bcrypt'

const hashPassword = (password:string): Promise<string> => bcrypt.hash(password, 10)

const comparePassword = (password:string, passwordHash:string): Promise<boolean> => bcrypt.compare(password, passwordHash)
    
export { hashPassword, comparePassword }