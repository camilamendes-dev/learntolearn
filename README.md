# Learn to Learn English

<p align="center">
  <strong>Aprender inglês para usar no mundo real.</strong><br>
  Plataforma institucional e de agendamento para uma experiência de aprendizagem mais clara, prática e autônoma.
</p>

<p align="center">
  <a href="https://learntoeng-tjpqkyu3.manus.space">Aplicação publicada</a> ·
  <a href="https://trello.com/b/2af2Z4I1/laboratorio-de-software-projeto">Quadro do projeto</a> ·
  <a href="CONTRIBUTING.md">Como contribuir</a>
</p>

## Visão geral

O **Learn to Learn English** é uma plataforma web para apresentar uma proposta de ensino de inglês, organizar conteúdos institucionais e apoiar o agendamento de aulas experimentais. A aplicação combina páginas públicas, autenticação de alunos, reserva de horários e uma área administrativa para gestão da agenda.

O produto foi construído com foco em uma experiência editorial: identidade visual em creme, verde e amarelo, tipografia de alto contraste, navegação direta e conteúdo organizado para conduzir a pessoa visitante da descoberta do método até o próximo passo.

## Demonstração visual

As imagens abaixo mostram capturas reais da aplicação publicada em resolução desktop. Elas apresentam a composição visual e os principais fluxos institucionais do projeto.

### Página inicial

A landing page apresenta a proposta de valor, o método Observe–Pratique–Use, os conteúdos e chamadas para conhecer a plataforma ou iniciar o agendamento.

