import express, { json, urlencoded } from 'express';
import cors from 'cors';
import pool from './bd/base_de_datos.js';
import reload from 'reload';
import rutas from './router/router.js';
import { dirname,join } from 'path';
import { fileURLToPath } from 'url';
import sequelize from './bd/base_de_datos.js'
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

try{
  await sequelize.sync({force:true});
  
  console.log("Coneccion establesida");

}catch(error){
  console.log("Error",error);
}
//await pool.query("insert into Users(user_name,phone,email,address)  values ('Andy','13123','andyroberto49@gmail.com','RioPanuco')")
//const res = await pool.query("Select * from Users");
//console.log(res.rows[0]);
app.use(json());
app.use(urlencoded({extended:true}));
//app.use("/Public",express.static(join(__dirname+"/Public")))
// console.log(join(__dirname,"Public"))
// console.log(join(__dirname,"/Public"))
//app.use(express.static('public'))

app.use(cors())

// app.use("/Public",express.static('/Public'))

app.use("/",rutas())
app.listen(4000);
reload(app);