async function listarProductos(){
      const conexion = await fetch('http://localhost:3001/products');
      const conexionConvertida= conexion.json();
      
      return conexionConvertida
      //console.log(conexionConvertida);
          
}

export const conexionApi={
    listarProductos
}


