export class ServicoDePagamento {
    #pagamentos

    constructor() {
        this.#pagamentos = [];
    }

    pagar(codigoBarras, empresa, valor) {

        const pagamento = {
            codigoBarras: codigoBarras,
            empresa: empresa,
            valor: valor,
            categoria: 'padrão'
        };

        if (valor > 100) {
            pagamento.categoria = 'cara';
        }

        this.#pagamentos.push(pagamento);
    }

    consultarUltimoPagamento() {
        return this.#pagamentos.at(-1);
    }
}