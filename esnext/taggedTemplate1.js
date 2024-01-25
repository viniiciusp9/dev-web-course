// tagged tamplates - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return "Outra String"
}

const aluno = "vinicius"
const situacao = "aprovado"
console.log(tag`${aluno} esta ${situacao}`)