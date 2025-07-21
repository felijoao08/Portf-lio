const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("mouseover", () => {
        panels.forEach(p => p.style.width = "30%");
        panel.style.width = "100%";
    });

    panel.addEventListener("mouseleave", () => {
        panels.forEach(p => p.style.width = "10%");
    });
});
