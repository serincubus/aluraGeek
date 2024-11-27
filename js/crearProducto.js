import { conexionApi } from "./conexionApi.js";

const formulario= document.querySelector("[data-formulario]");

async function crearProducto(evento){
  evento.preventDefault();
    const nombre= document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const imagen = document.querySelector("[data-imagen]");

    try { 
      await conexionApi.crearProducto(nombre, precio, imagen); 
      alert('Producto creado exitosamente'); 
    } 
    catch (error) { 
      console.error("Error al crear producto:", error); 
      alert('Hubo un error al crear el producto'); }
}

function limpiarFormulario(evento) {
   evento.preventDefault();
    formulario.reset(); // Esta función limpia todos los campos del formulario }
}
formulario.addEventListener("submit", crearProducto);