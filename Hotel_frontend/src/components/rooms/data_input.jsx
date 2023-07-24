const rooms_input
= [
  {id:1,name:"floor",value:null,title:"Piso",placeholder:"Ingrese el numero",type:"number",show:true},
  {id:2,name:"roomtype_id",value:[],title:"Tipo de habitacion",placeholder:"tipo de habitacion",type:"number",select:"http://localhost:5/rooms/type"}

]
const typeRoom_input
= [
  
  {id:1,name:"desc",value:null,title:"Descripción",placeholder:"Ingresa la descripción",type:"text"},
  {id:2,name:"price",value:null,title:"Precio",placeholder:"Ingresa el precio", type:"number"},
  {id:3,name:"title",value:null,title:"Titulo",placeholder:"Ingresa el titulo", type:"text"}
]
const Room_show= [
  {id:0,name:"id",title:"Habitación",show:true},
  {id:1,name:"floor",title:"Piso",show:true},
  {id:2,name:"roomtype_id",title:"Tipo de habitación",show:true}
]
const TypeRoom_show =[
  {id:1,name:"id",title:"Identificador",show:false},
  {id:3,name:"title",title:"Titulo",show:true},
  {id:4,name:"desc",title:"Descripción",show:true},
  {id:2,name:"price",title:"Precio",show:true},
]
export {
  Room_show,
  rooms_input,
  typeRoom_input,
  TypeRoom_show
};