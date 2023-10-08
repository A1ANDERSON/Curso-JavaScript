const crearCookie = () => {
  //document.cookie = "nombre=Carlos";
  document.cookie = "nombre=Carlos; expires=1 Jan 2024 01:00:00 UTC";
};

const iniciarSesion = () => {
  const usuario = prompt("Usuario:");
  document.cookie = `nombre=${usuario} expires=1 Jan 2024 01:00:00 UTC`;
  alert("Sesion iniciada");
};
