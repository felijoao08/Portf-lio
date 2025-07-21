let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    currentIndex = (currentIndex + direction + totalItems) % totalItems; // Carrossel infinito
    updateCarousel();
}

function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Ajuste do cálculo para garantir que a última imagem seja exibida corretamente
    track.style.transform = `translateX(-${currentIndex * (items[0].offsetWidth + 20)}px)`; // A largura da imagem + margem

    // A transição pode ser ajustada se necessário
    track.style.transition = 'transform 0.5s ease-in-out';
}

function toggleImage(item) {
    const images = item.querySelectorAll('img');
    images[0].classList.toggle('active');
    images[1].classList.toggle('hidden');
}

// Suporte a toque para navegar pelas imagens
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.carousel-container').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX; // Registro do toque inicial
});

document.querySelector('.carousel-container').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX; // Registro do toque final

    if (touchStartX > touchEndX) {
        moveCarousel(1); // Deslizar para a esquerda
    } else if (touchStartX < touchEndX) {
        moveCarousel(-1); // Deslizar para a direita
    }
});

// Exibir a descrição ao clicar na imagem
const carouselItems = document.querySelectorAll('.carousel-item');

carouselItems.forEach(item => {
  item.addEventListener('click', () => {
    const description = item.querySelector('.description');
    description.classList.toggle('visible');
  });
});
