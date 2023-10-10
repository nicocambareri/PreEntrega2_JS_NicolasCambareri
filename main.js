
// Mensaje de bienvenida
alert("¡Bienvenido a la Carpintería, aquí podrás seleccionar los productos que quieras y agregarlos a tu carrito!");

// Listado de Productos
let productos = [
    {id: 1, nombre: 'Recorte de madera x m2', precio: 1000},
    {id: 2, nombre: 'Correderas', precio: 350},
    {id: 3, nombre: 'Tapa Cantos', precio: 150},
    {id: 4, nombre: 'Visagras', precio: 623},
    {id: 5, nombre: 'Tornillos', precio: 4},
];

// Mostrar los productos
let mensajeProductos = "Estos son nuestros productos y sus precios:\n";
productos.forEach(producto => {
    mensajeProductos += producto.id + ". " + producto.nombre + ": $" + producto.precio + "\n";
});
mensajeProductos += "Presiona 0 para terminar.";
alert(mensajeProductos);

let total = 0;
let seguirEligiendo = true;

while (seguirEligiendo) {
    let eleccion = parseInt(prompt("Introduce el número del producto que deseas añadir al carrito (o escribe '0' para finalizar):"), 10);

    let productoElegido = productos.find(producto => producto.id === eleccion);

    if (eleccion === 0) {
        seguirEligiendo = false;
    } else if (productoElegido) {
        total += productoElegido.precio;
        alert(productoElegido.nombre + " ha sido añadido al carrito.");
    } else {
        alert("Número no válido. Por favor, intenta de nuevo.");
    }
}

alert("El total de productos seleccionados es: $" + total);

