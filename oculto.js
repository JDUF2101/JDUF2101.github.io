 // función para marcar las primeras letras en rojo
function descifrar() {
// obtener el texto ingresado
const texto = document.getElementById("texto").value;
// marcar las primeras letras en rojo
const textoMarcado = texto.replace(/(\b\w)/g, "<span style='color: black; font-weight: bold;'>$1</span>");
// mostrar el texto ingresado y el texto marcado en los cuadros correspondientes
const textoIngresado = document.getElementById("TextoPlano");
const textoMarcadoElem = document.getElementById("Simbolos");
textoIngresado.innerText = texto;
textoMarcadoElem.innerHTML = textoMarcado;
// obtener las letras marcadas en rojo
const Resaltar = texto.match(/\b\w/g).map((letra) => {
return letra.toUpperCase();
});
// mostrar el mensaje oculto (letras marcadas en rojo)
const MensajeOculto = document.getElementById("mensaje");
MensajeOculto.innerText = textoMarcado.replace(/<[^>]+>/g, ''); 
// mostrar las letras negras en un cuadro diferente
const Negritas = document.getElementById("mensajeOculto");
Negritas.innerText = Resaltar.join(' ');
}