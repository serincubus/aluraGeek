import { conexionApi } from "./conexionApi.js";

const formulario= document.querySelector("[data-formulario]");

async function crearProducto(evento){
  evento.preventDefault();
    const nombre= document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const imagen = document.querySelector("[data-imagen]");

    await conexionApi.crearProducto(nombre,precio,imagen);
}

formulario.addEventListener("submit", evento=> crearProducto(evento));