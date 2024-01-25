const tecnologia = new Map()
tecnologia.set("react", { framework: false })
tecnologia.set("angular", { framework: true })

console.log(tecnologia.get("react").framework)

const chaveVariadas = new Map([
    [function () { }, "funcao"],
    [{}, "objecto"],
    [123, "Numero"]
])

chaveVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chaveVariadas.has(123))
chaveVariadas.delete(123)
console.log(chaveVariadas.has(123))
console.log(chaveVariadas.size)

chaveVariadas.set(123, "a")
chaveVariadas.set(123, "b")
console.log(chaveVariadas)