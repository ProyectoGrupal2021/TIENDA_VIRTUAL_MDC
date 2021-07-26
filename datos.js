var getData = function (){
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;
    if (name == "") {
        document.getElementById("nombre")
    }else 
       if (name == "") {
        document.getElementById("email")
    }else 
       if (name == "") {
        document.getElementById("telefono")
    }else 
       if (name == "") {
        document.getElementById("mensaje")
       }else {
        console.log(name+"  "+email+"  "+telefono+"  "+mensaje);
        document.getElementById("nombre").value = " ";
        document.getElementById("email").value = " ";
        document.getElementById("telefono").value = " ";
        document.getElementById("mensaje").value = " "; 
       }

    
}