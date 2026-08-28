# Proposta de cartões — Learn to Learn English

## Premissas de organização

Os cartões já existentes no quadro cobrem os itens **#001 a #007**, incluindo identidade visual, layout base, página Método, página Como Funciona, cadastro, recuperação de senha e login multimétodo. Esta proposta começa no **#008** e evita duplicar esses itens. Todos os novos cartões devem ser criados inicialmente na lista **Product Backlog 📥**.

As descrições seguem o modelo observado no cartão #002: responsáveis, situação atual, requisitos, regras de negócio, critérios de aceite e cenários Gherkin para QA. Os responsáveis foram mantidos conforme o modelo do quadro: **Scrum Master: Gabriel Santos Inácio; PO: Emerson Luis; Desenvolvedores: Camila Mendes e Gabriel Santos Inácio; QA: Camila Mendes**.

| Cartão | Título | Rastreabilidade | Etiqueta sugerida |
| --- | --- | --- | --- |
| #008 | Desenvolvimento da página “Conteúdos” | RF04 | Front-end |
| #009 | Desenvolvimento da página “Sobre” | RF05 | Front-end |
| #010 | Navegação responsiva e acessibilidade básica | RNF01, RNF10, RNF11 | Front-end |
| #011 | Verificação anti-bot no cadastro e login | RF08, RNF03 | Front-end, Back-end |
| #012 | Área “Meu perfil” do aluno | RF10 | Front-end, Back-end |
| #013 | Agenda pública de horários disponíveis | RF11 | Front-end, Back-end, Banco de Dados |
| #014 | Reserva de aula experimental autenticada | RF12, RF13, RN01 | Front-end, Back-end |
| #015 | Controle de concorrência dos horários | RF14, RN02 | Back-end, Banco de Dados |
| #016 | Confirmação de agendamento ao aluno | RF15 | Back-end |
| #017 | Área “Minhas aulas” do aluno | RF16 | Front-end, Back-end |
| #018 | Cancelamento pelo aluno com antecedência | RF17, RN05 | Front-end, Back-end, Documentação |
| #019 | Controle de acesso do professor | RF22, RN03 | Back-end |
| #020 | Gestão de horários pelo professor | RF18, RF19 | Front-end, Back-end |
| #021 | Lista de aulas agendadas e dados do aluno | RF20 | Front-end, Back-end |
| #022 | Cancelamento administrativo com aviso ao aluno | RF21 | Front-end, Back-end |
| #023 | Qualidade, privacidade e compatibilidade | RNF02, RNF04–RNF09 | Documentação, QA |

---

## LEARN TO LEARN ENGLISH - #008 - DESENVOLVIMENTO DA PÁGINA “CONTEÚDOS” (FRONT-END)

**Scrum Master:** Gabriel Santos Inácio  
**Analista de Requisitos (PO):** Emerson Luis  
**Desenvolvedores:** Camila Mendes, Gabriel Santos Inácio  
**Analista de Qualidade (QA):** Camila Mendes

### Descrição da funcionalidade atual

O site institucional ainda precisa consolidar uma página própria para apresentar materiais, temas e ferramentas utilizados nas aulas, conforme o requisito RF04.

### Produto — o que precisa ser implementado

**RF04.** Exibir, na página **Conteúdos**, materiais e/ou temas trabalhados nas aulas.

### Critérios de aceitação

1. A página deve ser acessível pelo menu principal sem login.
2. Deve apresentar pelo menos as categorias aulas, materiais e ferramentas.
3. A identidade visual deve usar a paleta creme e verde, com amarelo apenas como marcador de destaque.

### QA — cenários Gherkin

**Cenário 1 — acesso à página Conteúdos.** Dado que o visitante esteja em uma página pública; quando selecionar **Conteúdos**; então o sistema deve abrir a página institucional correspondente. **Status:** pendente.

**Cenário 2 — exibição das categorias.** Dado que a página Conteúdos foi carregada; quando o conteúdo for exibido; então o visitante deve encontrar as categorias aulas, materiais e ferramentas. **Status:** pendente.

