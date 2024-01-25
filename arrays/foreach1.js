const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1}: ${nome}`);
});

aprovados.forEach((indice) => console.log(indice));

const exibirAprovados = (aprovados) => console.log(aprovados);
aprovados.forEach(exibirAprovados);
