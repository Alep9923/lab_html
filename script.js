const votosWeb = document.getElementById("votos_Web");
const votosJS = document.getElementById("votos_JavaScript");
const votosData = document.getElementById("votos_Data");

const alerta = document.getElementById("Alerta")
const alert = document.getElementById("")

const botonWeb = document.getElementById("Web");
const botonJS = document.getElementById("JavaScript");
const botonData = document.getElementById("Data");

let contadorWeb = 0;
let contadorJS = 0;
let contadorData = 0;


function actualizarVotos() {
    votosWeb.textContent = `Votos Web: ${contadorWeb}`;
    votosJS.textContent = `Votos JavaScript: ${contadorJS}`;
    votosData.textContent = `Votos Database: ${contadorData}`;
}
botonWeb.addEventListener("click", function() {
    contadorWeb++;
    votosWeb.textContent = `Votos Diseño Web: ${contadorWeb}`;
});

botonJS.addEventListener("click", function() {
    contadorJS++;
    votosJS.textContent = `Votos JavaScript: ${contadorJS}`;
});

botonData.addEventListener("click", function() {
    contadorData++;
    votosData.textContent = `Votos Database: ${contadorData}`;
});

console.log(document.getElementById("votos_Data"));
console.log(document.getElementById("votos_JavaScript"));
console.log(document.getElementById("votos_Web"));