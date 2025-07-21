const image = document.querySelector(".image");

document.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    // Limitando a rotação para evitar que vire de cabeça para baixo
    yAxis = Math.max(25, Math.min(20, yAxis));

    image.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.1)`;
});

document.addEventListener("mouseleave", () => {
    image.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
});
