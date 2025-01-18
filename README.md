# Game Mata Mosquito

Bem-vindo ao jogo **Mata Mosquito**, um jogo interativo onde seu objetivo é clicar nos mosquitos que aparecem aleatoriamente na tela antes que o tempo acabe. Este projeto utiliza HTML, CSS e JavaScript.

---

## Recursos

- **Aleatoriedade**: Os mosquitos aparecem em posições e tamanhos aleatórios.
- **Níveis de dificuldade**: Escolha entre os níveis *normal*, *difícil* e *hard*, que ajustam o tempo de aparição dos mosquitos.
- **Sistema de vidas**: Você tem 3 chances antes do jogo acabar.
- **Cronômetro**: Termine o jogo antes que o tempo acabe.
- **Responsividade**: A área de jogo se ajusta ao tamanho da janela.

---

## Estrutura de Arquivos

- **index.html**: Arquivo principal do jogo.
- **style.css**: Contém os estilos do jogo (detalhes abaixo).
- **script.js**: Contém a lógica do jogo.
- **imagens/**: Pasta que contém:
  - `mosca.png`: Imagem do mosquito.
  - `coracao_cheio.png`: Imagem de um coração cheio.
  - `coracao_vazio.png`: Imagem de um coração vazio.
  - `mosquito-solid.svg`: Favicon do jogo.
  - `mata_mosca.png`: Cursor personalizado.
  - `bg.jpg`: Imagem de fundo do jogo.
- **vitoria.html**: Tela de vitória.
- **fim_jogo.html**: Tela de game over.

---

## Funcionalidades Principais
**1. Ajuste do Tamanho da Área de Jogo**
A função ajustaTamanho ajusta dinamicamente a área onde os mosquitos podem aparecer com base no tamanho da janela do navegador.

```javascript
  function ajustaTamanho () {
      altura = window.innerHeight;
      largura = window.innerWidth;
  }
```
---

## 2. Cronômetro
Um cronômetro que diminui em intervalos de 1 segundo. Se o tempo chegar a 0, o jogador é redirecionado para a tela de vitória.

```javascript
var cronometro = setInterval(function() {
    tempo -= 1;

    if (tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = 'vitoria.html';
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000);
```
---

## 3. Criação de Mosquitos
Os mosquitos aparecem em posições, tamanhos e orientações aleatórias.

```javascript
function posicaoRandomica() {
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function () {
        this.remove();
    };

    document.body.appendChild(mosquito);
}
```
---

## 4. Dificuldade
A velocidade de aparição dos mosquitos muda de acordo com o nível de dificuldade.

``` javascript
if (nivel === 'normal') {
    var criaMosquitoTempo = 1500;
} else if (nivel === 'dificil') {
    var criaMosquitoTempo = 1000;
} else if (nivel === 'hard') {
    var criaMosquitoTempo = 750;
}
```

---

## Como Jogar?
--Abra o arquivo index.html em um navegador.
--Escolha o nível de dificuldade através da URL:
  - ?normal
  - ?dificil
  - ?hard
--Clique nos mosquitos antes que o tempo acabe ou que você perca todas as vidas.
**Aproveite!**
