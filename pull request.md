📘 TUTORIAL: Configurar Copilot Code Review Automático no GitHub
✅ Pré-requisitos

Repositório no GitHub
Acesso de administrador ao repositório
Plano GitHub Copilot ativo (Pro ou Enterprise)


🎯 PASSO 1: Acessar Configurações do Repositório

Vá para seu repositório no GitHub
Clique na aba Settings (⚙️)
Na barra lateral esquerda, procure a seção "Code and automation"


🎯 PASSO 2: Acessar Copilot Code Review

Dentro de "Code and automation", expanda o menu "Copilot"
Clique em "Code review"


🎯 PASSO 3: Criar o Ruleset para Automação

Desça até a seção "Manage Copilot code review automations and tools"
Clique no botão verde "Create ruleset for default branch"


🎯 PASSO 4: Verificar Configuração Automática
Após clicar, o GitHub cria automaticamente um ruleset com:

✅ Automated code reviews on push
✅ Manage static analysis tools for Copilot code review: CodeQL

Você verá a mensagem: "Copilot ruleset created successfully"

🎯 PASSO 5: Revisar Detalhes do Ruleset (Opcional)
Se quiser customizar:

Na seção "Manage Copilot code review...", clique em "View all rulesets"
Você será levado para a página de Rulesets
Clique no ruleset "Copilot review for default branch" para ver os detalhes:

Target branches: main (padrão)
Automatically request Copilot code review (marcado ✅)
Manage static analysis tools: CodeQL ativado


🎯 PASSO 6: Testar a Configuração

Crie uma nova branch: git checkout -b feature/teste
Faça alterações no código
Faça commit: git commit -m "test"
Faça push: git push origin feature/teste
Abra uma Pull Request para a branch main
Vá até a aba "Conversation"
Procure pela seção "Review requested"
Você verá: "Copilot was requested for review" ✅


✨ Pronto!
Agora toda vez que você abrir uma PR:

✅ Copilot será automaticamente solicitado como revisor
✅ Ele analisará seu código e deixará comentários
✅ Sugestões aparecerão na aba "Files changed"


🔍 Onde Ver os Comentários do Copilot
Após abrir uma PR, o Copilot deixará comentários em:

Conversation → Sumário geral da revisão
Files changed → Comentários em linhas específicas do código


📝 Resumo Rápido (TL;DR)
Settings → Copilot → Code review → 
"Create ruleset for default branch" → Done!
Pronto para usar! 🚀



# Avançado: Custom Instructions

https://github.com/leonardorsolar/codigo01_pr/settings/copilot/code_review

🎯  Ativar Custom Instructions (Opcional)

Na seção "General settings", você verá a opção:

"Use custom instructions when reviewing pull requests"


Toggle para ON (azul) se quiser que o Copilot siga instruções específicas do seu repositório
Para adicionar instruções customizadas, vá até "repository custom instructions" (link azul)