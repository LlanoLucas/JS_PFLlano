fetch("js/talitas.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    localStorage.setItem("talitas", JSON.stringify(datos));
    renderSelector();
  })
  .catch(
    (err) =>
      (selectorProductos.innerHTML = `<ul class="m-auto mt-1"><li>Los productos no se encontraron...<li><li class="m-auto mt-1">${err}<li><ul>`)
  );
