function abrirMenu() {
    var abrirMenuDesplegable = document.getElementById("menuConsolas");
    if (abrirMenuDesplegable.style.display === "none") {
        abrirMenuDesplegable.style.display = "block";
    } else {
        abrirMenuDesplegable.style.display = "none";
    }
}

function salirDeMiWeb(exit){
    result = window.confirm("Te estás reedireccionando a otro sitio web \n¿Seguro que deseas continuar?");
    if (result == true){
    }else{
        exit.preventDefault();
    }
}

function borrar(borrar){
    result = window.confirm("Estas por borrar todo lo ingresado en el formulario.\n¿Seguro que deseas continuar?");
    if (result == true){
    window.alert("Se ha borrado todo el formulario.")
    }else{
        borrar.preventDefault();
    }
}
function enviar(env){
    result = window.confirm("Se está por envíar el formuluario.\n¿Estás seguro que deseas continuar?");
    if (result == true){
    window.alert("Se ha enviado tu formulario con éxito.")
    }else{
        env.preventDefault();
    }
}

function sesion(){
    window.alert("Está opción aún no está habilitada.\nPruebe otro día.\nDisculpe las molestias.");
}

function registro(){
    let nombre = prompt("Ingrese su nombre");
    window.alert("Bienvenido "+ nombre);
}

function mostrarTabla() {
    var boton = document.getElementById("btn_tabla");
    var tabla = document.getElementById("tabla");
    if (tabla.style.display === "block") {
        tabla.style.display = "none";
        boton.innerHTML = "Mostrar información"
    } else {
        tabla.style.display = "block";
        boton.innerHTML = "Ocultar información"
    }
}
