# proto-tipos
a repository of website and app prototypes
🧠 MFX System – Protótipo Web
Sistema Integrado de Gestão Comercial (SIGC)
📋 Descrição do Projeto

O MFX System é um protótipo de sistema web desenvolvido como parte de um projeto integrador com foco em gestão comercial integrada.
O objetivo é demonstrar, de forma visual e funcional, como um sistema moderno pode unificar os módulos de estoque, vendas, funcionários e orçamentos em uma interface única, limpa e responsiva.

O protótipo foi construído utilizando HTML, CSS, JavaScript e Bootstrap 5, com navegação dinâmica entre páginas e simulação de login/logout.

⚙️ Funcionalidades Principais

🔐 Login com validação simulada (admin / 1234)

🧭 Menu lateral fixo com navegação dinâmica entre módulos

💾 Carregamento de conteúdo via JavaScript (sem recarregar a página inteira)

📊 Gráficos de estatísticas com Chart.js

👥 Módulos separados: Estatísticas, Orçamentos, Produtos e Funcionários

🚪 Logout com confirmação e retorno à tela de login

🏗️ Tecnologias Utilizadas
Categoria	Tecnologia
Frontend	HTML5, CSS3, JavaScript
Framework	Bootstrap 5.3
Biblioteca	Chart.js (gráficos interativos)
Hospedagem	GitHub Pages
Layout	Responsivo e modular

📂 Estrutura de Pastas
/mfx-system-prototipo/
│
├── index.html          → Tela de login (ou painel, dependendo da configuração)
├── login.html          → Tela de login (separada, caso queira login antes do painel)
├── login.css           → Estilo da tela de login
├── styles.css          → Estilo global do sistema
├── script.js           → Lógica de navegação dinâmica e logout
│
└── /pages/
    ├── estatisticas.html
    ├── orcamentos.html
    ├── produtos.html
    └── funcionarios.html

🧩 Módulos do Sistema
Módulo	Descrição
📊 Estatísticas	Exibe indicadores e gráficos de desempenho
💰 Orçamentos	Lista orçamentos com status e valores
📦 Produtos	Mostra produtos cadastrados e controle de estoque
👥 Funcionários	Gerencia funcionários e departamentos
🧱 Fluxo do Sistema

Login: usuário acessa login.html e faz autenticação simulada.

Painel: é redirecionado para index.html, com menu lateral e páginas dinâmicas.

Logout: botão “🚪 Sair” encerra a sessão e retorna ao login.

✨ Autor e Créditos

Desenvolvido por:
👤 Mateus Wuthstrack

📅 Outubro de 2025
🏫 SENAI

🔗 Links Importantes

🌐 Protótipo Online (GitHub Pages):
https://mafox109.github.io/proto-tipos/

💾 GitHub:
https://github.com/Mafox109

🧠 Observações

Este projeto é didático e visa demonstrar conceitos de modelagem de sistemas, organização de código e integração de interfaces.

Pode ser facilmente expandido para um projeto real com backend em Python (Flask/Django), Node.js, ou outro framework.
