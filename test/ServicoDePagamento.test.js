import { ServicoDePagamento } from '../src/ServicoDePagamento.js';
import assert from 'node:assert';

describe('Testes do Serviço de Pagamento', function () {

    it('Deve criar pagamento da categoria do tipo cara', () => {

        const servicoDePagamento =
            new ServicoDePagamento();

        servicoDePagamento.pagar(
            '09864661461',
            'Fox LTDA',
            156.87
        );

        const pagamento =
            servicoDePagamento.consultarUltimoPagamento();

        assert.equal(
            pagamento.categoria,
            'cara'
        );
    });

    it('Deve criar pagamento da categoria do tipo padrão', () => {

        const servicoDePagamento =
            new ServicoDePagamento();

        servicoDePagamento.pagar(
            '615616',
            'EmpresaX',
            62
        );

        const pagamento =
            servicoDePagamento.consultarUltimoPagamento();

        assert.equal(
            pagamento.categoria,
            'padrão'
        );
    });

    it('Deve retornar o último pagamento realizado', () => {

        const servicoDePagamento =
            new ServicoDePagamento();

        servicoDePagamento.pagar(
            '165163513',
            'Empresa1',
            80
        );

        servicoDePagamento.pagar(
            '5165161',
            'Empresa2',
            150
        );

        const ultimo =
            servicoDePagamento.consultarUltimoPagamento();

        assert.equal(
            ultimo.codigoBarras,
            '5165161'
        );
    });

});