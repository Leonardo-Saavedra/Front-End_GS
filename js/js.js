function aplicarTema() {
    const tema = localStorage.getItem('tema');
    if (tema === 'escuro') {
        document.body.classList.add('dark-mode');
        document.getElementById('btn-modo-tema').textContent = '🌙';
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('btn-modo-tema').textContent = '☀️';
    }
}
function trocarTema() {
    const body = document.body;
    const btn = document.getElementById('btn-modo-tema');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('tema', 'escuro');
        btn.textContent = '🌙';
    } else {
        localStorage.setItem('tema', 'claro');
        btn.textContent = '☀️';
    }
}

document.addEventListener('DOMContentLoaded', aplicarTema);


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

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".formulario-contato");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        let valid = true;
        clearErrors();

        const nome = form.nome;
        if (!nome.value.trim()) {
            showError(nome, "Por favor, preencha seu nome.");
            valid = false;
        }

        const email = form.email;
        if (!email.value.trim()) {
            showError(email, "Por favor, preencha seu e-mail.");
            valid = false;
        } else if (!validateEmail(email.value)) {
            showError(email, "Digite um e-mail válido.");
            valid = false;
        }

        const mensagem = form.mensagem;
        if (mensagem && !mensagem.value.trim()) {
            showError(mensagem, "Por favor, escreva sua mensagem.");
            valid = false;
        }

        if (!valid) e.preventDefault();
    });

    function showError(input, message) {
        let error = document.createElement("span");
        error.className = "erro-form";
        error.innerText = message;
        input.classList.add("erro-input");
        input.parentNode.insertBefore(error, input.nextSibling);
    }

    function clearErrors() {
        form.querySelectorAll(".erro-form").forEach(e => e.remove());
        form.querySelectorAll(".erro-input").forEach(e => e.classList.remove("erro-input"));
    }

    function validateEmail(email) {
        // Regex simples para validação de e-mail
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});



  window.watsonAssistantChatOptions = {
    integrationID: "483206bb-c74e-4603-9e7c-4f45f4e06b28", 
    region: "au-syd", 
    serviceInstanceID: "83c51838-e2b0-450c-a895-175727118bab", 
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });