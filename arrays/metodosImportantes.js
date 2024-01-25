const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); // remove ultimo elemento do array
console.log(pilotos);

pilotos.push("Verstappen");
console.log(pilotos);

pilotos.shift(); // remove o primeiro elemento
console.log(pilotos);

pilotos.unshift("Hamilton"); // adiciona como primeiro elemento
console.log(pilotos);

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, "Botas", "Massa");
console.log(pilotos);

// remover elementos pelo metodo splice
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // retorna um novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
