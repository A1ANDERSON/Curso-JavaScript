console.log(window.location);

//href - Retorna la url de la pagina actual
console.log(location.href);

//hostname - Retorna el host de la pagina actual
console.log(location.hostname);

// pathname - Retorna la ruta y archivo de la pagina actual
console.log(location.pathname);

//protocol - Retorna el protocolo utilizado
console.log(location.protocol);

// assign - asiggnamos una pagina hacia donde ir
const cargarDocumentos = () => {
  location.assign("https://google.com");
};

//back - regresar (lo que hace la fecla de ir hacia atras)
const regresar = () => {
  history.back(); //Volver hacia atras
};

//forward - ir hacia adelante (lo que hace la fecla de ir hacia hacia adelante)
const irAdelante = () => {
  history.forward();
};
