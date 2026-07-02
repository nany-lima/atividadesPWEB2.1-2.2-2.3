function iniciarJogo() {
 
  const numeroSecreto = Math.floor(Math.random() * 50) + 1;
  let palpite;

  do {
    palpite = parseInt(prompt("Digite um número entre 1 e 50:"), 10);

    if (isNaN(palpite)) {
      alert("Por favor, digite um número");
    } else if (palpite > numeroSecreto) {
      alert("O número secreto é menor!");
    } else if (palpite < numeroSecreto) {
      alert("O número secreto é maior!");
    } else {
      alert("Parabéns! Você acertou o número secreto: " + numeroSecreto);
    }
  } while (palpite !== numeroSecreto);
}
