class EstoqueLoja {
    constructor() {
        this.estoque = {};
        this.historico = [];
    }

    adicionar_produto(nome_produto, quantidade) {
        //quantidade adicionada deve ser maior que zero (0)
        if (quantidade <= 0) {
            console.log('Quantidade deve ser maior que zero.');
            return;
        }
        //estoque inexistente será criado, iniciando em zero (0)
        if (!this.estoque[nome_produto]) {
            this.estoque[nome_produto] = 0;
        }
        //adicionando certa quantidade ao estoque
        this.estoque[nome_produto] += quantidade;
        //registro de operação
        this.historico.push({ operacao: 'Adição', produto: nome_produto, quantidade });
        //mensagem a ser exibida
        console.log(`Adicionado ${quantidade} de ${nome_produto}. Estoque atual: ${this.estoque[nome_produto]}`);
    }

    remover_produto(nome_produto, quantidade) {
        //produto em estoque não existe/não encontrado ou quantidade em estoque insuficiente
        if (!this.estoque[nome_produto] || this.estoque[nome_produto] < quantidade) {
            console.log('Produto não encontrado ou estoque insuficiente.');
            return;
        }
        //remover certa quantidade do estoque
        this.estoque[nome_produto] -= quantidade;
        //registro de operação
        this.historico.push({ operacao: 'Remoção', produto: nome_produto, quantidade });
        //mensagem a ser exibida
        console.log(`Removido ${quantidade} de ${nome_produto}. Estoque atual: ${this.estoque[nome_produto]}`);
    }

    transferir_produto(nome_produto, quantidade, outra_loja) {
        //produto em estoque não existe/não encontrado ou quantidade em estoque insuficiente
        if (!this.estoque[nome_produto] || this.estoque[nome_produto] < quantidade) {
            console.log('Produto não encontrado ou estoque insuficiente.');
            return;
        }
        //remover certa quantidade do estoque
        this.estoque[nome_produto] -= quantidade;
        //adicionar produto ao estoque da lojaB(transferindo)
        outra_loja.adicionar_produto(nome_produto, quantidade);
        //registro de operação
        this.historico.push({ operacao: 'Transferência', produto: nome_produto, quantidade });
        //mensagem a ser exibida
        console.log(`Transferido ${quantidade} de ${nome_produto} para outra loja.`);
    }

    ver_estoque() {
        //instancia criada para exibir estoque(foreach) da lojaA
        for (const [produto, quantidade] of Object.entries(this.estoque)) {
            console.log(`${produto}: ${quantidade}`);
        }
        //mensagem a ser exibida
        console.log('Estoque atual:');
        
    }

    historico_transacoes() {
        //mostra o histórico de cada transação(foreach) [produto e quantidade]
        this.historico.forEach(transacao => {
            console.log(`${transacao.operacao} - Produto: ${transacao.produto}, Quantidade: ${transacao.quantidade}`);
        });
        //mensagem a ser exibida
        console.log('Histórico de Transações:');

    }
}

// Exemplo de uso
const loja1 = new EstoqueLoja();
const loja2 = new EstoqueLoja();

loja1.adicionar_produto('Camiseta', 50);
loja1.adicionar_produto('Calça', 30);
loja1.remover_produto('Camiseta', 10);
loja1.transferir_produto('Calça', 5, loja2);

loja1.ver_estoque();
loja2.ver_estoque();
loja1.historico_transacoes();
