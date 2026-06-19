# Trabalho de Integração Contínua - Serviço de Pagamento

## Descrição

Projeto desenvolvido em JavaScript para simular um serviço de pagamento.

O sistema permite:

* Registrar pagamentos
* Classificar pagamentos em categorias
* Consultar o último pagamento realizado

## Tecnologias Utilizadas

* Node.js
* Mocha
* Mochawesome
* GitHub Actions

## Estrutura do Projeto

```text
src/
test/
.github/workflows/
```

## Instalação

Clone o repositório:

```bash
git clone https://github.com/JosielBarros/Pos-Graduacao-Programacao-Para-Automacao-Testes.git
```

Instale as dependências:

```bash
npm install
```

## Execução dos Testes

Executar os testes:

```bash
npm test
```

## Geração do Relatório

Executar os testes com geração de relatório HTML:

```bash
npm run test:report
```

O relatório será gerado em:

```text
mochawesome-report/mochawesome.html
```

## Pipeline de Integração Contínua

A pipeline foi implementada utilizando GitHub Actions.

### Triggers configurados

#### Push

Executa automaticamente quando há envio de código para a branch principal.

#### Workflow Dispatch

Permite execução manual através do botão "Run Workflow".

#### Schedule

Executa automaticamente em horários definidos utilizando expressão cron.

## Relatório na Pipeline

A pipeline gera automaticamente um relatório de testes utilizando Mochawesome.

O relatório é armazenado como Artifact da execução, permitindo download e consulta posterior.

## Conceitos Aplicados

* Integração Contínua (CI)
* Automação de Testes
* GitHub Actions
* Workflows
* Jobs
* Steps
* Triggers
* Artifacts

## Autor

Josiel Júnior
Pós-Graduação em Programação para Automação de Testes
