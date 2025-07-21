document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".slider img");
    let currentIndex = 0;

    function changeImage() {
        images[currentIndex].classList.remove("active"); // Remove a classe da imagem atual
        currentIndex = (currentIndex + 1) % images.length; // Passa para a próxima imagem
        images[currentIndex].classList.add("active"); // Adiciona a classe na nova imagem
    }

    setInterval(changeImage, 4000); // Muda a imagem a cada 4 segundos
});
