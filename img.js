const altura = document.getElementById("alt");
const ancho = document.getElementById("anch");
const bordes = document.getElementById("bord")
const imagen = document.getElementById("imagens")

addEventListener("input", mod)
function mod() {

    imagen.style.height = altura.value + "px"
    imagen.style.width = ancho.value + "px"
    imagen.style.borderRadius = bordes.value + "px"
    
}