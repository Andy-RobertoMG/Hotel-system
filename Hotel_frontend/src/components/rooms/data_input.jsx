const rooms_input
= [
  {id:0,name:"id",value:[],title:"Habitación",placeholder:"Ingrese el numero de la habitación",type:"number",show:true},
  {id:1,name:"floor",value:[],title:"Piso",placeholder:"Ingrese el numero",type:"number",show:true},
  {id:2,name:"roomtype_id",type:"select",value:[],title:"Tipo de habitacion",select:"http://192.168.56.1:8080/typeroom"}
]

const inicialization_R = {id:"",floor:"","roomtype_id":"",};
const typeRoom_input
= [
  
  {id:1,name:"desc",value:null,title:"Descripción",placeholder:"Ingresa la descripción",type:"text"},
  {id:2,name:"price",value:null,title:"Precio",placeholder:"Ingresa el precio", type:"number"},
  {id:3,name:"title",value:null,title:"Titulo",placeholder:"Ingresa el titulo", type:"text"}
]
const Room_show= [
  {id:0,name:"id",title:"Habitación",show:true},
  {id:1,name:"floor",title:"Piso",show:true},
  {id:2,name:"roomtype",title:"Tipo de habitación",key_foreign:true,show:true},
]
const TypeRoom_show =[
  {id:1,name:"id",title:"Identificador",show:false},
  {id:3,name:"title",title:"Titulo",show:true},
  {id:4,name:"desc",title:"Descripción",show:true},
  {id:2,name:"price",title:"Precio",show:true},
]

const inicialization_TR = {"id":"",title:"",desc:"",price:""}
export {
  inicialization_R,
  inicialization_TR,
  Room_show,
  rooms_input,
  typeRoom_input,
  TypeRoom_show
};