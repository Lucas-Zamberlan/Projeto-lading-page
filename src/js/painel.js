/*Quando cliclar seta temos que esconder tomas as imagens e mostrar a proxima imagem 

    a imagem atual começa em 0 pq é a primeira imagem 
    assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens
    pra poder saber que agora eu vou mostrar a segunda imagem

    esconder todas as imagens
        pegar todas as imagens usando o DOM e remover a classe mostrar

    mostrar a proxima imagem
        pegar todas as imagens, descobrir qual é a proxima, e colocar a classe 
        mostrar nela

*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;


//Quando cliclar seta temos que esconder tomas as imagens e mostrar a proxima imagem 

function esconderImagens(){
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })


}

function mostrarImagem(){
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function () {

    // Testa se o contador da imagemAtual é igual ao total de imagens
    const totalDeImagens = imagensPainel.length - 1;
    if (imagemAtual === totalDeImagens) {
        console.log('não pode avançar');
        return;
    }
    imagemAtual++;
  
    esconderImagens();
    mostrarImagem();

    if (imagemAtual === totalDeImagens) {
        setaAvancar.classList.remove('mostrar');
    }
    else {
        setaAvancar.classList.add('mostrar');
        setaVoltar.classList.add('mostrar')
    };

})

setaVoltar.addEventListener('click', function () {

    if (imagemAtual === 0) {
        console.log('Não tem mais como voltar')
        
        return;
    }
    imagemAtual--;
   esconderImagens();
   mostrarImagem();

     if (imagemAtual === 0) {
        setaVoltar.classList.remove('mostrar');
    }
    else {
        setaAvancar.classList.add('mostrar');
        setaVoltar.classList.add('mostrar')
    };


})