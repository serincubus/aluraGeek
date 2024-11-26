async function listarProductos(){
      const conexion = await fetch('http://localhost:3001/products');
      const conexionConvertida= conexion.json();
      
      return conexionConvertida
      //console.log(conexionConvertida);
          
}

async function crearProducto(nombre,precio,imagen){
    const conexion = await fetch('http://localhost:3001/products',{
        method:"POST",
        headers:{"content.type": "application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
        
    })
    const conexionConvertida = conexion.json();
    return conexionConvertida
}

export const conexionApi={
    listarProductos,crearProducto
}


