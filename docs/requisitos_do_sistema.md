# Documento de Requisitos do Sistema

## Learn to Learn English

| Campo | Definição |
| --- | --- |
| Versão do documento | 1.0 — consolidação para a primeira sprint acadêmica |
| Data | 27 de agosto de 2026 |
| Situação | Baseline de requisitos revisada e coerente com a versão atual do produto |
| Produto | Plataforma institucional de inglês com agendamento de aula experimental |
| Elaborado por | Manus AI, a partir do produto, da arquitetura e do backlog da equipe |
| Papéis do projeto | PO: Emerson Luiz Magro Massochim; Scrum Master: Gabriel Santos Inácio; Interface e QA: Camila Mendes |

---

## 1. Propósito do documento

Este documento estabelece os requisitos funcionais, as regras de negócio, os requisitos não funcionais e os critérios de aceite da plataforma **Learn to Learn English**. A sua finalidade é servir como referência única para planejamento de sprint, desenvolvimento, testes e revisão de entregas, evitando que o Trello, o código e a apresentação do projeto transmitam informações divergentes.

O texto descreve **o que está disponível na versão atual**, além de distinguir explicitamente as evoluções planejadas. Assim, funcionalidades como proteção anti-bot, edição de perfil, redefinição de senha própria e e-mail transacional ao aluno não são tratadas como entregas concluídas. A plataforma publicada e o quadro do projeto são as referências externas de acompanhamento.[1] [2]

> **Definição de pronto:** um requisito só deve ser considerado concluído quando a implementação estiver disponível, os critérios de aceite forem verificados e os cenários de QA correspondentes tiverem evidência registrada.

## 2. Visão do produto e problema atendido

A Learn to Learn English é uma plataforma para apresentar a proposta pedagógica de aulas de inglês e organizar aulas experimentais. O problema central é reduzir a distância entre o interesse inicial do visitante e a marcação de uma aula: o visitante deve compreender o método, consultar horários, autenticar-se quando necessário e registrar uma reserva sem depender de contato manual. Ao professor, a solução oferece visão consolidada dos horários e das reservas.

O produto combina uma área pública institucional e uma área autenticada. A área pública divulga o método, a jornada do aluno, os conteúdos e a proposta do professor. A área autenticada permite que o aluno reserve e acompanhe aulas, enquanto o papel administrativo permite gerir slots de disponibilidade e consultar a agenda completa.

## 3. Escopo da versão atual

| Elemento | Incluído na versão atual | Fora do escopo atual ou planejado |
| --- | --- | --- |
| Conteúdo institucional | Página inicial, Método, Como Funciona, Conteúdos e Sobre. | CMS ou edição de conteúdo pelo navegador. |
| Acesso | Sessão autenticada pelo mecanismo Manus OAuth. | Cadastro local, senha local, passkey, login social configurado manualmente e recuperação de senha própria. |
| Agenda | Consulta pública de slots futuros e disponíveis. | Recorrência automática, integração com calendário externo e lista de espera. |
| Reserva | Reserva autenticada de um slot disponível, com persistência em banco. | Pagamento, múltiplos participantes por aula e remarcação automática. |
| Área do aluno | Consulta e cancelamento das próprias reservas. | Edição de nome, e-mail ou preferências em página de perfil dedicada. |
| Área administrativa | Criação de slots e gestão de estados, agenda completa e identificação do aluno reservado. | Exclusão de slot, cancelamento administrativo de uma reserva e notificação transacional ao aluno. |
| Notificações | Confirmação visual para o aluno e aviso operacional ao proprietário do projeto em reserva/cancelamento. | Garantia de envio de e-mail ao aluno; o adaptador Resend depende de credenciais futuras. |

## 4. Stakeholders e perfis de acesso

| Perfil | Necessidade principal | Permissões na plataforma |
| --- | --- | --- |
| Visitante | Conhecer o método e avaliar uma aula experimental. | Navegar em todas as páginas institucionais e consultar a agenda pública. |
| Aluno autenticado | Reservar e acompanhar suas aulas. | Reservar um slot disponível, ver apenas as próprias reservas e cancelá-las. |
| Professor/admin | Gerir disponibilidade e acompanhar a agenda. | Criar slots, consultar todos os slots e dados associados às reservas, além de alterar estados permitidos. |
| Product Owner | Priorizar valor e validar aderência aos requisitos. | Revisar backlog, critérios de aceite e decisões de escopo. |
| Equipe de desenvolvimento e QA | Construir e validar incrementos do produto. | Consultar este documento, o backlog e as evidências de teste. |

