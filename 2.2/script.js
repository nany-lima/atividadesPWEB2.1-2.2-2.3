function iniciarJogo() {
  const opcoes = ["pedra", "papel", "tesoura"];
  let escolhaJogador = prompt("Digite sua escolha: pedra, papel ou tesoura");

  if (escolhaJogador) {
    escolhaJogador = escolhaJogador.trim().toLowerCase();
  }

  if (escolhaJogador !== "pedra" && escolhaJogador !== "papel" && escolhaJogador !== "tesoura") {
    alert("Entrada inválida! Digite apenas pedra, papel ou tesoura.");
    return;
  }

  const numeroComputador = Math.floor(Math.random() * 3);
  const escolhaComputador = opcoes[numeroComputador];

  alert("O computador escolheu: " + escolhaComputador);

  if (escolhaJogador === escolhaComputador) {
    alert("Empate!");
  } else if (
    (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
    (escolhaJogador === "tesoura" && escolhaComputador === "papel")
  ) {
    alert("Você venceu!");
  } else {
    alert("Você perdeu!");
  }
}
