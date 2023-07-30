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
    // console.log("validateRegister:"+JSON.stringify(req.body)+'\n')
    check('repeat_pw').equals(password).withMessage("Las contraseñas no coinciden")(req, res, next);/**Ua que la funcion esta recibiendo req,res,el check no recibira estos parametros por lo que debes asignarselos */
  }

  //Se puede usar asi la funcion o de la otra que esta abajo
  // ,(req,res,next)=>{
  //   console.log("hola como estas")
  //   validateResult(req,res,next);
  // }
  ,validateResult

]
const validateTypeRoom = [
  check('desc').exists().notEmpty().withMessage("No se ha escrito en la descipción"),
  check('price').exists().notEmpty().not().isNumeric().withMessage("El valor escrito no es numerico")
  ,validateResult
]
const validateRoom = [
  check('id').exists().notEmpty().withMessage("El titulo enviado esta vacio").isNumeric().withMessage("El valor no es numerico"),
  check('floor').exists().notEmpty().withMessage("No se ha escrito el piso").isNumeric().withMessage("El valor ingresado en el piso no es numerico"),
  check('roomtype_id').exists().notEmpty().withMessage("No se ha seleccionado un tipo de habitacion")
  ,validateResult
]

export {validateRoom,validateRegister,validateTypeRoom};