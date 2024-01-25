const anonimo = process.argv.indexOf('-a') !== -1
console.log()

if (anonimo) {
    process.stdout.write('Fala Anonimo!\n')
    process.exit()
} else {
    process.stdout.write("informe o seu nome: ")
    process.stdin.on('data', data => {
        const nome = data.toString().replace(' \n', '')

        process.stdout.write(`Fala ${nome}!!\n `)
        process.exit()
    })
}