import pkg from "express-validator"
import { validateResult } from "../helpers/validator_helper.js";
import { json } from "sequelize";
const {check,validationResult} = pkg;

const validateRegister = [
  check('name').exists().notEmpty().withMessage("El nombre del usuario esta vacio"),
  check('email').exists().notEmpty().isEmail().withMessage("El correo o cumple con los estandares"),
  check('password').exists().notEmpty().isLength({min:3}).withMessage("La contraseña no posee los caracteres suficientes")
  ,(req,res,next)=>{
    // console.log("5 5 5")
    const {password} = req.body;
    console.log("validateRegister:"+JSON.stringify(req.body)+'\n')
    check('repeat_pw').equals(password).withMessage("Las contraseñas no coinciden")(req, res, next);/**Ua que la funcion esta recibiendo req,res,el check no recibira estos parametros por lo que debes asignarselos */
  }

  //Se puede usar asi la funcion o de la otra que esta abajo
  // ,(req,res,next)=>{
  //   console.log("hola como estas")
  //   validateResult(req,res,next);
  // }
  ,validateResult

]
export {validateRegister};