---

## LEARN TO LEARN ENGLISH - #009 - DESENVOLVIMENTO DA PÁGINA “SOBRE” (FRONT-END)

**Scrum Master:** Gabriel Santos Inácio  
**Analista de Requisitos (PO):** Emerson Luis  
**Desenvolvedores:** Camila Mendes, Gabriel Santos Inácio  
**Analista de Qualidade (QA):** Camila Mendes

### Descrição da funcionalidade atual

O sistema precisa de uma página institucional que apresente Douglas, a história do projeto, missão, visão e proposta pedagógica.

### Produto — o que precisa ser implementado

**RF05.** Exibir informações sobre o professor, sua formação, experiência e proposta de ensino.

### Critérios de aceitação

1. A página deve conter uma apresentação identificável de Douglas.
2. Missão, visão e proposta de ensino devem estar visíveis e legíveis.
3. O menu deve destacar a opção **Sobre** quando a página estiver ativa.

### QA — cenários Gherkin

**Cenário 1 — apresentação do professor.** Dado que o visitante acesse a página Sobre; quando o conteúdo carregar; então deve visualizar a apresentação de Douglas e sua proposta de ensino. **Status:** pendente.

**Cenário 2 — navegação ativa.** Dado que o visitante esteja na página Sobre; quando o cabeçalho for exibido; então a opção **Sobre** deve receber destaque visual. **Status:** pendente.

---

## LEARN TO LEARN ENGLISH - #010 - NAVEGAÇÃO RESPONSIVA E ACESSIBILIDADE BÁSICA (FRONT-END)

**Scrum Master:** Gabriel Santos Inácio  
**Analista de Requisitos (PO):** Emerson Luis  
**Desenvolvedores:** Camila Mendes, Gabriel Santos Inácio  
**Analista de Qualidade (QA):** Camila Mendes

### Produto — o que precisa ser implementado

**RNF01.** Adaptar a interface para desktop, tablet e smartphone.  
**RNF10.** Garantir contraste, textos alternativos e navegação por teclado.  
**RNF11.** Manter consistência visual em todo o sistema.

### Critérios de aceitação

1. O menu deve colapsar em telas pequenas sem ocultar as rotas principais.
2. Imagens relevantes devem possuir texto alternativo.
3. Controles interativos devem possuir foco visível e poder ser operados por teclado.
4. Textos devem manter contraste suficiente sobre os fundos usados.

### QA — cenários Gherkin

**Cenário 1 — menu em dispositivo móvel.** Dado que o usuário acesse o sistema em smartphone; quando abrir o menu; então deve visualizar e acessar Método, Como Funciona, Conteúdos e Sobre. **Status:** pendente.

**Cenário 2 — navegação por teclado.** Dado que o usuário utilize a tecla Tab; quando percorrer a página; então os links e botões devem receber foco visível. **Status:** pendente.

---

## LEARN TO LEARN ENGLISH - #011 - VERIFICAÇÃO ANTI-BOT NO CADASTRO E LOGIN (FRONT-END / BACK-END)

**Scrum Master:** Gabriel Santos Inácio  
**Analista de Requisitos (PO):** Emerson Luis  
**Desenvolvedores:** Camila Mendes, Gabriel Santos Inácio  
**Analista de Qualidade (QA):** Camila Mendes

### Produto — o que precisa ser implementado

**RF08 / RNF03.** Integrar verificação anti-bot, como Cloudflare Turnstile, nos fluxos de cadastro e login por e-mail.

### Regras de negócio

1. O formulário só pode ser enviado após validação do token anti-bot.
2. O token deve ser validado no servidor, não apenas no navegador.

### Critérios de aceitação

1. Cadastro e login por e-mail exibem o componente anti-bot.
2. Uma tentativa sem token válido é rejeitada com mensagem clara.
3. Erros do provedor não expõem dados internos ao usuário.

