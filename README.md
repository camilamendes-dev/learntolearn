# Learn to Learn English

Plataforma institucional para aprendizagem de inglês com apresentação do método, conteúdos, informações sobre o professor e agendamento de aulas experimentais. O sistema combina uma experiência pública com uma área autenticada para reservas e uma agenda administrativa para o professor.

> A versão publicada está disponível em [Learn to Learn English](https://learntoeng-tjpqkyu3.manus.space). O planejamento do time é acompanhado no [quadro Trello](https://trello.com/b/2af2Z4I1/laboratorio-de-software-projeto).

## Funcionalidades

| Área | Recursos disponíveis |
| --- | --- |
| Institucional | Páginas Início, Método, Como Funciona, Conteúdos e Sobre. |
| Agenda | Consulta pública de horários futuros disponíveis. |
| Aluno | Autenticação, reserva de aula e consulta/cancelamento das próprias aulas. |
| Administração | Criação de slots, gestão de estados e visão consolidada das reservas. |
| Qualidade | Tipagem TypeScript e testes automatizados com Vitest. |

## Tecnologias

O projeto utiliza **React 19**, **TypeScript**, **Vite**, **Tailwind CSS 4**, **Express 4**, **tRPC 11**, **Drizzle ORM** e **MySQL/TiDB**. A autenticação é realizada por **Manus OAuth**. A estrutura separa as páginas React em `client/`, os procedimentos e regras no servidor em `server/`, e o modelo persistente em `drizzle/`.

## Pré-requisitos

Para executar uma cópia local, a pessoa colaboradora precisa de Node.js 22 ou superior, `pnpm` 10 e acesso a uma base MySQL/TiDB. O fluxo de autenticação também requer os valores OAuth do ambiente de desenvolvimento; solicite-os ao mantenedor do projeto e **nunca** os publique no repositório.

## Instalação local

```bash
git clone https://github.com/SEU-USUARIO/learntolearn.git
cd learntolearn
corepack enable
pnpm install --frozen-lockfile
touch .env
```

Preencha o arquivo `.env` exclusivamente com credenciais próprias ou fornecidas pelo mantenedor em canal seguro. Em seguida, inicie o ambiente de desenvolvimento.

```bash
pnpm dev
```

## Variáveis de ambiente

Crie o arquivo `.env` local seguindo o [guia de ambiente local](docs/ambiente_local.md). Nenhum segredo deve ser adicionado a commits, issues, pull requests ou capturas de tela.

| Grupo | Variáveis |
| --- | --- |
| Banco de dados | `DATABASE_URL` |
| Sessão e OAuth | `JWT_SECRET`, `VITE_APP_ID`, `OAUTH_SERVER_URL`, `VITE_OAUTH_PORTAL_URL` |
| Administração | `OWNER_OPEN_ID`, `OWNER_NAME` |
| Serviços da plataforma | `BUILT_IN_FORGE_API_URL`, `BUILT_IN_FORGE_API_KEY` |
| E-mail opcional | `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `PROFESSOR_NOTIFICATION_EMAIL` |

## Comandos de desenvolvimento

| Comando | Finalidade |
| --- | --- |
| `pnpm dev` | Inicia o servidor de desenvolvimento. |
| `pnpm check` | Executa a verificação de tipos sem gerar arquivos. |
| `pnpm test` | Executa os testes automatizados. |
| `pnpm build` | Gera a versão de produção. |
| `pnpm db:push` | Gera e aplica as migrações configuradas; use somente com revisão prévia da equipe. |

Antes de abrir uma pull request, execute `pnpm check`, `pnpm test` e `pnpm build`. Nenhuma alteração deve ser enviada se introduzir falha nesses comandos.

## Organização do repositório

```text
client/                 interface React e páginas
server/                 API tRPC, regras de negócio e testes
drizzzle/               schema e migrações do banco
docs/                   requisitos, arquitetura e documentação do projeto
.github/                automação e modelos de colaboração do GitHub
```

## Fluxo de colaboração

O modelo adotado pela equipe é **fork e pull request**. Cada colega cria um fork de [camilamendes-dev/learntolearn](https://github.com/camilamendes-dev/learntolearn), desenvolve uma tarefa em branch própria e propõe a alteração para a branch `master` do repositório principal. Esse modelo permite colaboração sem conceder acesso direto de escrita ao repositório da equipe.

O fluxo de contribuição detalhado está em [CONTRIBUTING.md](CONTRIBUTING.md). Toda tarefa deve partir de um cartão do Trello, ser desenvolvida em uma branch curta e chegar à `master` somente por pull request revisada. Utilize títulos objetivos, por exemplo `feat: agenda-publica`, `fix: bloqueia-dupla-reserva` ou `docs: revisa-requisitos`.

## Segurança e escopo

O envio por e-mail via Resend depende de credenciais e remetente verificado, portanto não é garantia de entrega na versão atual. A verificação anti-bot, o perfil editável, a recuperação de senha local e o cancelamento administrativo permanecem evoluções planejadas. Consulte o [Documento de Requisitos](docs/requisitos_do_sistema.md) antes de alterar qualquer fluxo.

## Licença

Este projeto é distribuído sob a licença MIT, conforme definido no `package.json`. A equipe deve confirmar a titularidade e os créditos antes de disponibilizar o repositório publicamente.

## Referências

[1] [Documentação GitHub — Sobre pull requests](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)

[2] [Documento de Requisitos do Sistema](docs/requisitos_do_sistema.md)
