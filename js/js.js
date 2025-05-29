function trocarTema() {
    const body = document.body;
    const btn = document.getElementById('btn-modo-tema');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        btn.innerHTML = '🌙'; 
    } else {
        btn.innerHTML = '☀️'; 
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