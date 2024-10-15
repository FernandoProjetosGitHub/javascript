class EstoqueLoja {
    constructor () {
        this.estoque = {};
        this.historico = [];

    }
    adicionarproduto(NomeProduto, Quantidade) {

        if (Quantidade <= 0) {
        console.log('Quantidade deve ser maior que ZERO');
        return;
    }
        if (!this.estoque[NomeProduto]) {
            this.estoque[NomeProduto] = 0;
        }

        this.estoque[NomeProduto] += Quantidade;
        this.historico.push({ operacao: "Adição", produto: NomeProduto, Quantidade });
        console.log(`Adicionado ${Quantidade} unidade(s) de ${NomeProduto}. Estoque atual: ${this.estoque[NomeProduto]}`);
    }
    removerproduto(NomeProduto, Quantidade) {

        if  (!this.estoque[NomeProduto] ||  this.estoque[NomeProduto] < Quantidade) {
            console.log ('Estoque indisponível ou insuficiente.');
            return;

        }

        this.estoque[NomeProduto] -= Quantidade;
        this.historico.push({operacao: "Subtração", produto:NomeProduto, Quantidade});
        console.log(`Subtraido ${Quantidade} unidade(s) de ${NomeProduto}. Estoque atual: ${this.estoque[NomeProduto]}`);
    
    }
    transferirproduto(NomeProduto, Quantidade, Filial) {
        
        if  (!this.estoque[NomeProduto] ||  this.estoque[NomeProduto] < Quantidade) {
            console.log ('Estoque indisponível ou insuficiente.');
            return;
        }

        if (!(Filial instanceof EstoqueLoja)) {
            console.log('A loja de destino deve ser uma instância de EstoqueLoja.');
            return;
        }  


        this.estoque[NomeProduto] -= Quantidade;

        Filial.adicionarproduto(NomeProduto,Quantidade);

        this.historico.push({operacao: "Transferência", produto:NomeProduto, Quantidade});

        console.log (`Transferido ${Quantidade} unidade(s) de ${NomeProduto} Estoque atual: ${this.estoque[NomeProduto]}`);

    }
    exibirestoque() {
        for (const[NomeProduto,Quantidade] of Object.entries (this.estoque)) {

        console.log(`Estoque atual ${NomeProduto} ${Quantidade}`);
    }
    }
    historicodetransacoes() {

        console.log ('Histórico de Transações:');
        
        this.historico.forEach(transacao => {
            console.log (`${transacao.operacao} - Produto: ${transacao.produto}, Quantidade: ${transacao.Quantidade}`);    
        });
        
    }
     
}

const Loja1 = new EstoqueLoja();
const Loja2 = new EstoqueLoja();

Loja1.adicionarproduto('Cabide', 700);
Loja1.adicionarproduto('Manequin', 5);
Loja1.adicionarproduto('Registradora', 1);
Loja1.removerproduto('Cabide', 650);
Loja1.transferirproduto('Manequin', 1, Loja2);
Loja1.transferirproduto('Cabide', 20, Loja2);

Loja1.exibirestoque();
Loja1.historicodetransacoes();