### QA — cenários Gherkin

**Cenário 1 — envio sem validação.** Dado que o visitante preencha o cadastro; quando tentar enviar sem concluir a verificação anti-bot; então o sistema não deve criar a conta. **Status:** pendente.

**Cenário 2 — token válido.** Dado que o visitante conclua a verificação; quando enviar dados válidos; então o sistema deve continuar o fluxo de cadastro. **Status:** pendente.

---

## LEARN TO LEARN ENGLISH - #012 - ÁREA “MEU PERFIL” DO ALUNO (FRONT-END / BACK-END)

**Scrum Master:** Gabriel Santos Inácio  
**Analista de Requisitos (PO):** Emerson Luis  
**Desenvolvedores:** Camila Mendes, Gabriel Santos Inácio  
**Analista de Qualidade (QA):** Camila Mendes

### Produto — o que precisa ser implementado

**RF10.** Criar uma área autenticada para consulta e edição dos dados pessoais do aluno, como nome e e-mail.

### Regras de negócio

1. O aluno pode alterar apenas os próprios dados.
2. Campos obrigatórios e formato de e-mail devem ser validados no servidor.

### Critérios de aceitação

1. A área deve exigir autenticação.
2. Dados atuais devem ser carregados no formulário.
3. Após salvar alterações válidas, a interface deve exibir confirmação.

### QA — cenários Gherkin

**Cenário 1 — edição do próprio perfil.** Dado que o aluno esteja autenticado; quando alterar seu nome e salvar; então o sistema deve atualizar apenas seu cadastro. **Status:** pendente.

**Cenário 2 — acesso sem login.** Dado que um visitante acesse a área de perfil; quando a página carregar; então deve ser encaminhado para autenticação. **Status:** pendente.

---

## LEARN TO LEARN ENGLISH - #013 - AGENDA PÚBLICA DE HORÁRIOS DISPONÍVEIS (FRONT-END / BACK-END / BANCO DE DADOS)

**Scrum Master:** Gabriel Santos Inácio  
**Analista de Requisitos (PO):** Emerson Luis  
**Desenvolvedores:** Camila Mendes, Gabriel Santos Inácio  
**Analista de Qualidade (QA):** Camila Mendes

### Produto — o que precisa ser implementado

**RF11.** Modelar os slots de horário, disponibilizar uma consulta pública e apresentar os horários livres em uma tela de agenda.

### Regras de negócio

1. Visitantes podem consultar os horários, mas não reservá-los.
2. Horários já reservados, bloqueados ou passados não devem aparecer como disponíveis.

### Critérios de aceitação

1. A agenda pode ser acessada sem login.
2. A tela agrupa horários por data e mostra duração.
3. Sem disponibilidade, a interface deve informar o estado vazio de forma clara.

### QA — cenários Gherkin

**Cenário 1 — consulta pública.** Dado que um visitante acesse a agenda; quando existirem slots disponíveis; então deve visualizar data, horário e duração de cada slot. **Status:** pendente.

**Cenário 2 — estado vazio.** Dado que não existam slots disponíveis; quando a agenda for carregada; então a tela deve informar que novos horários serão publicados em breve. **Status:** pendente.

---

## LEARN TO LEARN ENGLISH - #014 - RESERVA DE AULA EXPERIMENTAL AUTENTICADA (FRONT-END / BACK-END)

**Scrum Master:** Gabriel Santos Inácio  
**Analista de Requisitos (PO):** Emerson Luis  
**Desenvolvedores:** Camila Mendes, Gabriel Santos Inácio  
**Analista de Qualidade (QA):** Camila Mendes

### Produto — o que precisa ser implementado

**RF12, RF13 e RN01.** Permitir que o aluno autenticado escolha um slot livre e confirme uma aula experimental; visitantes devem ser direcionados ao login antes da reserva.

### Critérios de aceitação

