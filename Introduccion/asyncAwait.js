//Las promesas son codigos asincronos, se ejecuta en plano secundario

const fetchPost = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = ["Post 1", "Post 2", "Post 3"];
      const error = false;

      if (error) {
        reject("Hubo un error al intentar obtener los post");
      } else {
        resolve(post);
      }
    }, 3000);
  });
};

//Haremos que el navegador espere si o si hasta que se ejecute por completo la promesa, hasta eso que no haga nada mas
//Await.- Hacemos que espere que termine la promesa y no ejecutara codigo hasta que nos devuelva algo
//Primero debemos utilizar una funcion que encierre a Await y esa funcion debe tener la palabra de async
//NO se puede tratabar con await sin async
//Ya no debemos usar try catch, con await si es correcta si se puede guardar en post, pero aun asi nos dvuelve algun error, si debemos usarlo
const mostrarPosts = async () => {
  try {
    const post = await fetchPost(); //Queremos que la espere pero sin ejecutar codigo hasta que nos responda
    console.log(post);
  } catch (error) {
    console.log(error);
  }
};

mostrarPosts();
