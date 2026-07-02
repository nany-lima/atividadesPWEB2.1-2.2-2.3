function iniciarJogo() {
  const palavras = [
    "javascript","programacao","computador","teclado","monitor",
    "internet","navegador","codigo","desenvolvedor","algoritmo",
    "variavel","funcao","objeto","array","string"
  ];

  const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
  const letras = palavraSecreta.split("");
  let tabuleiro = Array(letras.length).fill("_");
  let tentativas = 6;

  while (tentativas > 0 && tabuleiro.includes("_")) {
    const entrada = prompt("Chances restantes: " + tentativas + "\n" + tabuleiro.join(" ") + "\nDigite uma letra:");
    if (!entrada) {
      alert("Entrada inválida");
      continue;
    }
    const letra = entrada.trim().toLowerCase();
    if (letra.length !== 1) {
      alert("Digite apenas uma letra");
      continue;
    }

    if (letras.includes(letra)) {
      for (let i = 0; i < letras.length; i++) {
        if (letras[i] === letra) {
          tabuleiro[i] = letra;
        }
      }
    } else {
      tentativas--;
    }
  }

  if (!tabuleiro.includes("_")) {
    alert("Você venceu! A palavra era: " + palavraSecreta);
  } else {
    alert("Você perdeu! A palavra era: " + palavraSecreta);
  }
}