## 5. Requisitos funcionais

Os requisitos abaixo empregam o verbo **deve** para indicar comportamento obrigatório. O estado descreve a situação funcional da versão analisada, não a coluna atual do cartão no Trello.

| ID | Requisito | Prioridade | Estado atual | Critério de aceite resumido |
| --- | --- | --- | --- | --- |
| RF-01 | Apresentar a página inicial e a navegação institucional. | Must | Disponível | O visitante acessa as rotas públicas pelos links de navegação. |
| RF-02 | Apresentar o método pedagógico. | Must | Disponível | A página Método exibe Observe, Pratique e Use. |
| RF-03 | Explicar a jornada de aprendizagem e agendamento. | Must | Disponível | A página Como Funciona apresenta as etapas e direciona à agenda. |
| RF-04 | Exibir conteúdos e materiais de apoio. | Should | Disponível | A página Conteúdos apresenta aulas, materiais e ferramentas. |
| RF-05 | Apresentar professor e proposta institucional. | Should | Disponível | A página Sobre exibe história, missão, visão e apresentação de Douglas. |
| RF-06 | Autenticar usuários para operações pessoais. | Must | Disponível | A reserva e Minhas Aulas exigem sessão autenticada. |
| RF-07 | Consultar horários disponíveis. | Must | Disponível | A agenda pública exibe apenas slots futuros com estado disponível. |
| RF-08 | Reservar uma aula experimental. | Must | Disponível | Um aluno autenticado confirma um slot livre e recebe feedback na interface. |
| RF-09 | Impedir dupla reserva do mesmo slot. | Must | Disponível | A persistência aceita somente uma reserva por slot. |
| RF-10 | Consultar e cancelar reservas próprias. | Must | Disponível | O aluno visualiza e cancela apenas as próprias reservas. |
| RF-11 | Gerir a agenda como administrador. | Must | Disponível | O professor cria slots e consulta a agenda completa. |
| RF-12 | Gerir estados de disponibilidade. | Must | Disponível | O administrador bloqueia, libera ou conclui slots conforme a regra de transição. |
| RF-13 | Comunicar operações relevantes. | Should | Parcialmente disponível | A interface confirma a operação; avisos operacionais ao proprietário não bloqueiam a reserva. |

### RF-01 — Página inicial e navegação institucional

O sistema deve disponibilizar uma página inicial pública com identidade visual consistente e acessos claros às páginas Método, Como Funciona, Conteúdos, Sobre e Agendar aula. As rotas internas devem existir e ser navegáveis sem necessidade de autenticação quando se tratarem de conteúdo institucional.

**Critérios de aceite:** o menu deve direcionar para a rota correspondente; o CTA de agendamento deve abrir `/agendar`; o CTA de acesso deve iniciar o fluxo de autenticação configurado; e os links devem permanecer operáveis por teclado.

### RF-02 — Apresentação do método

O sistema deve apresentar o método de aprendizagem em uma página pública, descrevendo as etapas **Observe**, **Pratique** e **Use**. A apresentação deve estar integrada à mesma navegação institucional e conduzir o visitante às próximas ações relevantes.

**Critérios de aceite:** as três etapas devem aparecer em sequência compreensível; a página deve ser alcançada pela rota `/metodo`; e o conteúdo não pode depender de sessão autenticada.

### RF-03 — Página Como Funciona

O sistema deve explicar a jornada do aluno, desde o conhecimento da proposta até a reserva de uma aula experimental. A explicação deve representar a jornada efetiva do produto e não anunciar recursos que ainda não existam.

**Critérios de aceite:** a rota `/como-funciona` deve apresentar etapas ordenadas; deve esclarecer formato e duração das aulas de acordo com o conteúdo configurado; e deve conter acesso à agenda pública.

### RF-04 — Página Conteúdos

O sistema deve disponibilizar a página `/conteudos`, apresentando materiais, temas e ferramentas relacionados às aulas. Essa página é informativa e não requer autenticação.

**Critérios de aceite:** o visitante deve alcançar a página pelo menu; devem estar identificáveis as categorias de aulas, materiais e ferramentas; e o conteúdo deve manter legibilidade em larguras reduzidas.

### RF-05 — Página Sobre

O sistema deve disponibilizar a página `/sobre`, com a apresentação de Douglas, da proposta pedagógica, da história, da missão e da visão do projeto.

