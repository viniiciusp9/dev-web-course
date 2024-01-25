// map => gera um novo array com a mesma quantidade de elementos do array selecionado

const numeros = [1, 2, 3, 4, 5];

// for com proposito
let resultado = numeros.map(function (e) {
  return e * 2;
});
console.log(numeros, resultado);

const soma10 = (e) => e + 10;
const triplo = (e) => e * 3;
const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

resultado = numeros.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);
