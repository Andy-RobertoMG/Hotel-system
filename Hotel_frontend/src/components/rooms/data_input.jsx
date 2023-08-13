const rooms_input
= [
  {id:0,name:"id",value:[],edit:true,title:"Habitación",placeholder:"Ingrese el numero de la habitación",type:"number",show:true},
  {id:1,name:"floor",value:[],title:"Piso" ,placeholder:"Ingrese el piso de la habitación",type:"number",show:true},
  {id:2,name:"roomtype_id",type:"select",value:[],placeholder:"Ingrese el tipo de habitación",title:"Tipo de habitacion",select:"http://192.168.56.1:8080/typeroom"}
]



const typeRoom_input_edit
= [
  
  {id:1,name:"descr",value:[],title:"Descripción",placeholder:"Ingresa la descripción",type:"text",show:true},
  {id:2,name:"price",value:[],title:"Precio",placeholder:"Ingresa el precio", type:"number",show:true},
  {id:3,name:"title",value:[],title:"Titulo",placeholder:"Ingresa el titulo", type:"text",show:true}
]
const inicialization_R = {id:"",floor:"","roomtype_id":"",};
const typeRoom_input
= [
  
  {id:1,name:"descr",value:[],title:"Descripción",placeholder:"Ingresa la descripción",type:"text",show:true},
  {id:2,name:"price",value:[],title:"Precio",placeholder:"Ingresa el precio", type:"number",show:true},
  {id:3,name:"title",value:[],title:"Titulo",placeholder:"Ingresa el titulo", type:"text",show:true}
]


const Room_show= [
  {id:0,name:"id",title:"Habitación",show:true},
  {id:1,name:"floor",title:"Piso",show:true},
  {id:2,name:"roomtype_id",title:"Tipo de habitación",show:true},
]
const TypeRoom_show =[
  {id:1,name:"id",title:"Identificador",show:false},
  {id:3,name:"title",title:"Titulo",show:true},
  {id:4,name:"descr",title:"Descripción",show:true},
  {id:2,name:"price",title:"Precio",show:true},
]

const inicialization_TR = {"id":"",title:"",descr:"",price:""}
export {
  inicialization_R,
  inicialization_TR,
  Room_show,
  rooms_input,
  typeRoom_input,
  TypeRoom_show
};