**Critérios de aceite:** as informações institucionais devem estar visíveis; a página deve ser acessível pelo menu; e o visitante deve conseguir retornar à navegação principal sem bloqueio.

### RF-06 — Autenticação e sessão

O sistema deve utilizar o mecanismo de autenticação Manus OAuth para identificar usuários antes de qualquer operação pessoal. Após a autenticação, o perfil é associado aos dados do usuário no banco e pode receber o papel `user` ou `admin`.

**Critérios de aceite:** uma pessoa sem sessão não pode reservar nem consultar Minhas Aulas; a sessão autenticada disponibiliza as ações pessoais; e o encerramento de sessão remove o cookie da aplicação. Não há, nesta versão, formulário próprio de senha, recuperação de senha ou cadastro local.

### RF-07 — Agenda pública de horários

O sistema deve permitir que qualquer visitante consulte slots de aula futuros e com estado `available`. A agenda deve organizar as opções de forma inteligível, apresentar data, horário e duração, e informar um estado vazio quando não houver disponibilidade.

**Critérios de aceite:** a rota `/agendar` é acessível sem login; slots reservados, bloqueados, concluídos ou passados não são apresentados como reserváveis; e a ausência de horários apresenta uma mensagem de orientação.

### RF-08 — Reserva autenticada

O sistema deve permitir que o aluno autenticado selecione e reserve um slot disponível. A confirmação deve persistir a relação entre o aluno e o slot, atualizar o estado do slot e informar o resultado ao usuário.

**Critérios de aceite:** a operação recebe um identificador de slot válido; uma reserva bem-sucedida altera o slot para `booked`; o aluno recebe confirmação visual; e o slot deixa de ser exibido como disponível para novos visitantes.

### RF-09 — Integridade e concorrência de reservas

O sistema deve impedir que duas reservas sejam registradas para o mesmo slot. A regra é protegida por transação, atualização condicionada do estado e índice exclusivo na relação de reservas.

**Critérios de aceite:** o banco de dados não pode armazenar duas reservas com o mesmo `slotId`; uma tentativa sobre slot indisponível deve ser recusada; e situações concorrentes devem receber tratamento de erro compreensível na interface. A equipe deve manter testes específicos para essa regra crítica.

### RF-10 — Minhas Aulas e cancelamento pelo aluno

O sistema deve disponibilizar a rota `/minhas-aulas` para que o aluno autenticado consulte suas próprias reservas, visualizando data, horário, duração e estado. O aluno deve poder cancelar uma reserva que lhe pertença, liberando novamente o slot.

**Critérios de aceite:** a consulta não pode expor reservas de terceiros; a ausência de reservas deve direcionar à agenda; o cancelamento deve rejeitar identificadores que não pertençam ao usuário; e uma reserva cancelada deve remover o vínculo e retornar o slot para `available`.

> A versão atual **não aplica prazo mínimo de antecedência para cancelamento**. Caso a escola queira a regra de 24 horas, ela deverá ser aprovada como requisito novo, implementada no servidor e coberta por testes antes de ser divulgada como política.

### RF-11 — Agenda administrativa

O sistema deve disponibilizar a rota `/admin/agenda` somente para usuários com o papel `admin`. O administrador deve criar slots futuros, escolhendo data, hora, duração permitida e observação opcional, além de consultar todos os slots e os dados do aluno associado quando houver reserva.

**Critérios de aceite:** usuário comum não deve acessar a operação administrativa; a criação de slot deve aceitar duração entre 30 e 180 minutos; a agenda deve permanecer ordenada por data e hora; e nome/e-mail do aluno devem aparecer apenas no contexto administrativo de um slot reservado.

### RF-12 — Estados dos slots

O sistema deve representar o estado de cada slot por `available`, `booked`, `blocked` ou `completed`. O administrador deve poder bloquear um slot disponível, liberar um slot bloqueado e concluir um slot reservado. Slots concluídos não devem receber novas mudanças de disponibilidade.

**Critérios de aceite:** somente slots `available` podem receber reserva; `available` e `blocked` podem alternar disponibilidade; um slot `booked` pode ser marcado como `completed`; e uma transição inválida deve ser recusada pelo servidor.

### RF-13 — Feedback e avisos operacionais

