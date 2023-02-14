function funcionER(){
    // document.getElementById() es una función que permite tomar elementos del documento (HTML) para 
    // leer y modificar su contenido y/o propiedades. 
    parrafo = document.getElementById("texto").innerHTML;
    resultado = document.getElementById("salida");

    /* La letra g al último de la expresión regular signigica "global" y es para que busque 
    coincidencias con la expresión regular en todo el texto, si no se usa solo buscará en el 
    primer renglón del texto. */
    const expresion = /\s\w+[^aeiou] /g;
    /* console.log() es para imprimir en consola. Usar F12 y seleccionar la pestaña "Console" 
    para ver la consola de JavaScript en Firefox y Chrome*/
    palabras = parrafo.match(expresion);
    console.log(palabras);
    palabras.forEach(function (item) {
        resultado.innerHTML = resultado.innerHTML + item + ", ";
    });
}
// Ejecutar función
funcionER();
