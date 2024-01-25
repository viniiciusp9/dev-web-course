function teste01(num) {
    if (num > 7)
        console.log(num)    
}
teste01(6)
teste01(8)
console.log('Final')

function teste02(num) {
    if (num > 7); { // cuidado com o ';', não usar com as estruturas de controle
        console.log(num)
    }
}

teste02(6)
teste02(8)