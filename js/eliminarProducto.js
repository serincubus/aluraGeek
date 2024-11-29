

 async function eliminarProducto(id) { 
    try { const respuesta = await fetch(`http://localhost:3001/products/${id}`, {
         method: 'DELETE', 
         headers: { 'Content-Type': 'application/json' } });

          if (!respuesta.ok) { 
            throw new Error('Error al eliminar el producto');
         } alert('Producto eliminado exitosamente');

          location.reload(); // Recargar la página para reflejar los cambios

          } catch (error) { 
            console.error("Error al eliminar producto:", error);
             alert('Hubo un error al eliminar el producto');
             } } 
             
             document.addEventListener('click', function (evento) {
                 
                if (evento.target && evento.target.matches('img[data-eliminar]')) {
                     
                    const idProducto = evento.target.getAttribute('data-id'); 
                     eliminarProducto(idProducto);
                     } });