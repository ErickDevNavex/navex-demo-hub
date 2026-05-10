# Planejamento: Criação do HUB de Demos Navex

## Objetivo
Criar versões mockadas (sem backend, sem DB, dados 100% fictícios) de todos os sistemas reais, focadas apenas em demonstrar a interface e a funcionalidade básica de maneira interativa. Todas as demos devem seguir o Design System premium (glassmorphism, dark mode) do arquivo `navex-hub-portfolio-v1 (1).html` e renomear qualquer dado sensível ou nomes de clientes (ex: Lopazzi).

---

## FASE 1: Fundação & Design System
1. **Extração do Design System:**
   - Isolar o CSS do arquivo `navex-hub-portfolio-v1 (1).html` (variáveis, tipografia, botões, cards em glassmorphism).
2. **Template Base:**
   - Criar um arquivo `demo-base.html` que será o molde para todas as ferramentas. Esse template terá a barra superior (ou lateral) padrão do Hub, e uma área de conteúdo dinâmico no centro.
3. **Mapeamento de Nomes (Anonimização):**
   - Criar uma tabela DE -> PARA com os novos nomes genéricos para as ferramentas.

---

## FASE 2: Mapeamento de Ferramentas (DE -> PARA)
| Pasta Original | Novo Nome Sugerido (Demo) | Descrição do Mock interativo |
| :--- | :--- | :--- |
| SAC ML Lopazzi / Sac Shopee | **AutoSAC E-commerce** | Dashboard de mensagens com respostas geradas por IA. |
| Auditoria_Frete_ML / Conferencia Frete | **LogisTech Audit** | Tabela interativa validando fretes e divergências financeiras. |
| Painel BI | **DataInsight BI** | Gráficos (Chart.js) mockados mostrando faturamento e KPIs. |
| Robo Margem Tempo real | **MarginTracker Pro** | Painel em tempo real de margem de produtos. |
| BOT Telegram | **BotMaker Flow** | Tela de chat interativa simulando o robô. |
| Atendimento Suporte / Sistema de Ticket | **Navex HelpDesk** | Kanban ou lista de tickets de suporte. |
| ADS Mercado Livre / Central Promoções | **AdsOptimizer** | Dashboard de campanhas e cálculo de ACOS mockado. |
| Controle Produção / Pedidos Revendas | **ManuTrack ERP** | Visão de pedidos em andamento e linha de produção. |
| Avaliador Mercado Livre | **Review Analyzer** | Análise de sentimento de produtos mockados. |
| Clinica | **HealthMed Cloud** | Agendamentos e prontuários mockados. |
| Sistema de controle de Desenvolvimento | **DevSprint Tracker** | Gestão de tarefas e sprints. |

---

## FASE 3: Desenvolvimento das Demos (Sprints)
Vamos criar 1 arquivo `.html` (com CSS/JS embutidos ou separados numa pasta `assets/`) para cada ferramenta, usando o template da Fase 1.
- **Sprint 1 (Atendimento & Tickets):** AutoSAC, HelpDesk, BotMaker.
- **Sprint 2 (BI & Dados):** DataInsight BI, MarginTracker, AdsOptimizer.
- **Sprint 3 (Logística & Operações):** LogisTech Audit, ManuTrack.
- **Sprint 4 (Outros):** Review Analyzer, HealthMed, DevSprint.

*Em cada HTML criado, os dados (tabelas, gráficos, tickets) serão arrays hardcoded no Javascript simulando uma API.*

---

## FASE 4: Integração com o Hub Portfolio
1. Editar o arquivo `navex-hub-portfolio-v1 (1).html`.
2. Onde existem os cards/botões de demonstração, linkar diretamente para as páginas `.html` das ferramentas criadas na Fase 3.
3. Adicionar um botão "Voltar ao Hub" em todas as ferramentas.

---

## FASE 5: Preparação para Deploy
1. Testar links quebra-cabeça.
2. Garantir que não restou nenhum arquivo de credencial (`.env`, backend).
3. Preparar repositório Git limpo contendo apenas essa versão "Front-end Static".
4. Gerar instruções para o Coolify/Contabo apontando para a pasta raiz como um site estático.
