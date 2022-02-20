export class HttpError extends Error{
   public status !: number
   public message !: string
   constructor(statusCode: number, errorMessage: string){
      super(errorMessage)
      this.status = statusCode
      this.message = errorMessage
   }
}


export default (statusCode: number, errorMessage: string): HttpError => new HttpError(statusCode, errorMessage)
