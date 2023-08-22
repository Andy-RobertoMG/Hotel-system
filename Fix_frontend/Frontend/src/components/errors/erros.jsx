class ResponseError extends Error{
  constructor(message,response){
    super(message);
    this.response = response;
  }
}
return ResponseError;