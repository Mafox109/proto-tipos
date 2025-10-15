// script.js — carregamento dinâmico de páginas + logout

// Função para carregar uma página no content-area
async function loadPage(url) {
    const content = document.getElementById('content-area');
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        const html = await res.text();
        content.innerHTML = html;
        // opcional: executar scripts embutidos na página carregada
        executeInlineScripts(content);
    } catch (err) {
        console.error('Erro ao carregar página:', url, err);
        content.innerHTML = `<div class="alert alert-danger">Erro ao carregar a página. Verifique o console (F12) para detalhes.</div>`;
    }
}

// Garante execução de scripts inline que possam existir nas páginas carregadas
function executeInlineScripts(container) {
    const scripts = container.querySelectorAll('script');
    scripts.forEach(oldScript => {
        const newScript = document.createElement('script');
        if (oldScript.src) {
            newScript.src = oldScript.src;
            newScript.async = false;
        } else {
            newScript.textContent = oldScript.textContent;
        }
        document.body.appendChild(newScript);
        // remove para evitar reexecução se for recarregado
        oldScript.remove();
    });
}

// Associa os links com data-page corretamente (usa o próprio elemento 'link')
document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // usa o atributo do próprio link (evita problemas com e.target sendo o filho)
        const url = link.getAttribute('href');
        if (!url) {
            console.warn('Link sem href encontrado', link);
            return;
        }
        loadPage(url);
        // destaca o item ativo visualmente
        document.querySelectorAll('[data-page]').forEach(li => li.classList.remove('active'));
        link.classList.add('active');
    });
});

// Carregar uma página padrão (opcional)
document.addEventListener('DOMContentLoaded', () => {
    // tenta carregar estatisticas por padrão
    loadPage('pages/estatisticas.html');
});

// Logout (certifique-se de existir o elemento #logoutBtn no index.html)
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        const confirmar = confirm("Deseja realmente sair do sistema?");
        if (confirmar) window.location.href = "login.html";
    });
}
