const alunos = [
  { nome: "JOAO", nota: 7.3, bolsista: false },
  { nome: "MARIA", nota: 9.2, bolsista: true },
  { nome: "PEDRO", nota: 9.8, bolsista: false },
  { nome: "ANA", nota: 8.7, bolsista: true },
];

console.log(alunos.map((a) => a.nota));
const resultado = alunos
  .map((a) => a.nota)
  .reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
  }, 0);

console.log(resultado);
