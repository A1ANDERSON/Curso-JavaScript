/*
  📌 window.setTimeOut()
  Nos permite ejecutar una funcion despues de cierto tiempo
*/

// const saludo = () => {
//   console.log("Hola!");
// };

// let id;
// const iniciar = () => {
//   console.log("Iniciando timer");
//   id = setTimeout(saludo, 3000);
// };

// const parar = () => {
//   console.log("Parando timer");
//   clearTimeout(id);
// };

/*
  📌 window.setInterval()
  Nos permite ejecutar una funcion en cada cierto tiempo
*/
//FORMA INFINITA
// let cuenta = 0;

// setInterval(() => {
//   console.log(cuenta);
//   cuenta++;
// }, 1000);

//FORMA FINITA
let cuenta = 0;
let idl;

const iniciar = () => {
  id = setInterval(() => {
    console.log(cuenta);
    cuenta++;
  }, 1000);
};

const parar = () => {
  console.log("Paramos la cuenta");
  clearInterval(id);
};
