const contatorA = require("./instanciaUnica");
const contatorB = require("./instanciaUnica");

const contatorC = require("./instanciaNova")();
const contatorD = require("./instanciaNova")();

contatorA.inc();
contatorA.inc();
console.log(contatorA.valor, contatorB.valor);

contatorC.inc();
contatorC.inc();
console.log(contatorC.valor, contatorD.valor);
