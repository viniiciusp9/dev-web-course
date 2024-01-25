const imprimirNota = function(nota){
    if(nota > 7){
        console.log(`${nota} Aprovado`)
    } else {
        console.log(`${nota} Reprovado`)
    }
}

imprimirNota(10)
imprimirNota(4)
imprimirNota('Epa!!')// cuidado!!!