# Registro consolidado de adequação do Trello

## Objetivo e escopo

Este registro documenta a adequação do quadro **Learn to Learn English** ao padrão de trabalho apresentado pelo professor. O trabalho concentrou-se no Trello: listas, aparência, cartões, responsáveis, checklists nativos, documentação e ordenação. Nenhuma mudança de escopo funcional foi introduzida no site durante essa adequação.[1] [2]

## Configuração e ordenação do quadro

| Item | Resultado registrado |
| --- | --- |
| Visibilidade | Quadro definido como **Público**, após autorização explícita do usuário. |
| Fundo | Plano de fundo urbano azul aplicado para aproximar a apresentação visual da referência. |
| Listas | Cinco listas preservadas exatamente: `Product Backlog 📥`, `Sprint Backlog 🚀`, `Em Desenvolvimento 💻`, `Em Testes 🧪` e `Entregue Release ✅`. |
| Distribuição | #001 a #003 em **Em Desenvolvimento 💻**; #004 a #023 em **Product Backlog 📥**. |
| Ordem final | **Em Desenvolvimento 💻**: #001, #002, #003. **Product Backlog 📥**: #004 a #023, em ordem numérica crescente. |

Em 26 de agosto de 2026, a lista **Product Backlog 📥** foi ordenada pelo nome dos cartões. Como todos os títulos adotam prefixos numéricos padronizados, a ordenação alfabética resultou na sequência crescente #004, #005, #006, #007, #008 até #023. A lista **Em Desenvolvimento 💻** já se encontrava na sequência #001, #002 e #003. As demais listas não possuem cartões, logo não exigiram reordenação.[2]

## Cartões e responsabilidades

Os cartões #008 a #023 foram criados para representar os requisitos institucionais, de agenda, reservas, concorrência, permissões e qualidade da plataforma. Os cartões legados #001 a #007 foram revisados posteriormente para o mesmo nível de documentação.

| Grupo | Responsável atribuído no Trello | Justificativa |
| --- | --- | --- |
| #001–#004 | Camila Mendes | Design, layout institucional, experiência de interface e QA. |
| #005–#007 | Gabriel Santos Inácio | Autenticação e evolução de conta. |
| #008–#010 | Camila Mendes | Páginas institucionais, responsividade e acessibilidade. |
| #011, #013–#016, #019–#022 | Gabriel Santos Inácio | Segurança planejada, agenda, reserva, concorrência, administração e autorização. |
| #012, #017–#018 | Camila Mendes | Experiência autenticada do aluno e validação de interface. |
| #023 | Emerson Luiz Magro Massochim | Qualidade, privacidade e revisão de produto. |

Todos os cartões #001 a #023 possuem o checklist nativo **Critérios de entrega** com o item **Implementação, documentação e QA validados**. A presença de membros foi confirmada diretamente durante a auditoria final; o comportamento visual inconsistente do seletor de membros do Trello não persistiu nos cartões verificados.

## Padrão documental aplicado

Cada cartão passou a adotar uma estrutura compatível com o cartão-modelo: papéis, descrição da funcionalidade ou da evolução planejada, requisitos numerados, regras de negócio, critérios de aceite, tecnologias, detalhes de implementação, arquivos alterados ou referenciados, recomendações de QA e múltiplos cenários Gherkin.

> Os cenários de QA permanecem com **status pendente** enquanto não representam uma execução formal de teste. Essa escolha preserva a rastreabilidade e evita registrar evidências que não foram produzidas.

| Cartões revisados com atenção especial | Correção aplicada |
| --- | --- |
| #004 | Checklist nativo e Camila Mendes foram adicionados; a página Como Funciona foi documentada com RF/RN e quatro cenários Gherkin. |
| #005–#007 | Os fluxos de login, recuperação e cadastro foram reconciliados com o Manus OAuth; não foram declarados formulários próprios, login social direto, senha local ou passkey como entregues. |
| #008 | A referência inexistente a `PublicLayout.tsx` foi removida e a documentação passou a registrar arquivos reais. |
| #012 | A tela `Profile.tsx` inexistente deixou de ser descrita como funcionalidade entregue; o cartão registra evolução futura baseada na sessão existente. |
| #015, #020 e #023 | A referência a uma migração SQL inexistente foi removida; as descrições agora indicam somente arquivos reais do projeto. |
| #011 e #016, #022, #023 | Anti-bot permanece planejado; o e-mail Resend permanece opcional e dependente de credenciais, sem bloquear reservas. |

## Auditoria individual e evidências finais

Foi feita inspeção direta dos cartões #001 a #023. A auditoria confirmou, para cada grupo de cartões, título numerado, posição em lista, membro responsável, checklist nativo e descrição com os blocos documentais necessários. Nos cartões de agenda e administração, também foram conferidas a coerência dos requisitos com as páginas `Schedule`, `MyLessons` e `AdminSchedule`, os procedimentos tRPC, o schema Drizzle/MySQL e as regras de autorização.

| Verificação | Resultado |
| --- | --- |
| Listas e emojis | Confirmados idênticos ao modelo. |
| Visibilidade e fundo | Confirmados como público e urbano azul. |
| Ordem dos cartões | Confirmada crescente em cada lista com cartões: #001–#003 e #004–#023. |
| Cartões #001–#007 | Revisados, padronizados e com checklist/responsável. |
| Cartões #008–#023 | Auditados individualmente; membros e checklists confirmados. |
| Indicadores de checklist | Indicador visual `0/1` confirmado no quadro e progresso pendente (`0%`) confirmado na visão dos cartões. |
| Cenários Gherkin | Múltiplos cenários por cartão, incluindo casos positivos, negativos, permissão, acessibilidade ou borda. |
| Veracidade do escopo | Confirmada; funcionalidades futuras são identificadas como planejadas. |

No cartão **#002**, Camila Mendes foi atribuída explicitamente no seletor de membros. Após a ação, o seletor passou a oferecer **Remover Camila Mendes**, evidenciando a atribuição real e encerrando a única pendência de membro sem badge visível em inspeção anterior.

## Referências

[1] [Quadro-modelo do professor](https://trello.com/b/ACScfjeK/laboratorio-de-software-projeto-quadro-exemplo-que-deve-ser-criado-exatamente-igual-por-voces)

[2] [Quadro Learn to Learn English](https://trello.com/b/2af2Z4I1/laboratorio-de-software-projeto)
