export class HttpError extends Error{
   public status: number
   public message: string
   public isCustomError: boolean
   constructor(statusCode: number, errorMessage: string){
      super(errorMessage)
      this.status = statusCode
      this.message = errorMessage
      this.isCustomError = true
   }
}


export default (statusCode: number, errorMessage: string): HttpError => new HttpError(statusCode, errorMessage)
