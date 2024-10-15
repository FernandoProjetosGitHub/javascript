// não mutável 
const valor1 = 20;
// mutável 
let taligado = false;
let velocidade;
function ligarcarro() {
    
    taligado = true;
    velocidade = 0;
    console.log('o carro esta ligado',taligado,velocidade,'velocidade');
}

function acelerar() {
    if(!taligado){
        console.log('o carro nao esta ligado');
        return
    }
    velocidade += 20;
    console.log(velocidade,'velocidade');

}
function freiar() {
    velocidade -= 30;
    if(velocidade<0){
        velocidade = 0;
    }
    console.log(velocidade,'o carro esta desacelerando');
}
acelerar()
ligarcarro()
acelerar()
acelerar()
acelerar()
acelerar()
freiar()
freiar()
freiar()
freiar()
freiar()