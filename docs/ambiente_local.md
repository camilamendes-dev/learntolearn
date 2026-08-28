# Guia de Ambiente Local

Este documento orienta a configuração local de colaboradores. Crie um arquivo `.env` na raiz do repositório e preencha apenas com credenciais recebidas do mantenedor em canal seguro. Os exemplos abaixo são nomes de variáveis, **não são valores válidos** e não devem ser compartilhados no GitHub.

| Grupo | Variáveis necessárias | Observação |
| --- | --- | --- |
| Banco de dados | `DATABASE_URL` | Utilize uma instância MySQL/TiDB exclusiva para desenvolvimento ou acesso autorizado. |
| Sessão | `JWT_SECRET` | Gere um valor aleatório forte para o ambiente local. |
| OAuth | `VITE_APP_ID`, `OAUTH_SERVER_URL`, `VITE_OAUTH_PORTAL_URL` | Solicite a configuração própria do ambiente ao mantenedor. |
| Administração | `OWNER_OPEN_ID`, `OWNER_NAME` | Identifica o usuário administrativo do projeto. |
| Serviços internos | `BUILT_IN_FORGE_API_URL`, `BUILT_IN_FORGE_API_KEY` | Necessários apenas em ambientes habilitados para esses recursos. |
| E-mail opcional | `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `PROFESSOR_NOTIFICATION_EMAIL` | Configure somente quando o remetente e o destinatário estiverem aprovados. |

O servidor pode iniciar com parte das integrações indisponíveis, mas as rotas que dependem do banco ou do OAuth exigem as respectivas variáveis. Não altere o banco compartilhado para testar regras de agenda sem a autorização expressa da equipe.
