var altura = 0
var largura = 0
var vidas = 1
var tempo = 20

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    var criaMosquitoTempo = 1500
}else if (nivel === 'dificil') {
    // 1000
    var criaMosquitoTempo = 1000

} else if (nivel === 'hard') {
    var criaMosquitoTempo = 750
}

// tornar a área flexivel para os mosquistos randomicos 
function ajustaTamanho (){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanho()

// cronometro
var cronometro = setInterval(function() {
    
    tempo -=1

    if (tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
         window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000);

// função para posicionar randomicamente
function posicaoRandomica(){
   
    // remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        
        if (vidas > 3) {
            window.location.href = 'fim_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
        }
        vidas++
    }
    
    // torna os mosquistos randomicos
    var posicaoX= Math.floor(Math.random() * largura) - 90
    var posicaoy = Math.floor(Math.random() * altura) - 90

    // corrigir posições negativas
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoy = posicaoy < 0 ? 0 : posicaoy

    console.log(posicaoX, posicaoy)

    // criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoy + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function (){
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamanhoAleatorio (){
    var classe = Math.floor(Math.random() * 3)

   switch (classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
   }
}

function ladoAleatorio (){
    var classe = Math.floor(Math.random() * 2)

    switch (classe){
         case 0:
             return 'ladoA'
         case 1:
             return 'ladoB'
    }
 }
 

