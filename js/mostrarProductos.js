import { conexionApi } from "./conexionApi.js";
const lista = document.querySelector("[data-lista]");

function crearCard(nombre, precio, imagen, id){
    const contenProducto = document.createElement('div');
    contenProducto.className='contenedor__producto';
    contenProducto.innerHTML=`<img class="imagen__producto" src="/public/images/${imagen}" alt="tasa stormtrooper">
                <p class="nombre__producto">${nombre}</p>
                <div class="p_e_icono">
                    <p class="precio__producto">$ ${precio}</p>
                    <img src="/public/images/🦆 icon _trash.png" alt="eliminar" data-eliminar data-id="${id}">
                </div>`;

        return contenProducto;        
}

async function listProductos() { 
    try { const listApi = await conexionApi.listarProductos();
         // Espera la promesa 
         listApi.forEach(product => lista.appendChild(crearCard(product.nombre, product.precio, product.imagen, product.id)));
         } catch (error) { 
            console.error("Error al listar productos:", error);
         } 
        } 
        listProductos();
