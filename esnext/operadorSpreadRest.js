// operador ... rest(juntar)/spread(espalhar)
// usar rest com parametro de função

//usar spread com objeto
const funcionario = { nome: 'Vinicius', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = { a: 1, b: 2, c: 3 }
const grupoFinal = { d: 6, e: 5, f: 4, ...grupoA }
console.log(grupoFinal)