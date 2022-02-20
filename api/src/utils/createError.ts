class CustomError extends Error{
   public status !: number
   constructor(statusCode: number, errorMessage: string){
      super(errorMessage)
      this.status = statusCode
   }
}


export default (statusCode: number, errorMessage: string) => new CustomError(statusCode, errorMessage)
