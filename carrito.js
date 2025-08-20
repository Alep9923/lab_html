// Variables para el carrito
let totalItems = 0;
let totalPrecio = 0;
let productosAgregados = [];

// Función para agregar productos al carrito
function agregarAlCarrito(id, nombre, precio) {
    // Actualizar contadores
    totalItems++;
    totalPrecio += precio;
    
    // Actualizar HTML
    document.getElementById('total-items').textContent = totalItems;
    document.getElementById('total-precio').textContent = `$${totalPrecio.toFixed(2)}`;
    
    // Registrar producto en el array
    productosAgregados.push({id, nombre, precio});
    
    // Mostrar en consola
    console.log('Productos en el carrito:', productosAgregados);
    
    // Verificar envío gratis
    if (totalPrecio > 50) {
        document.getElementById('mensaje-envio').style.display = 'block';
        // Mostrar alerta solo la primera vez que supera los $50
        if (totalPrecio - precio <= 50) {
            alert("¡Envío gratis aplicado!");
        }
    }
}

// Función para vaciar el carrito
function vaciarCarrito() {
    // Restablecer contadores
    totalItems = 0;
    totalPrecio = 0;
    
    // Actualizar HTML
    document.getElementById('total-items').textContent = totalItems;
    document.getElementById('total-precio').textContent = `$${totalPrecio.toFixed(2)}`;
    
    // Ocultar mensaje de envío gratis
    document.getElementById('mensaje-envio').style.display = 'none';
    
    // Vaciar array de productos
    productosAgregados = [];
    
    // Mostrar alerta
    alert("Carrito vaciado");
    
    // Mostrar en consola
    console.log('Carrito vaciado. Productos en el carrito:', productosAgregados);
}