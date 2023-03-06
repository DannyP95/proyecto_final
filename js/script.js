function abrirMenu() {
    var flechaCambiar = document.getElementById("flechaConsolas");
    var abrirMenuDesplegable = document.getElementById("menuConsolas");
    if (abrirMenuDesplegable.style.display === "block") {
        abrirMenuDesplegable.style.display = "none";
        flechaCambiar.style.transform = "rotate(0deg)";
    } else {
        abrirMenuDesplegable.style.display = "block";        
        flechaCambiar.style.transform = "rotate(180deg)";
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
        if (nombre == ""){
            window.alert("Por Favor Ingrese su nombre")
        }else{
            window.alert("Bienvenido "+ nombre);
        }
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

let ubicacionStart = window.pageYOffset;
window.onscroll = function scroll(){
    let asideMenu = document.getElementById("asideId");
    let claseOriginal = document.getElementById('navegador');
    let mainPadding = document.getElementById("mainId");
    let ubicacionEnd = window.pageYOffset;

    if (ubicacionEnd >= 246){ 
        claseOriginal.classList.remove('container');
        claseOriginal.classList.add('navegadorScroll');
        mainPadding.classList.add("mainTop");
        asideMenu.classList.add("asideClass");

    }else{
        claseOriginal.classList.remove('navegadorScroll');
        mainPadding.classList.remove("mainTop");
        claseOriginal.classList.add('container');
        asideMenu.classList.remove("asideClass");
    }

}