![Página inicial do Learn to Learn English](https://learntoeng-tjpqkyu3.manus.space/manus-storage/home_a2d20f90.png)

### Método

A página Método explica a abordagem pedagógica em três movimentos: observar a língua em contexto, praticar de forma consistente e usar o inglês em situações reais.

![Página Método](https://learntoeng-tjpqkyu3.manus.space/manus-storage/metodo_4a01c885.png)

### Como funciona

A página Como Funciona transforma o método em uma jornada visual, com etapas alternadas e uma chamada para o primeiro encontro.

![Página Como Funciona](https://learntoeng-tjpqkyu3.manus.space/manus-storage/como-funciona_01e47bf5.png)

### Conteúdos

A página Conteúdos organiza a proposta em aulas, materiais e ferramentas para apoiar uma rotina de aprendizagem autônoma.

![Página Conteúdos](https://learntoeng-tjpqkyu3.manus.space/manus-storage/conteudos_5bf260e5.png)

### Sobre

A página Sobre apresenta a missão, a visão e a proposta pedagógica do professor, reforçando a dimensão humana do produto.

![Página Sobre](https://learntoeng-tjpqkyu3.manus.space/manus-storage/sobre_a9e73393.png)

### Agendamento

A página de agendamento apresenta os horários futuros disponíveis e conduz a pessoa autenticada ao fluxo de reserva. Quando não há slots publicados, a interface informa essa situação sem simular disponibilidade.

![Página de agendamento](https://learntoeng-tjpqkyu3.manus.space/manus-storage/agendar_7b92b8a3.png)

## Funcionalidades

| Área | O que está disponível |
| --- | --- |
| Institucional | Início, Método, Como Funciona, Conteúdos e Sobre, com navegação integrada. |
| Aprendizagem | Apresentação do método Observe, Pratique e Use e organização de conteúdos. |
| Agenda pública | Consulta de horários futuros publicados pelo professor. |
| Área do aluno | Autenticação, reserva de aula experimental, consulta das próprias aulas e cancelamento dentro da regra vigente. |
| Administração | Criação de horários, gestão de estados e visualização consolidada das reservas. |
| Qualidade | Interface responsiva, cuidados de acessibilidade, tipagem TypeScript e testes automatizados. |

## Arquitetura técnica

A aplicação utiliza uma arquitetura full-stack TypeScript, com contratos tipados entre interface e servidor.

| Camada | Tecnologias e responsabilidade |
| --- | --- |
| Interface | React 19, TypeScript, Vite, Tailwind CSS 4 e componentes reutilizáveis. |
| Servidor | Node.js, Express 4 e tRPC 11 para procedimentos tipados. |
| Persistência | Drizzle ORM sobre MySQL/TiDB, com usuários, slots e reservas. |
| Autenticação | Manus OAuth e sessões protegidas no servidor. |
| Testes | Vitest para regras de negócio, reservas e permissões administrativas. |
| Publicação | Aplicação hospedada em `manus.space` e código versionado no GitHub. |

## Estrutura do projeto

```text
client/                 Interface React, rotas e páginas
server/                 API tRPC, regras de negócio e testes
drizzle/                Schema e configuração de persistência
docs/                   Requisitos, arquitetura e documentação do projeto
.github/                CI, templates de issues e pull requests
shared/                 Tipos e constantes compartilhados
```

## Execução local

### Pré-requisitos

É necessário ter Node.js 22 ou superior, `pnpm` 10 e acesso a uma base MySQL/TiDB. O ambiente autenticado também depende das variáveis OAuth fornecidas pelo mantenedor. **Nunca publique credenciais no repositório.**

### Instalação

```bash
git clone https://github.com/SEU-USUARIO/learntolearn.git
cd learntolearn
corepack enable
pnpm install --frozen-lockfile
touch .env
```

Preencha o `.env` com valores próprios ou fornecidos pelo mantenedor em canal seguro. Depois, inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

### Comandos principais

| Comando | Finalidade |
| --- | --- |
| `pnpm dev` | Inicia o ambiente de desenvolvimento. |
| `pnpm check` | Executa a verificação de tipos. |
| `pnpm test` | Executa os testes automatizados. |
| `pnpm build` | Gera a versão de produção. |
| `pnpm db:push` | Gera e aplica alterações de banco após revisão da equipe. |

Antes de abrir uma pull request, execute `pnpm check`, `pnpm test` e `pnpm build`.

## Configuração de ambiente

Crie o arquivo `.env` na raiz e consulte [`docs/ambiente_local.md`](docs/ambiente_local.md) para a configuração segura. As credenciais de OAuth, banco de dados, sessão e serviços externos devem permanecer apenas no ambiente local ou no gerenciador de segredos da hospedagem.

O envio de e-mails por Resend está preparado para ativação posterior com chave, remetente e destinatário verificados. A aplicação não deve ser apresentada como enviando e-mails reais enquanto essas credenciais não estiverem configuradas.

## Estado funcional e escopo

A versão publicada contém a experiência institucional, o fluxo de agenda e a base de autenticação e reservas. Alguns itens permanecem como evolução planejada, incluindo verificação anti-bot, perfil editável, recuperação de senha local e cancelamento administrativo. A especificação completa está em [`docs/requisitos_do_sistema.md`](docs/requisitos_do_sistema.md), e o acompanhamento das tarefas está no [Trello](https://trello.com/b/2af2Z4I1/laboratorio-de-software-projeto).

## Como contribuir

O repositório adota o modelo **fork e pull request**. Faça um fork, clone sua cópia, adicione o repositório principal como `upstream`, crie uma branch curta relacionada a um cartão do Trello, execute as validações e abra uma pull request para `master`.

O roteiro completo, os padrões de branch, os critérios de revisão e as orientações de segurança estão em [`CONTRIBUTING.md`](CONTRIBUTING.md). Não inclua arquivos `.env`, credenciais, dados pessoais reais ou reservas de teste com informações identificáveis.

## Documentação complementar

| Documento | Finalidade |
| --- | --- |
| [`docs/requisitos_do_sistema.md`](docs/requisitos_do_sistema.md) | Requisitos funcionais, regras de negócio, critérios de aceite e escopo planejado. |
| [`docs/architecture.md`](docs/architecture.md) | Decisões e visão geral da arquitetura. |
| [`docs/ambiente_local.md`](docs/ambiente_local.md) | Configuração segura do ambiente de desenvolvimento. |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | Fluxo de fork, branches, validação e pull requests. |
| [Quadro Trello](https://trello.com/b/2af2Z4I1/laboratorio-de-software-projeto) | Planejamento, responsáveis, checklists e QA. |

## Referências

[1] [Aplicação publicada — Learn to Learn English](https://learntoeng-tjpqkyu3.manus.space)

[2] [Repositório GitHub — camilamendes-dev/learntolearn](https://github.com/camilamendes-dev/learntolearn)

[3] [Documentação GitHub — Pull requests](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
