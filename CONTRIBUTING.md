# Guia de Contribuição

Este guia estabelece um fluxo simples para que colegas contribuam sem sobrescrever o trabalho de outras pessoas. Toda mudança deve estar associada a um cartão do Trello e ter escopo pequeno o suficiente para ser revisada com clareza.

## Antes de começar

Leia o [Documento de Requisitos](docs/requisitos_do_sistema.md), encontre o cartão correspondente no Trello e atualize o responsável e a coluna do fluxo antes de editar. Se a mudança criar ou alterar uma regra de negócio, registre também a decisão no cartão.

| Tipo de alteração | Branch sugerida | Exemplo |
| --- | --- | --- |
| Funcionalidade | `feat/<cartao>-<resumo>` | `feat/013-agenda-publica` |
| Correção | `fix/<cartao>-<resumo>` | `fix/015-dupla-reserva` |
| Documentação | `docs/<resumo>` | `docs/requisitos-sprint-1` |
| Teste | `test/<cartao>-<resumo>` | `test/014-reserva-autenticada` |

## Fluxo de trabalho por fork

O repositório principal é público e adota contribuição por **fork e pull request**. Esse modelo permite que qualquer colega obtenha uma cópia do código, proponha alterações e receba revisão sem acesso direto de escrita ao repositório da equipe.

Primeiro, selecione **Fork** no repositório [camilamendes-dev/learntolearn](https://github.com/camilamendes-dev/learntolearn). Em seguida, clone o seu fork e cadastre o repositório principal como `upstream`.

```bash
git clone https://github.com/SEU-USUARIO/learntolearn.git
cd learntolearn
git remote add upstream https://github.com/camilamendes-dev/learntolearn.git
git pull upstream master
```

Crie uma branch a partir de `master`, usando os padrões definidos neste documento. Implemente uma alteração coesa, execute `pnpm check`, `pnpm test` e `pnpm build`, e faça um commit semântico, por exemplo `feat: permite criar slot de aula`. Envie a branch ao seu fork com `git push origin <nome-da-branch>` e abra uma pull request do seu fork para `camilamendes-dev/learntolearn:master`.

Por fim, relacione a pull request ao cartão Trello, registre o resultado de QA e solicite revisão. Antes de começar uma nova tarefa, atualize a cópia local com `git pull upstream master`.

## Padrão de pull request

Uma pull request deve explicar o problema, a solução, os requisitos/cartões envolvidos e como a alteração foi validada. A pessoa autora não deve mesclar a própria alteração sem revisão de outro integrante, salvo decisão expressa e registrada pela equipe.

| Item obrigatório | Como verificar |
| --- | --- |
| Escopo rastreável | Cartão Trello identificado na descrição da pull request. |
| Qualidade | `pnpm check`, `pnpm test` e `pnpm build` concluídos. |
| Testes | Regra nova ou alterada coberta por teste quando aplicável. |
| Segurança | Nenhum segredo, `.env` ou dado pessoal real incluído. |
| Revisão | Pelo menos uma aprovação de colega antes da mesclagem. |

## Convenções técnicas

Mantenha páginas em `client/src/pages/`, componentes reutilizáveis em `client/src/components/` e regras/persistência do servidor em `server/`. Operações de dados devem usar os procedimentos tRPC existentes; não introduza chamadas HTTP paralelas sem justificativa. Mudanças no schema precisam ser revisadas antes da geração e aplicação de migrações.

## Segurança e dados pessoais

Nunca copie valores de `.env` para o GitHub. Não use nome, e-mail ou reserva de pessoas reais como dado de teste em issues, commits, logs ou capturas. O papel administrativo e os dados de reserva devem permanecer restritos às operações autorizadas.

## Referências

[1] [Documentação GitHub — Fluxos de contribuição](https://docs.github.com/pt/get-started/exploring-projects-on-github/contributing-to-open-source)

[2] [Documento de Requisitos do Sistema](docs/requisitos_do_sistema.md)
