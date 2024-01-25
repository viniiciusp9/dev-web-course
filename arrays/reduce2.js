const alunos = [
  { nome: "JOAO", nota: 7.3, bolsista: false },
  { nome: "MARIA", nota: 9.2, bolsista: true },
  { nome: "PEDRO", nota: 9.8, bolsista: false },
  { nome: "ANA", nota: 8.7, bolsista: true },
];

// desafio 1 - todos os alunos são bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map((a) => a.bolsista).reduce(todosBolsistas));

// desafio 2 - algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map((a) => a.bolsista).reduce(algumBolsista));
