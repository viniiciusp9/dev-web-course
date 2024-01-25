const imprimirNota = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log(`${nota} Quadro de Honra!`)
            break
        case 8: case 7:
            console.log(`${nota} Aprovado`)
            break
        case 6: case 5: case 4:
            console.log(`${nota} Recuperação`)
            break
        case 3: case 2: case 1: case 0:
            console.log(`${nota} Reprovado`)
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirNota(10)
imprimirNota(Math.floor(8.9))
imprimirNota(Math.floor(6.55))
imprimirNota(Math.floor(2.3))
imprimirNota(-1)
imprimirNota(11)