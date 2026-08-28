# Auditoria de compatibilidade — quadro Trello Learn to Learn English

## Conclusão da auditoria

O quadro **Learn to Learn English** foi revisado em relação ao quadro-modelo do professor. A estrutura de trabalho, a visibilidade pública, o plano de fundo urbano azul, a numeração dos cartões, os responsáveis reais, os checklists nativos e a documentação foram padronizados sem alterar o escopo funcional já entregue pela aplicação. A comparação final foi realizada diretamente nos dois quadros em 26 de agosto de 2026.[1] [2]

> A compatibilidade alcançada refere-se aos **critérios de estrutura e documentação** do modelo. O volume de cartões do projeto é maior porque representa o escopo real da plataforma, e não uma cópia do estado inicial de demonstração do quadro-modelo.

## Comparativo final

| Critério do quadro-modelo | Estado final no Learn to Learn English | Evidência da auditoria |
| --- | --- | --- |
| Visibilidade | **Público**, conforme autorização expressa do usuário. | Aviso de quadro público presente no cabeçalho. |
| Plano de fundo | Visual urbano azul ao entardecer, equivalente à referência. | Comparação visual direta entre os quadros. |
| Listas | As cinco listas usam exatamente os mesmos nomes e emojis. | `Product Backlog 📥`, `Sprint Backlog 🚀`, `Em Desenvolvimento 💻`, `Em Testes 🧪` e `Entregue Release ✅`. |
| Numeração e títulos | Os cartões #001 a #023 mantêm títulos rastreáveis e numerados. | Três cartões em desenvolvimento e vinte no Product Backlog. |
| Responsáveis reais | Todos os cartões possuem membro atribuído no Trello. | Camila Mendes, Gabriel Santos Inácio ou Emerson Luiz Magro Massochim, conforme a matriz aprovada. |
| Checklist nativo | Todos os cartões possuem **Critérios de entrega**. | Item padrão: `Implementação, documentação e QA validados`. |
| Especificação do cartão | Todos os cartões possuem contexto, RF/RN ou RNF, critérios de aceite e documentação do desenvolvedor. | Arquivos e tecnologias foram ajustados para não referenciar componentes ou migrações inexistentes. |
| QA | Cada cartão contém múltiplos cenários em formato Gherkin, com status pendente. | Cobertura positiva, negativa, de permissão, acessibilidade ou borda conforme o escopo. |
| Veracidade funcional | Integrações planejadas não foram declaradas como concluídas. | Anti-bot permanece planejado; Resend é opcional e depende de credenciais. |

## Estrutura confirmada

| Lista | Total de cartões | Papel no fluxo |
| --- | ---: | --- |
| Product Backlog 📥 | 20 | Itens #004 a #023, priorizados e documentados para evolução. |
| Sprint Backlog 🚀 | 0 | Reservada para planejamento da próxima sprint. |
| Em Desenvolvimento 💻 | 3 | Itens #001 a #003, preservados no estágio de execução. |
| Em Testes 🧪 | 0 | Reservada para validação formal de entregas. |
| Entregue Release ✅ | 0 | Reservada para itens homologados e liberados. |

## Matriz de atribuição aplicada

| Responsável | Cartões atribuídos | Critério adotado |
| --- | --- | --- |
| Camila Mendes | #001, #002, #003, #004, #008, #009, #010, #012, #017 e #018 | Interface, experiência do usuário e QA. |
| Gabriel Santos Inácio | #005, #006, #007, #011, #013, #014, #015, #016, #019, #020, #021 e #022 | Back-end, autenticação, agenda, persistência e arquitetura. |
| Emerson Luiz Magro Massochim | #023 | Requisitos, privacidade, qualidade e revisão de produto. |

## Ajustes de rastreabilidade realizados na auditoria

As descrições dos cartões #001 a #023 foram uniformizadas no padrão do modelo. A auditoria também corrigiu referências técnicas que não correspondiam ao repositório: o cartão #008 não cita mais `PublicLayout.tsx`; o cartão #012 não descreve uma tela `Profile.tsx` inexistente como funcionalidade entregue; e os cartões #015, #020 e #023 não citam uma migração SQL inexistente. Esses cartões agora apontam apenas para páginas, procedimentos, schema e testes existentes.

O cartão #011 descreve a verificação anti-bot como uma evolução planejada, pois ela não está ativa na aplicação atual. Os cartões #016, #022 e #023 registram corretamente que o adaptador Resend não bloqueia reservas e que envio real de e-mail depende de credenciais e remetente verificado. Assim, a documentação mantém compatibilidade com o modelo de trabalho sem fabricar status funcional.

## Validação de membros

Foi realizada uma revisão posterior da inconsistência visual observada pelo Trello durante atribuições em massa. Na inspeção final dos cartões auditados, os membros apareceram individualmente nos cartões, incluindo Camila Mendes no #004, Gabriel Santos Inácio nos cartões de agenda e back-end, e Emerson Luiz Magro Massochim no #023. Não foi necessário alterar a matriz aprovada; caso o Trello volte a duplicar visualmente um avatar no seletor, o comportamento deverá ser tratado como apresentação da interface e não como nova atribuição sem confirmação no próprio cartão.

## Referências

[1] [Quadro-modelo do professor](https://trello.com/b/ACScfjeK/laboratorio-de-software-projeto-quadro-exemplo-que-deve-ser-criado-exatamente-igual-por-voces)

[2] [Quadro Learn to Learn English](https://trello.com/b/2af2Z4I1/laboratorio-de-software-projeto)
