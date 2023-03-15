// Función para obtener el estándar recomendado según la combinación de sector y tamaño
function obtenerEstándar(sector, tamaño) {
  const combinacion = sector + tamaño;

  switch (combinacion) {
    case "1a":
    case "1b":
    case "1c":
      return "NIST";
    case "2a":
    case "2b":
    case "2c":
      return "NIST acompañado de un SGSI basado en ISO27001";
    default:
      return "Estándar no disponible para esta combinación de sector y tamaño.";
  }
}

// Pidiendo al usuario que elija su sector y tamaño
const sector = prompt("Elija su sector:\n1-Industrial\n2-Financiera\n3-Servicios");
const tamaño = prompt("Elija su tamaño:\na-1-100\nb-100-300\nc-300-1000\nd-1000 o más");

// Obteniendo el estándar recomendado para la combinación de sector y tamaño
const estándarRecomendado = obtenerEstándar(sector, tamaño);
alert(`El estándar recomendado es ${estándarRecomendado}.`);

// Pidiendo al usuario que ingrese los controles que desea agregar
const numControles = parseInt(prompt("Ingrese la cantidad de controles que desea agregar: "));
const controles = [];

for (let i = 0; i < numControles; i++) {
  const control = prompt(`Ingrese el nombre del control ${i+1}: `);
  controles.push(control);
}

// Filtrando los controles que contienen la palabra "seguridad"
const controlesSeguridad = controles.filter(control => control.toLowerCase().includes("seguridad"));

// Imprimiendo la lista de controles ingresados y los controles relacionados con seguridad
const controlesStr = controles.join(", ");
const controlesSeguridadStr = controlesSeguridad.join(", ");
alert(`La lista de controles ingresados es: ${controlesStr}. Los controles relacionados con seguridad son: ${controlesSeguridadStr}.`);

// Buscando un control específico ingresado por el usuario
const controlBuscado = prompt("Ingrese el nombre de un control para buscarlo en la lista:");
const controlEncontrado = controles.find(control => control.toLowerCase() === controlBuscado.toLowerCase());

if (controlEncontrado) {
  alert(`El control "${controlEncontrado}" ha sido encontrado en la lista.`);
} else {
  alert(`El control "${controlBuscado}" no ha sido encontrado en la lista.`);
}
