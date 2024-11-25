import { conexionApi } from "./conexionApi.js";
const lista = document.querySelector("[data-lista]");

function crearCard(nombre, precio, imagen){
    const contenProducto = document.createElement('div');
    contenProducto.className('contenedor__producto');
    contenProducto.innerHTML=`<img class="imagen__producto" src="/public/images/${imagen}" alt="tasa stormtrooper">
                <p class="nombre__producto">${nombre}</p>
                <div class="p_e_icono">
                    <p class="precio__producto">$ ${precio}</p>
                    <img src="/public/images/🦆 icon _trash.png" alt="">
                </div>`;

        return contenProducto;        
}

async function listProductos(){
    const listApi=conexionApi.listarProductos()

    listApi.forEach(product => lista.appendChild(crearCard(product.nombre, product.precio, product.imagen)));
}

listProductos()
