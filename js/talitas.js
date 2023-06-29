fetch("js/talitas.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    localStorage.setItem("talitas", JSON.stringify(datos));
  });
