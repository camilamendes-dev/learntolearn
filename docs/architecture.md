# Arquitetura da plataforma Learn to Learn English

## Visão funcional

O site combina uma área pública de apresentação com uma área autenticada de agendamento. As páginas **Método**, **Como Funciona**, **Conteúdos** e **Sobre** permanecem abertas a todos os visitantes. A marcação de aulas exige autenticação: alunos consultam os horários publicados e reservam um único slot; Douglas, identificado pelo papel `admin`, publica horários e acompanha a agenda completa.

## Papéis de acesso

| Papel | Capacidades |
| --- | --- |
| Visitante | Navegar pelas páginas institucionais e conhecer o método. |
| Aluno autenticado | Consultar horários disponíveis, reservar uma aula e cancelar a própria reserva. |
| Professor/admin | Criar horários disponíveis, visualizar todas as reservas, identificar aluno e status, além de cancelar ou atualizar a situação de uma aula. |

## Modelo de dados

O modelo utiliza dois recursos. Um **slot de aula** pertence à agenda do professor e registra o instante de início em UTC, duração, estado e metadados. Uma **reserva** relaciona esse slot a um aluno autenticado. A reserva só é criada se o slot estiver disponível; esta regra é validada no servidor e reforçada por índice exclusivo por slot para evitar dupla reserva.

## Jornada de agendamento

O aluno entra em **Agendar aula**, escolhe uma data e seleciona um horário marcado como disponível. Após a confirmação, o horário fica indisponível para os demais usuários, aparece em **Minhas aulas** e gera uma notificação operacional para o proprietário do projeto. Ao cancelar, o slot volta a ficar disponível e o professor recebe um novo aviso.

## Notificações

Os avisos operacionais serão enviados à conta proprietária do projeto quando houver nova reserva ou cancelamento. Para e-mail externo personalizado, será necessária a configuração posterior de um provedor transacional. A primeira versão usa o canal de avisos disponível na plataforma, assegurando que Douglas receba atualizações no painel de gestão do projeto.

## Rotas

| Rota | Área | Finalidade |
| --- | --- | --- |
| `/` | Pública | Landing page institucional. |
| `/metodo` | Pública | Apresentar Observe, Pratique e Use. |
| `/como-funciona` | Pública | Explicar a jornada do aluno. |
| `/conteudos` | Pública | Exibir aulas, materiais e ferramentas. |
| `/sobre` | Pública | Apresentar missão, visão e Douglas. |
| `/agendar` | Autenticada | Consultar agenda e reservar horários. |
| `/minhas-aulas` | Autenticada | Consultar e cancelar reservas próprias. |
| `/admin/agenda` | Admin | Gerir disponibilidade e visualizar a agenda completa. |
