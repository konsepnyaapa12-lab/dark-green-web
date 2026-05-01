// ================= FADE MASUK =================
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1s";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});

// ================= TYPING EFFECT =================
const text = "WELCOME TO DARK GREEN SYSTEM";
let index = 0;

function typingEffect() {
    const title = document.getElementById("title");

    if (!title) return;

    if (index < text.length) {
        title.textContent += text.charAt(index);
        index++;
        setTimeout(typingEffect, 50);
    }
}

// Jalankan typing setelah load
window.onload = () => {
    typingEffect();
};

// ================= MASUK BUTTON =================
function masuk() {
    const content = document.getElementById("content");

    content.style.opacity = "0";
    content.style.transition = "1s";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);
}
