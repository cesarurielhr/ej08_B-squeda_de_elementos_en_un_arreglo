//Nombres
let nombres = ['Carlos', 'Ana', 'Luis', 'Marta', 'Elena'];


// Cadena con el nombre que se quiere buscar 
let nombreABuscar = 'Ana';


//Condicion de verificacion 
if (nombres.includes(nombreABuscar)) {
  console.log(nombreABuscar + ' está presente en el arreglo.');
} else {
  console.log(nombreABuscar + ' no está presente en el arreglo.');
}