1. O botão de reserva deve iniciar o login para visitantes não autenticados.
2. O aluno autenticado deve receber retorno imediato de sucesso ou erro.
3. Após a reserva, o slot deve deixar a lista de disponibilidade.

### QA — cenários Gherkin

**Cenário 1 — visitante tentando reservar.** Dado que um visitante esteja na agenda; quando clicar em Reservar; então deve ser encaminhado ao login/cadastro. **Status:** pendente.

**Cenário 2 — aluno confirma aula.** Dado que um aluno autenticado escolha um slot disponível; quando confirmar a reserva; então o sistema deve registrar a aula e exibir confirmação. **Status:** pendente.

---

## LEARN TO LEARN ENGLISH - #015 - CONTROLE DE CONCORRÊNCIA DOS HORÁRIOS (BACK-END / BANCO DE DADOS)

**Scrum Master:** Gabriel Santos Inácio  
**Analista de Requisitos (PO):** Emerson Luis  
**Desenvolvedores:** Camila Mendes, Gabriel Santos Inácio  
**Analista de Qualidade (QA):** Camila Mendes

### Produto — o que precisa ser implementado

**RF14 e RN02.** Garantir que um slot possa ser reservado por apenas um aluno, mesmo diante de tentativas simultâneas.

### Regras de negócio

1. A reserva deve ocorrer em transação no banco de dados.
2. A tabela de reservas deve manter unicidade por slot.
3. O servidor deve responder conflito para uma segunda tentativa.

### Critérios de aceitação

1. Duas requisições concorrentes não podem produzir duas reservas para o mesmo slot.
2. A segunda tentativa deve informar que o horário ficou indisponível.

### QA — cenários Gherkin

**Cenário 1 — reserva concorrente.** Dado que dois alunos tentem reservar o mesmo horário; quando as tentativas forem processadas; então apenas uma reserva deve ser confirmada. **Status:** pendente.

---

## LEARN TO LEARN ENGLISH - #016 - CONFIRMAÇÃO DE AGENDAMENTO AO ALUNO (BACK-END)

**Scrum Master:** Gabriel Santos Inácio  
**Analista de Requisitos (PO):** Emerson Luis  
**Desenvolvedores:** Camila Mendes, Gabriel Santos Inácio  
**Analista de Qualidade (QA):** Camila Mendes

### Produto — o que precisa ser implementado

**RF15.** Enviar confirmação ao aluno por notificação na tela e, quando configurado, por e-mail transacional.

### Critérios de aceitação

1. A reserva bem-sucedida deve mostrar uma mensagem de confirmação na interface.
2. O e-mail deve conter data, horário e duração da aula quando o provedor estiver configurado.
3. Uma indisponibilidade temporária do e-mail não deve desfazer a reserva.

### QA — cenários Gherkin

**Cenário 1 — confirmação em tela.** Dado que o aluno conclua uma reserva; quando o servidor confirmar o slot; então a tela deve mostrar uma mensagem de sucesso. **Status:** pendente.

---

## LEARN TO LEARN ENGLISH - #017 - ÁREA “MINHAS AULAS” DO ALUNO (FRONT-END / BACK-END)

**Scrum Master:** Gabriel Santos Inácio  
**Analista de Requisitos (PO):** Emerson Luis  
**Desenvolvedores:** Camila Mendes, Gabriel Santos Inácio  
**Analista de Qualidade (QA):** Camila Mendes

### Produto — o que precisa ser implementado

**RF16.** Criar uma área autenticada que exiba as aulas confirmadas do aluno, com data, hora, duração e status.

### Critérios de aceitação

1. Cada aluno deve visualizar somente suas próprias reservas.
2. A área deve mostrar um estado vazio quando não houver aulas.
3. A página deve oferecer acesso à agenda para criar uma primeira reserva.

### QA — cenários Gherkin

**Cenário 1 — lista pessoal.** Dado que o aluno possua uma aula agendada; quando acessar Minhas aulas; então deve visualizar os dados dessa aula. **Status:** pendente.

