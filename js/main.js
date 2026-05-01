// ================= CEK LOGIN =================
const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
    alert("Silakan login terlebih dahulu!");
    window.location.href = "login.html";
}

// ================= TAMPILKAN NAMA =================
const welcome = document.getElementById("welcome");
if (welcome) {
    welcome.textContent = "Welcome, " + user.username;
}

// ================= LOAD HALAMAN =================
function loadPage(page) {
    const content = document.getElementById("content");

    if (!content) return;

    if (page === "home") {
        content.innerHTML = `
            <h2>Selamat Datang</h2>
            <p>Ini adalah platform belajar coding dan teknologi.</p>
        `;
    }

    if (page === "coding") {
        content.innerHTML = `
            <h2>Belajar Coding</h2>
            <p>Mulai dari HTML, CSS, JavaScript.</p>
        `;
    }

    if (page === "computer") {
        content.innerHTML = `
            <h2>Cara Kerja Komputer</h2>
            <p>Pelajari CPU, RAM, dan sistem kerja komputer.</p>
        `;
    }

    if (page === "security") {
        content.innerHTML = `
            <h2>Cyber Security</h2>
            <p>Belajar menjaga sistem dari celah keamanan.</p>
        `;
    }

    if (page === "project") {
        content.innerHTML = `
            <h2>Project</h2>
            <p>Buat project coding kamu sendiri.</p>
        `;
    }
}

// ================= DEFAULT PAGE =================
window.addEventListener("load", () => {
    loadPage("home");
});

// ================= LOGOUT =================
function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
}
