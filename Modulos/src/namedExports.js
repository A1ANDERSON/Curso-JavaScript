//SOlo podemos exportar variables y nombres

//PRIMERA FORMA DE EXPORTAR
// export const nombre = "Carlos";

// export const obtenerPost = () => {
//   return ["Post 1", "Post 2", "Post 3"];
// };

//SEGUNDA FORMA DE EXPORTAR
const nombre = "Carlos";

const obtenerPost = () => {
  return ["Post 1", "Post 2", "Post 3"];
};

export { nombre, obtenerPost };
