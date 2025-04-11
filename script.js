let lastX, lastY;
const urunlerMenu = document.getElementById("urunlerMenu");
const kategoriMenu = document.getElementById("kategoriMenu");
let hideTimeout;

document.addEventListener("mousemove", (event) => {
    if (lastX !== undefined && lastY !== undefined) {
        const deltaX = Math.abs(event.clientX - lastX);
        const deltaY = Math.abs(event.clientY - lastY);
        if (deltaX > 200 || deltaY > 200) {
            kategoriMenu.style.display = "none";
        }
    }
    lastX = event.clientX;
    lastY = event.clientY;
});

urunlerMenu.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout);
    kategoriMenu.style.display = "block";
});

kategoriMenu.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout);
    kategoriMenu.style.display = "block";
});

urunlerMenu.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => {
        kategoriMenu.style.display = "none";
    }, 500);
});

kategoriMenu.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => {
        kategoriMenu.style.display = "none";
    }, 500);
});
