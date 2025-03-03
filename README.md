# Amigo Secreto

## Descrição
Este é um projeto simples de sorteio de Amigo Secreto, desenvolvido com HTML, CSS e JavaScript. Permite adicionar nomes de amigos a uma lista e sortear um deles aleatoriamente.

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript

## Estrutura do Projeto
```
/amigo-secreto/
|-- index.html
|-- style.css
|-- app.js
|-- assets/
    |-- amigo-secreto.png
    |-- play_circle_outline.png
```

## Funcionalidades
- Adicionar nomes de amigos a uma lista.
- Sortear um amigo secreto aleatoriamente.
- Exibir o resultado do sorteio na tela.

## Como Usar
1. Abra o arquivo `index.html` em um navegador.
2. Digite um nome no campo de entrada e clique em "Adicionar".
3. Adicione quantos nomes desejar.
4. Clique no botão "Sortear amigo" para realizar o sorteio.
5. O nome sorteado será exibido abaixo da lista de amigos.

## Exemplo de Uso
```html
<input type="text" id="amigo" class="input-name" placeholder="Digite um nome">
<button class="button-add" onclick="adicionarAmigo()">Adicionar</button>
```

```javascript
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

  nomeInput.value = "";
}
```

## Estilos
O estilo do projeto é definido no arquivo `style.css`, que configura a aparência do layout, fontes e botões.

## Melhorias Futuras
- Implementar a função de remover nomes da lista.
- Garantir que um mesmo nome não seja sorteado duas vezes consecutivas.
- Permitir exportar os resultados do sorteio.

## Link 
Aqui está o deploy do Projeto feito pelo Vercel.
https://desafio-amigo-secreto-phi.vercel.app

## Autor
Desenvolvido por Kauã Fernandes.

---

Sinta-se à vontade para modificar e aprimorar o projeto!
