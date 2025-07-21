function typeEffect(elementId, text, nextSectionId) {
    let i = 0;
    let element = document.getElementById(elementId);
    element.innerHTML = ''; // Limpa o texto antes de começar

    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;

            // Tempo aleatório para simular digitação natural (50ms - 150ms)
            let typingSpeed = Math.floor(Math.random() * (150 - 50 + 1)) + 50;

            setTimeout(typeWriter, typingSpeed);
        } else {
            // Quando a digitação terminar, rola suavemente para a próxima seção
            setTimeout(() => {
                document.querySelector(nextSectionId).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 1000); // Espera 1 segundo antes de rolar
        }
    }

    typeWriter(); // Inicia o efeito de digitação
}

// Seleciona o botão pelo ID
const button = document.getElementById('conhecer-btn');

// Adiciona o evento de clique para ativar o efeito de digitação e rolagem
button.addEventListener('click', function() {
    typeEffect('welcome-message', 'Seja bem vindo!', '#sobre_mim');
});
