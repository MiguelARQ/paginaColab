
function requisito() {
    var nombre=document.getElementById("nombres").value;
    var apellido=document.getElementById("apellidos").value;
    var email=document.getElementById("correo").value;
    var contra=document.getElementById("clave").value;
    if (nombre =="" || apellido=="" || email=="" || contra=="") {

      alert("Ningun campo debe estar vacio");
      
    }
    
    try {
        var texto = document.getElementById('correo').value
    var resultado = texto.match(/[A-Za-z0-9-_.]+@[A-Za-z]+\.[A-Za-z]{2,4}(\.)?([A-Za-z]{2})?/g)[0]
    alert("Datos enviados correctamente");
    limpiarTodo();
    } catch (e) {
        if(e){
            alert("El correo debe contener una @\n y al menos un punto con un dominio valido");
            limpiar();

        }
        
        
    }

} 

function limpiar(){
    document.getElementById("correo").value="";
}
function limpiarTodo(){
    
        document.getElementById("nombres").value="";
        document.getElementById("apellidos").value="";
        document.getElementById("correo").value="";
        document.getElementById("clave").value="";
        
}


