console.log(window);
// window.alert("Hola!");
//console.log(`La ventana de tu navegador mide ${window.innerWidth}px de ancho`);
//console.log(`La ventana de tu navegador mide ${window.innerHeight}px de alto`);

/*
  windows.open()
  Nos permite abrir ventanas del navegador
  Nota: Es posisble que el navegador te pida permisos para abrir una nueva ventana.

  - 1er parametro: DIreccion de la nueva ventana
  - 2do parametro: Nombre de la ventana
  - 3er parametro: Cadena de texto de opciones

  Nos devuelve un objeto para acceder a esa ventana

*/

let ventana;

const abrirVentana = () => {
  ventana = window.open(
    "https://google.com",
    "Mi nueva ventana",
    "width=500,height=500"
  );
  ventana.document.write("<h1>Hola, escribiendo en la nueva ventana!</h1>");
};

const cerrarVentana = () => {
  ventana.close();
};

/*
  Screen Object (Representa la pantalla del usuario)
  Representa la pantalla del usuario
*/
console.log("Ancho de pantalla:", window.screen.width);
console.log("Alto de pantalla", window.screen.height);

console.log(
  "Ancho de pantalla sin barra de Windows:",
  window.screen.availWidth
);
console.log(
  "Altura de pantalla sin barra de Windows:",
  window.screen.availHeight
);
