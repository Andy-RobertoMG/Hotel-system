document.addEventListener('DOMContentLoaded',()=>{
    llenar();
})

function script(insertar){
    var variable = document.createElement('script')
    variable.setAttribute('src',insertar);
    document.childNodes[1].appendChild(variable);
}
function llenar(){
    var variable = ['/reload/reload.js']
    variable.forEach((string)=>{
        script(string);
    })
}
