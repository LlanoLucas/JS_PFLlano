const selectorProductos = document.getElementById("selector_productos");
const carritoProductos = document.getElementById("productos_carrito");

const filtroTodos = document.getElementById("todos");
const filtroVerdura = document.getElementById("verdura");
const filtroSinSal = document.getElementById("sin_sal");
const filtroDulces = document.getElementById("dulces");

const confirmarCompra = document.getElementById("confirmar-compra");
const comentarios = document.getElementById("comentarios");

let carritoLink = document.getElementsByClassName("nav-link");
let btnClose = document.getElementById("btn-close");

for (let i = 0; i < carritoLink.length; i++) {
  carritoLength = carritoLink[i].onclick = () => {
    setTimeout(() => {
      btnClose.click();
    }, 500);
  };
}