**Cenário 2 — isolamento de dados.** Dado que existam reservas de outros alunos; quando o aluno acessar Minhas aulas; então não deve visualizar dados de terceiros. **Status:** pendente.

---

## LEARN TO LEARN ENGLISH - #018 - CANCELAMENTO PELO ALUNO COM ANTECEDÊNCIA (FRONT-END / BACK-END / DOCUMENTAÇÃO)

**Scrum Master:** Gabriel Santos Inácio  
**Analista de Requisitos (PO):** Emerson Luis  
**Desenvolvedores:** Camila Mendes, Gabriel Santos Inácio  
**Analista de Qualidade (QA):** Camila Mendes

### Produto — o que precisa ser implementado

**RF17 e RN05.** Permitir cancelamento pelo aluno e aplicar uma antecedência mínima definida pelo professor.

### Pendência de regra de negócio

O prazo exato não está definido no documento. O cartão deve registrar a decisão do professor, por exemplo: cancelamento permitido até **24 horas antes** da aula.

### Critérios de aceitação

1. O aluno pode cancelar apenas a própria reserva.
2. A aplicação bloqueia cancelamentos fora do prazo definido.
3. O slot cancelado volta a ficar disponível quando a regra permitir.

### QA — cenários Gherkin

**Cenário 1 — cancelamento dentro do prazo.** Dado que faltem mais horas que a antecedência definida; quando o aluno cancelar; então o slot deve voltar a ficar disponível. **Status:** pendente.

**Cenário 2 — cancelamento fora do prazo.** Dado que a antecedência mínima não seja respeitada; quando o aluno tentar cancelar; então o sistema deve impedir a ação e explicar o motivo. **Status:** pendente.

---

## LEARN TO LEARN ENGLISH - #019 - CONTROLE DE ACESSO DO PROFESSOR (BACK-END)

**Scrum Master:** Gabriel Santos Inácio  
**Analista de Requisitos (PO):** Emerson Luis  
**Desenvolvedores:** Camila Mendes, Gabriel Santos Inácio  
**Analista de Qualidade (QA):** Camila Mendes

### Produto — o que precisa ser implementado

**RF22 e RN03.** Criar autorização por perfil para distinguir aluno de professor/administrador nas ações de gestão de agenda.

### Critérios de aceitação

1. Rotas administrativas devem exigir usuário com papel de administrador.
2. Alunos não podem consultar nem alterar a agenda completa.
3. Tentativas não autorizadas devem retornar erro de permissão.

### QA — cenários Gherkin

**Cenário 1 — bloqueio de aluno.** Dado que um aluno autenticado tente acessar a agenda administrativa; quando a consulta for feita; então o servidor deve negar a operação. **Status:** pendente.

---

## LEARN TO LEARN ENGLISH - #020 - GESTÃO DE HORÁRIOS PELO PROFESSOR (FRONT-END / BACK-END)

**Scrum Master:** Gabriel Santos Inácio  
**Analista de Requisitos (PO):** Emerson Luis  
**Desenvolvedores:** Camila Mendes, Gabriel Santos Inácio  
**Analista de Qualidade (QA):** Camila Mendes

### Produto — o que precisa ser implementado

**RF18 e RF19.** Disponibilizar painel para o professor publicar, editar, bloquear e remover horários que ainda não estejam reservados.

### Regras de negócio

1. Horários reservados não podem ser removidos como se estivessem disponíveis.
2. Apenas horários futuros podem ser publicados.

### Critérios de aceitação

1. O professor pode criar slot com data, horário, duração e nota opcional.
2. Pode bloquear e liberar slots não reservados.
3. A agenda pública deve refletir as mudanças imediatamente.

### QA — cenários Gherkin

**Cenário 1 — publicação de slot.** Dado que o professor informe uma data futura; quando publicar o horário; então ele deve aparecer na agenda pública. **Status:** pendente.

**Cenário 2 — bloqueio de slot.** Dado que exista um slot disponível; quando o professor bloqueá-lo; então o slot não deve mais aparecer para reserva. **Status:** pendente.

