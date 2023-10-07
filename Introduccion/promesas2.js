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

//then -> exito
//catch -> fallido/error
//si no hacemos el proceso de aqui debajo la promesa quedara en un estado de pendiente y no se ejecutara del todo.
fetchPost()
  .then((post) => {
    console.log(post);
  })
  .catch((error) => {
    console.log(error);
  });