O sistema deve apresentar feedback de sucesso ou falha ao aluno após operações de reserva e cancelamento. Em paralelo, deve tentar notificar o proprietário do projeto sobre novas reservas ou cancelamentos. A falha de uma notificação auxiliar não pode desfazer uma operação já persistida.

**Critérios de aceite:** a reserva válida continua registrada mesmo se o serviço de notificação ou e-mail estiver indisponível; a interface retorna confirmação ou mensagem de erro; e os avisos operacionais não expõem informações além do necessário.

## 6. Regras de negócio

| ID | Regra | Aplicação |
| --- | --- | --- |
| RN-01 | A agenda pública exibe somente slots futuros com estado `available`. | Consulta de disponibilidade. |
| RN-02 | Reserva exige usuário autenticado. | Operação `schedule.reserve`. |
| RN-03 | Cada slot aceita, no máximo, uma reserva. | Índice exclusivo por `slotId` e fluxo transacional. |
| RN-04 | Ao reservar, o slot passa de `available` para `booked`. | Persistência de reserva. |
| RN-05 | O aluno só pode cancelar a própria reserva. | Operação `schedule.cancel`. |
| RN-06 | Ao cancelar uma reserva própria, o vínculo é removido e o slot retorna a `available`. | Cancelamento do aluno. |
| RN-07 | Usuário comum não pode consultar nem executar ações administrativas. | Procedimentos e página administrativa. |
| RN-08 | Alterações de estado obedecem à máquina de estados de slots. | Gestão administrativa. |
| RN-09 | Falhas de notificação ou e-mail não invalidam reserva ou cancelamento persistido. | Fluxos auxiliares de comunicação. |
| RN-10 | Dados de alunos são exibidos somente quando necessários e autorizados. | Minhas Aulas e agenda administrativa. |

## 7. Requisitos não funcionais

| ID | Requisito | Critério de verificação |
| --- | --- | --- |
| RNF-01 | A interface deve ser responsiva para desktop, tablet e smartphone. | Navegação, textos e CTAs permanecem utilizáveis em viewport reduzido. |
| RNF-02 | Controles relevantes devem ter foco visível e uso por teclado. | Navegação por Tab alcança links e botões com identificação visual. |
| RNF-03 | A aplicação deve separar rotas públicas, autenticadas e administrativas. | Procedimentos protegidos e validação de papel recusam acesso indevido. |
| RNF-04 | A versão publicada deve utilizar HTTPS. | Acesso à URL publicada por conexão segura. |
| RNF-05 | Horários devem ser persistidos em UTC e convertidos para exibição local. | Banco mantém timestamps; interface apresenta data/hora compreensíveis. |
| RNF-06 | A aplicação deve preservar integridade referencial entre usuários, slots e reservas. | Chaves estrangeiras e índices do schema impedem vínculos inválidos e duplicidade por slot. |
| RNF-07 | Código crítico de agenda e permissões deve possuir testes automatizados. | Suíte Vitest cobre regras de reserva, e-mail e acesso administrativo. |
| RNF-08 | Logs e mensagens de erro não devem expor segredos ou detalhes internos ao visitante. | Mensagens de interface são orientadas ao usuário; segredos permanecem em variáveis de ambiente. |

## 8. Dados e interfaces

### 8.1 Modelo de dados

| Entidade | Dados principais | Restrições relevantes |
| --- | --- | --- |
| Usuário | Identificador, `openId`, nome, e-mail, método de login e papel. | `openId` único; papel `user` ou `admin`. |
| Slot de aula | Identificador, início, duração, estado e observações. | Início único; estados controlados; duração padrão de 60 minutos. |
| Reserva | Identificador, slot, aluno e timestamps de criação/atualização. | Uma única reserva por slot; relação obrigatória com usuário e slot. |

### 8.2 Rotas da interface

| Rota | Tipo de acesso | Finalidade |
| --- | --- | --- |
| `/` | Pública | Apresentar a plataforma e seus CTAs. |
| `/metodo` | Pública | Exibir Observe, Pratique e Use. |
| `/como-funciona` | Pública | Explicar a jornada do aluno. |
| `/conteudos` | Pública | Apresentar aulas, materiais e ferramentas. |
| `/sobre` | Pública | Apresentar Douglas e a proposta do projeto. |
| `/agendar` | Pública para consulta; autenticada para reservar | Consultar horários e iniciar reserva. |
| `/minhas-aulas` | Autenticada | Consultar e cancelar reservas próprias. |
| `/admin/agenda` | Administrativa | Criar slots, gerenciar estados e consultar agenda completa. |

