// Pidiendo al usuario que elija su sector
let sector = prompt("Elija su sector:\n1-Industrial\n2-Financiera\n3-Servicios");

// Pidiendo al usuario que elija su tamaño
let tamaño = prompt("Elija su tamaño:\na-1-100\nb-100-300\nc-300-1000\nd-1000 o más");

// Concatenando las respuestas del usuario para utilizar en el switch
let combinacion = sector + tamaño;

// Utilizando un switch para determinar la acción correspondiente a la combinación de respuestas
switch (combinacion) {
  case "1a":
  case "1b":
  case "1c":
  alert ("El estandar recomendado es NIST");
    break;
case "2a":
case "2b":
case "2c":
 alert ("Se recomienda el estandar NIST acompañado de un SGSI basado en ISO27001")
}


let numControles = parseInt(prompt("Ingrese la cantidad de controles que desea agregar: "));
let controles = [];

for (let i = 0; i < numControles; i++) {
  let control = prompt(`Ingrese el nombre del control ${i+1}: `);
  controles.push(control);
}

let controlesStr = controles.join(", ");

alert(`La lista de controles ingresados es: ${controlesStr}`);

