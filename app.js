function adicionarAmigo() {
  const nomeInput = document.getElementById("amigo");
  const nome = nomeInput.value.trim();

  if (nome === "") {
    alert("Por favor, digite um nome válido.");
    return;
  }

  const listaAmigos = document.getElementById("listaAmigos");
  const li = document.createElement("li");
  li.textContent = nome;
  listaAmigos.appendChild(li);

  nomeInput.value = ""; // Limpa o campo de entrada
}

function sortearAmigo() {
  const listaAmigos = document.querySelectorAll("#listaAmigos li");

  if (listaAmigos.length === 0) {
    alert("Adicione pelo menos um nome antes de sortear.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * listaAmigos.length);
  const sorteado = listaAmigos[randomIndex].textContent;

  const resultadoList = document.getElementById("resultado");
  resultadoList.innerHTML = ""; // Limpa o resultado anterior
  const resultItem = document.createElement("li");
  resultItem.textContent = `O amigo secreto sorteado é: ${sorteado}`;
  resultadoList.appendChild(resultItem);
}