---

## LEARN TO LEARN ENGLISH - #021 - LISTA DE AULAS AGENDADAS E DADOS DO ALUNO (FRONT-END / BACK-END)

**Scrum Master:** Gabriel Santos Inácio  
**Analista de Requisitos (PO):** Emerson Luis  
**Desenvolvedores:** Camila Mendes, Gabriel Santos Inácio  
**Analista de Qualidade (QA):** Camila Mendes

### Produto — o que precisa ser implementado

**RF20.** Exibir ao professor uma agenda completa com data, status, nome e e-mail do aluno quando houver reserva.

### Critérios de aceitação

1. A lista deve conter todos os slots, inclusive disponíveis e bloqueados.
2. Para slots reservados, nome e e-mail do aluno devem ficar visíveis somente ao professor.
3. A lista deve estar ordenada por data e horário.

### QA — cenários Gherkin

**Cenário 1 — exibição de reserva.** Dado que um aluno reserve um slot; quando o professor abrir a agenda; então deve visualizar o aluno associado e o status Reservada. **Status:** pendente.

---

## LEARN TO LEARN ENGLISH - #022 - CANCELAMENTO ADMINISTRATIVO COM AVISO AO ALUNO (FRONT-END / BACK-END)

**Scrum Master:** Gabriel Santos Inácio  
**Analista de Requisitos (PO):** Emerson Luis  
**Desenvolvedores:** Camila Mendes, Gabriel Santos Inácio  
**Analista de Qualidade (QA):** Camila Mendes

### Produto — o que precisa ser implementado

**RF21.** Permitir que o professor cancele uma aula confirmada e notifique o aluno sobre a alteração.

### Regras de negócio

1. O cancelamento deve registrar a alteração de status para auditoria.
2. O aviso ao aluno deve ser apresentado na tela e encaminhado por e-mail quando configurado.

### Critérios de aceitação

1. Apenas o professor pode cancelar uma reserva de outro usuário.
2. A reserva cancelada não pode permanecer como ativa em Minhas aulas.
3. A operação deve resultar em uma notificação ao aluno.

### QA — cenários Gherkin

**Cenário 1 — cancelamento pelo professor.** Dado que exista uma aula reservada; quando o professor cancelar a reserva; então o aluno deve deixar de vê-la como confirmada e receber um aviso. **Status:** pendente.

---

## LEARN TO LEARN ENGLISH - #023 - QUALIDADE, PRIVACIDADE E COMPATIBILIDADE (QA / DOCUMENTAÇÃO)

**Scrum Master:** Gabriel Santos Inácio  
**Analista de Requisitos (PO):** Emerson Luis  
**Desenvolvedores:** Camila Mendes, Gabriel Santos Inácio  
**Analista de Qualidade (QA):** Camila Mendes

### Produto — o que precisa ser implementado

**RNF02, RNF04, RNF05, RNF06, RNF07, RNF08 e RNF09.** Consolidar validações de HTTPS, desempenho, navegadores, documentação técnica e privacidade/LGPD.

### Critérios de aceitação

1. O site deve operar em HTTPS no ambiente publicado.
2. As páginas públicas devem ser avaliadas quanto ao carregamento em conexão padrão.
3. Deve existir uma página ou aviso de privacidade com finalidade de tratamento dos dados do aluno.
4. Os principais fluxos devem ser testados em Chrome, Firefox, Edge e Safari.
5. A documentação deve indicar arquitetura, modelo de dados e instruções de manutenção.

### QA — cenários Gherkin

**Cenário 1 — navegação segura.** Dado que um usuário acesse a versão publicada; quando a página carregar; então a conexão deve utilizar HTTPS. **Status:** pendente.

**Cenário 2 — privacidade.** Dado que o visitante realize cadastro; quando informar dados pessoais; então deve conseguir acessar o aviso de privacidade aplicável. **Status:** pendente.
