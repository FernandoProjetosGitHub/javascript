/*Desafio:
Implemente uma classe chamada EstoqueLoja para simular o controle de estoque de uma loja. A classe deve ter os seguintes métodos:

adicionar_produto(nome_produto, quantidade): Adiciona uma quantidade de determinado produto ao estoque.
remover_produto(nome_produto, quantidade): Remove uma quantidade de determinado produto do estoque, desde que haja estoque suficiente.
transferir_produto(nome_produto, quantidade, outra_loja): Transfere uma quantidade de determinado produto para outra loja, desde que haja estoque suficiente.
ver_estoque(): Exibe o estoque atual de todos os produtos.
historico_transacoes(): Mostra o histórico de todas as operações realizadas (adição, remoção, transferência).

Regras:
O estoque inicial de qualquer produto deve ser 0.
Não é permitido ter estoque negativo.
As transações devem ser registradas com o tipo de operação, o produto e a quantidade.
Salvar o estoque em um arquivo .json, 
você deve permitir a edição, delete item do estoque e inserção*/


class EstoqueLoja {
    

    constructor() {
        this.estoque = {} ;
        this.historico = [] ;

    }

    adicionar_produto(nome_produto, quantidade) {
        if (quantidade <= 0) {
            console.log('Quantidade deve ser maior que zero.');
            return;
        }
        if (!this.estoque [nome_produto]) {
            this.estoque [nome_produto] = 0;
        }

        this.estoque[nome_produto] += quantidade;
        this.historico.push({operacao: "Adição", produto: nome_produto, quantidade });
        console.log(`Adicionado ${quantidade} unidade(s) de ${nome_produto}. Estoque atual: ${this.estoque[nome_produto]}`);    
        
    }

    remover_produto(nome_produto, quantidade) {
        if (!this.estoque[nome_produto] || this.estoque[nome_produto] < quantidade) {
            console.log('Produto não encontrado no estoque ou quantidade insuficiente no estoque.');
            return;
        }

        this.estoque[nome_produto] -= quantidade;
        this.historico.push({ operacao: "Subtração", produto: nome_produto, quantidade });
        console.log(`Subtraido ${quantidade} unidade(s) de ${nome_produto}. Estoque atual: ${this.estoque[nome_produto]}`);
    }

    transferir_produto(nome_produto, quantidade, outra_loja) {
        if (!this.estoque[nome_produto] || this.estoque[nome_produto] < quantidade) {
            console.log('Produto não encontrado no estoque ou quantidade insuficiente no estoque.');
            return;
        }
        if (!(outra_loja instanceof EstoqueLoja)) {
            console.log('A loja de destino deve ser uma instância de EstoqueLoja.');
            return;
        }

        this.estoque[nome_produto] -= quantidade;

        outra_loja.adicionar_produto(nome_produto, quantidade);
        this.historico.push({operacao: "Transferência", produto: nome_produto, quantidade});
        console.log(`Transferindo ${quantidade} unidade(s) de ${nome_produto} para outra loja.`);
    }

    ver_estoque() {
        for (const [nome_produto,quantidade] of Object.entries(this.estoque)) {

        console.log(`Quantidade em estoque de ${nome_produto} é ${quantidade}`);
    }
    }
    historico_transacoes() {

        console.log('Histórico de Transações:');
        
        this.historico.forEach(transacao => {
            console.log(`${transacao.operacao} - Produto: ${transacao.produto}, Quantidade: ${transacao.quantidade}`);
        });
        

    }
}

const Loja1 = new EstoqueLoja();
const Loja2 = new EstoqueLoja();

Loja1.adicionar_produto('Camisa', 50);
Loja1.adicionar_produto('Calça', 100);
Loja1.remover_produto('Calça', 10);
Loja1.transferir_produto('Calça', 50, Loja2);

Loja1.ver_estoque();
Loja1.historico_transacoes();

