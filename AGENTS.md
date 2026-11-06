# Agente do Workspace - Renatao

Este projeto usa o Renatao como cerebro central externo.

- Projeto de trabalho: `C:\Users\erick\Desktop\Projetos\HUb sistremas Navex`
- Cerebro central: `C:\Users\erick\Desktop\Cerebro_Renatao\Cerebro_Renatao`

Antes de implementar qualquer tarefa relevante, rode no terminal deste workspace:

```powershell
renatao auto --task "<mensagem do usuario>"
```

Modo organico: use a propria mensagem do usuario como tarefa. O Renatao decide
se precisa acionar GSD, seguranca, UI/UX e radar de recursos. Comece por
`.renatao/ROUTING_DECISION.md` e `.renatao/START_HERE.md`.
Leia `.renatao/TEST_FIRST_PLAN.md` antes de qualquer edicao de codigo.
Leia tambem `.renatao/AGENT_RUNTIME.md` e `.renatao/COMMAND_POLICY.md` quando
existirem; eles definem o ciclo operacional, validacoes e limites de comandos.
Leia `.renatao/RELIABILITY_CONTRACT.md`, `.renatao/CAPABILITIES.md`,
`.renatao/USER_PREFERENCES.md` e preencha `.renatao/EXECUTION_RECEIPT.md`
antes de concluir. Nao diga "feito" sem evidencia.

Use as memorias e skills retornadas como contexto inicial. Edite somente este
workspace de trabalho, valide a mudanca e registre memoria quando houver decisao
reutilizavel:

```powershell
renatao remember --topic "<topico>" --content "<decisao curta>" --tags "projeto,ide"
```

O painel visual do Renatao e legado. O fluxo oficial e IDE-first.

Comece por `.renatao/START_HERE.md` quando ele existir.
Leia `.renatao/ROUTING_DECISION.md` quando ele existir.
Leia `.renatao/TEST_FIRST_PLAN.md` quando ele existir.
Leia `.renatao/AGENT_RUNTIME.md` e `.renatao/COMMAND_POLICY.md` quando existirem.

Nao edite codigo sem teste antes. Para qualquer criacao ou alteracao de codigo,
crie ou ajuste primeiro um teste automatizado, rode, confirme a falha esperada e
so entao implemente o codigo de producao.

Para tarefas medias/grandes, rode:

```powershell
renatao gsd --task "<tarefa atual>"
```

Para tarefas envolvendo autenticacao, autorizacao, dados pessoais, pagamentos,
arquivos, comandos, deploy ou integracoes externas, rode:

```powershell
renatao security --task "<tarefa atual>"
```

Para tarefas de interface, rode:

```powershell
renatao ui --task "<tarefa atual>"
```

Para tarefas frontend (React, Next, Vite, componentes, formularios, dashboard,
responsividade ou acessibilidade), rode:

```powershell
renatao frontend --task "<tarefa atual>"
```

Para tarefas com movimento, animacao, microinteracao, transicao, parallax,
Lottie/Rive/GSAP/Motion ou efeitos de hover, rode:

```powershell
renatao motion --task "<tarefa atual>"
```

Para descobrir recursos/skills sob demanda, rode:

```powershell
renatao awesome --query "<tema>"
```

Para recriar apenas o pacote operacional do agente:

```powershell
renatao agent --task "<tarefa atual>" --write --force
```

Para recriar apenas o gate test-first:

```powershell
renatao test-first --task "<tarefa atual>" --write --force
```

Antes de entregar, rode:

```powershell
renatao review --task "<tarefa atual>" --write
```

Para preparar o pacote completo de execucao confiavel:

```powershell
renatao execute --task "<tarefa atual>"
```
