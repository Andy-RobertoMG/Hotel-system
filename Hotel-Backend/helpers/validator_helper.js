import pkg from 'express-validator'
const {check,validationResult} = pkg;
const validateResult = (req,res,next)=>{
  console.log("Llega a qui")
  try{
    validationResult(req).throw()
    // console.log(req);
    next()
  }catch(err){
    res.status(202);
    res.send({errors:err.array()});
  }
  
}
export {
  validateResult
}