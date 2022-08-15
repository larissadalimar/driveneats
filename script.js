let opcaoSobremesa;
let opcaoComida;
let opcaoBebida;

let comida;
let bebida;
let sobremesa;

let valor_comida;
let valor_bebida;
let valor_sobremesa;

function selectOptionSobremesa(option){
    const opcaoSelecionada = document.querySelector('.sobremesa .selecionado')
    const iconeSelecionado = document.querySelector('.sobremesa .selecionado ion-icon')


    if(opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove('selecionado')
        iconeSelecionado.classList.add('escondido')
    }

    option.classList.add('selecionado');
    const novoIcone = document.querySelector('.sobremesa .selecionado ion-icon')
    novoIcone.classList.remove('escondido');

    opcaoSobremesa = true;

    sobremesa = option.childNodes[3].innerHTML;
    valor_sobremesa = option.childNodes[7].innerHTML
    valor_sobremesa = valor_sobremesa.split(' ')[1]
    valor_sobremesa = parseFloat(valor_sobremesa.replace(',', '.'))
    console.log(valor_sobremesa)
    verificaBotao();
}

function selectOptionComida(option){
    const opcaoSelecionada = document.querySelector('.comida .selecionado')
    const iconeSelecionado = document.querySelector('.comida .selecionado ion-icon')

    if(opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove('selecionado')
        iconeSelecionado.classList.add('escondido')
    }

    option.classList.add('selecionado');
    const novoIcone = document.querySelector('.comida .selecionado ion-icon')
    novoIcone.classList.remove('escondido');


    opcaoComida = true;

    comida = option.childNodes[3].innerHTML;
    valor_comida = option.childNodes[7].innerHTML
    valor_comida = valor_comida.split(' ')[1]
    valor_comida = parseFloat(valor_comida.replace(',', '.'))
    console.log(valor_comida);

    verificaBotao();
}

function selectOptionBebida(option){
    const opcaoSelecionada = document.querySelector('.bebida .selecionado')
    const iconeSelecionado = document.querySelector('.bebida .selecionado ion-icon')

    if(opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove('selecionado')
        iconeSelecionado.classList.add('escondido')
    }

    option.classList.add('selecionado');
    const novoIcone = document.querySelector('.bebida .selecionado ion-icon')
    novoIcone.classList.remove('escondido');

    opcaoBebida = true;

    bebida = option.childNodes[3].innerHTML;
    valor_bebida = option.childNodes[7].innerHTML
    valor_bebida = valor_bebida.split(' ')[1]
    valor_bebida = parseFloat(valor_bebida.replace(',', '.'))
    console.log(valor_bebida);

    verificaBotao();
}

function verificaBotao(){
    if (opcaoSobremesa && opcaoComida && opcaoBebida){
        const botao = document.querySelector('.botao-select button')
        botao.classList.add('verde')

        botao.innerHTML = 'Fechar Pedido'
    }
}

function whatsapp(){
    if (opcaoSobremesa && opcaoComida && opcaoBebida){
        encodeURIComponent(`https://wa.me/5521988417007?text=Olá, gostaria de fazer o pedido:
        - Prato: ${comida}
        - Bebida: ${bebida}
        - Sobremesa: ${sobremesa}
        Total: ${valor_comida + valor_bebida + valor_sobremesa}`)
    }
}