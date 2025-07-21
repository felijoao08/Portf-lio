document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // Seleciona todas as seções

    // Configuração do observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                entry.target.style.opacity = "0"; // Oculta a seção
                entry.target.style.transition = "opacity 3s ease"; // Efeito suave
            } else {
                entry.target.style.opacity = "1"; // Mostra a seção novamente
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section)); // Aplica o observer a todas as seções
});
