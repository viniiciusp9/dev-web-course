const notas = [5, 6, 7, 8, 9]

for (i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Vinicius',
    sobrenome: 'Siqueira',
    idade: 24
}

for (atributos in pessoa) {
    console.log(`${atributos} = ${pessoa[atributos]}`)
}