/*
depositar(valor): Deve adicionar o valor ao saldo da conta.
sacar(valor): Deve retirar o valor do saldo da conta, desde que haja saldo suficiente.
transferir(valor, outra_conta): Deve transferir o valor para outra conta, desde que haja saldo suficiente.
ver_extrato(): Deve retornar uma lista com todas as operações realizadas (depósitos, saques e transferências), além de mostrar o saldo atual.

Requisitos:
O saldo não pode ficar negativo.
*/

let conta1 = 0;
let conta2 = 0;
let transacoes = [];


function deposito(valor) {
    if(valor > 0) {
        conta1 += valor;
        console.log(`Deposito realizado com sucesso. CONTA = ${conta1}`);
        transacoes.push(`Deposito Parcial realizado de R$${valor}, SALDO EM CONTA = ${conta1}`);
        return;
    } 
        console.log('Valor insuficiente para deposito')
        transacoes.push("Tentativa de deposito mal sucedida");
    
}



function saque(valor) {
    if(valor <= conta1 && valor > 0) {
        conta1 -= valor;
        console.log(`Saque realizado com sucesso. CONTA = ${conta1}`);
        transacoes.push(`Saque Realizado de R$${valor}, SALDO EM CONTA ${conta1}`);
        return;
    } 
        console.log(`Saldo insuficiente na Conta. CONTA = ${conta1}`);
        transacoes.push("Tentativa de saque mal sucedida");

    

}

function transferencia(valor) {
    if( valor > 0 && valor <= conta1) {
        conta1 -= valor;
        conta2 += valor;
        console.log("Transferência realizada com sucesso.");
        transacoes.push(`Transferência Realizada de R$${valor}, SALDO EM CONTA ${conta1}`);
        return;
    }
        console.log(`Saldo insuficiente na Conta. CONTA = ${conta1}`);
        transacoes.push("Tentativa de transferência mal sucedida");
    
}


deposito(1000);
saque(300);
saque(300);
transferencia(600);
console.log('Operações Realizadas:', transacoes);