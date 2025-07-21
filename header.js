document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".navbar");
    const menuToggle = document.querySelector(".hamburguer");

    menuToggle.addEventListener("click", function () {
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
        } else {
            menu.classList.add("active");
        }
    });
});
