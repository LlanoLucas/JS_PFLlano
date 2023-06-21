function filtros(tipo) {
  let productosFiltrados = cargarProducto().filter(
    (item) => item.tipo === tipo
  );

  filtroTodos.classList.remove("fw-semibold");
  filtroVerdura.classList.remove("fw-semibold");
  filtroSinSal.classList.remove("fw-semibold");
  filtroDulces.classList.remove("fw-semibold");

  let etiqueta = document.getElementById(tipo);
  etiqueta.classList.add("fw-semibold");

  if (tipo === "todos") {
    selectorProductos.innerHTML = "";
    renderSelector();
  } else {
    selectorProductos.innerHTML = "";

    productosFiltrados.forEach((element) => {
      if (element.tipo == "dulces") {
        selectorProductos.innerHTML += `<li class="nuevo">
          <div class="carrito__productos__descripcion">
            <img src=${element.imagen} alt="talita" />
            <div>
              <h4>${element.sabor}</h4>
              <p>${element.descripcion}</p>
            </div>
          </div>
          <div class="carrito__productos__botonera">
            <span class="carrito__productos__botonera__menos" id="menos${element.sabor.replaceAll(
              " ",
              ""
            )}"
            onclick="restarDelCarrito(${element.id})">-</span
            >
            <span class="carrito_prodcutos__botonera_num" id="cant${element.sabor.replaceAll(
              " ",
              ""
            )}"
              >${cantidadSelector(element.id)}</span
            >
            <span class="carrito__productos__botonera__mas" id="mas${element.sabor.replaceAll(
              " ",
              ""
            )}"
             onclick="agregarAlCarrito(${element.id})">+</span
            >
          </div>
        </li>`;
      } else {
        selectorProductos.innerHTML += `<li>
            <div class="carrito__productos__descripcion">
              <img src=${element.imagen} alt="talita" />
              <div>
                <h4>${element.sabor}</h4>
                <p>${element.descripcion}</p>
              </div>
            </div>
            <div class="carrito__productos__botonera">
              <span class="carrito__productos__botonera__menos" id="menos${
                element.sabor
              }"
              onclick="restarDelCarrito(${element.id})">-</span
              >
              <span class="carrito_prodcutos__botonera_num" id="cant${
                element.sabor
              }"
                >${cantidadSelector(element.id)}</span
              >
              <span class="carrito__productos__botonera__mas" id="mas${
                element.sabor
              }"
              onclick="agregarAlCarrito(${element.id})">+</span
              >
            </div>
          </li>`;
      }
    });
  }
}

function definirRender() {
  if (filtroTodos.classList.contains("fw-semibold")) {
    return renderSelector();
  } else if (filtroVerdura.classList.contains("fw-semibold")) {
    return filtros("verdura");
  } else if (filtroSinSal.classList.contains("fw-semibold")) {
    return filtros("sin_sal");
  } else if (filtroDulces.classList.contains("fw-semibold")) {
    return filtros("dulces");
  }
}