## 9. Evoluções planejadas

As evoluções seguintes permanecem no backlog. Elas devem receber definição de pronto, estimativa, implementação e testes antes de serem apresentadas como disponíveis.

| ID planejado | Evolução | Cartão de rastreabilidade | Condição para entrada em produção |
| --- | --- | --- | --- |
| RFP-01 | Integrar verificação anti-bot em fluxos que utilizem formulário próprio. | #011 | Escolha do provedor, segredo configurado e validação de token no servidor. |
| RFP-02 | Criar área de edição de perfil do aluno. | #012 | Página, procedimento protegido, validação e teste de isolamento de dados. |
| RFP-03 | Implementar prazo mínimo de antecedência para cancelamento. | #018 | Regra aprovada pelo professor e validada no servidor. |
| RFP-04 | Implementar cancelamento administrativo de reserva. | #022 | Procedimento administrativo, transição de estado e auditoria da operação. |
| RFP-05 | Enviar e-mail transacional ao aluno. | #016 e #022 | Credenciais Resend, remetente verificado, destinatário e evidência de envio. |
| RFP-06 | Oferecer senha local e recuperação de senha. | #005–#007 | Decisão de produto para substituir ou complementar OAuth, com desenho de segurança. |

## 10. Estratégia de aceite e QA

Cada sprint deve selecionar poucos requisitos com valor demonstrável e manter os cartões correspondentes no fluxo do Trello. Antes da Sprint Review, a equipe deve executar os cenários do cartão e registrar o resultado como aprovado, reprovado ou bloqueado. Um cenário pendente não é evidência de requisito concluído.

| Fluxo crítico | Cenário de validação | Resultado esperado |
| --- | --- | --- |
| Consulta pública | Dado que existam slots disponíveis, quando um visitante abrir a agenda, então verá data, hora e duração. | Apenas slots futuros e disponíveis são exibidos. |
| Reserva | Dado que um aluno esteja autenticado, quando reservar um slot livre, então a reserva será persistida. | Slot fica `booked` e a interface apresenta confirmação. |
| Concorrência | Dado que duas pessoas tentem reservar o mesmo slot, quando as solicitações forem processadas, então somente uma reserva poderá existir. | Integridade por slot é preservada. |
| Isolamento | Dado que dois alunos tenham reservas, quando um deles abrir Minhas Aulas, então visualizará somente suas próprias informações. | Nenhum dado de terceiro é retornado. |
| Administração | Dado que um aluno tente abrir ou consultar a agenda administrativa, quando a solicitação for processada, então o acesso será recusado. | Somente `admin` realiza operações administrativas. |

## 11. Rastreabilidade com o Trello

| Conjunto de cartões | Relação com este documento |
| --- | --- |
| #001–#004, #008–#010 | RF-01 a RF-05 e RNF-01 a RNF-02: identidade, páginas institucionais, navegação e acessibilidade. |
| #005–#007 | RF-06: autenticação; também registram a diferença entre OAuth disponível e fluxos locais planejados. |
| #011–#012 | RFP-01 e RFP-02: evoluções ainda não entregues. |
| #013–#018 | RF-07 a RF-10 e RN-01 a RN-06: agenda, reserva, concorrência, feedback, Minhas Aulas e cancelamento. |
| #019–#022 | RF-11 e RF-12, RN-07 a RN-08 e RFP-04: autorização e gestão administrativa. |
| #023 | RNF-03 a RNF-08: segurança, privacidade, qualidade e manutenção. |

## 12. Decisões pendentes

| Decisão | Responsável pela definição | Impacto |
| --- | --- | --- |
| Prazo de antecedência para cancelamento | Product Owner e professor | Altera RN-05/RN-06, servidor, interface e testes. |
| Política de envio de e-mail ao aluno | Product Owner e responsável técnico | Define destinatário, conteúdo, credenciais e consentimento. |
| Necessidade de conta local além do OAuth | Product Owner | Pode introduzir senha, recuperação, proteção anti-bot e tratamento adicional de dados. |
| Política de retenção e aviso de privacidade | Product Owner | Define comunicação ao usuário e práticas de proteção de dados pessoais. |

## Referências

[1] [Plataforma Learn to Learn English](https://learntoeng-tjpqkyu3.manus.space)

[2] [Quadro Trello do projeto](https://trello.com/b/2af2Z4I1/laboratorio-de-software-projeto)
