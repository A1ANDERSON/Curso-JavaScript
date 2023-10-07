/*
  Named Imports (Exportar enbase a un nombre)
*/

// import { nombre as nombreImportado, obtenerPost } from "./namedExports";
// console.log("Mi nombre es " + nombre);
// console.log(obtenerPost());

/*
  Namespace Imports (Exportar todo)
*/

// import * as datos from "./namedExports";
// console.log("Mi nombre es " + nombre);
// console.log(obtenerPost());

/*
  Default Imports
*/

// import obtenerUsuario from "./defaultExport";
// console.log(obtenerUsuario());

/*
  Empty Imports
  Carga todo el codigo pero sin hacer ningun objeto
*/

import "./emptyExport";
import { correo } from "./emptyExport";
console.log(correo);
