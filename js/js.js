function trocarTema() {
    const body = document.body;
    const btn = document.getElementById('btn-modo-tema');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        btn.textContent = 'Modo Claro';
    } else {
        btn.textContent = 'Modo Escuro';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
    .dark-mode {
        background-color: #121212;
        color: #f4f4f4;
    }
    .dark-mode header,
    .dark-mode footer {
        background-color: #333;
    }
    .dark-mode nav a {
        color: #f4f4f4;
    }
    .dark-mode .hero {
        background-color: #333;
    }`;
    document.head.appendChild(style);
});