async function listarProductos(){
      const conexion = await fetch('http://localhost:3001/products');
      const conexionConvertida= conexion.json();
      
      return conexionConvertida
      //console.log(conexionConvertida);
          
}

async function crearProducto(nombre, precio, imagen) {
     const nuevoProducto = { 

        id: Date.now(), // Usar la marca de tiempo actual como id único 
        nombre: nombre.value, 
        precio: parseFloat(precio.value), // Asegurarse de que el precio sea un número 
        imagen: imagen.value 

        }; 
        
        
        const respuesta = await fetch('http://localhost:3001/products', { 

            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoProducto)
             
        });

        
              if (!respuesta.ok) {
                 throw new Error('Error al crear el producto');
                 }

                 return await respuesta.json(); 
                 
                }
                
export const conexionApi={
    listarProductos,crearProducto
}


