//TRATAMENTO DE ERROS

function funcionarOuNao(valor, chanceDeErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log("Testando")
            if (Math.random < chanceDeErro) {
                reject("Ocorreu um erro!")
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro especifico: ${err}`)
    )
    .then(() => console.log("Quase Fim!"))
    .catch(err => console.log(`Erro geral: ${err}`))
    .then(() => console.log("Fim!"))