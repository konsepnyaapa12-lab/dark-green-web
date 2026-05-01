// ================= GENERATE CODE =================
function generateCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// ================= REGISTER =================
function register() {
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const message = document.getElementById("message");

    message.textContent = "";
    message.className = "";

    if (!email || !username || !password || !confirm) {
        message.textContent = "Semua field wajib diisi!";
        message.className = "error";
        return;
    }

    if (!email.includes("@")) {
        message.textContent = "Email tidak valid!";
        message.className = "error";
        return;
    }

    if (password.length < 6) {
        message.textContent = "Password minimal 6 karakter!";
        message.className = "error";
        return;
    }

    if (password !== confirm) {
        message.textContent = "Password tidak cocok!";
        message.className = "error";
        return;
    }

    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser && existingUser.email === email) {
        message.textContent = "Email sudah terdaftar!";
        message.className = "error";
        return;
    }

    const code = generateCode();

    const userData = {
        email,
        username,
        password: btoa(password),
        code
    };

    localStorage.setItem("tempUser", JSON.stringify(userData));

    message.innerHTML = `
        <div class="success">
            Kode verifikasi: <b>${code}</b><br>
        </div>
    `;

    setTimeout(() => {
        window.location.href = "verify.html";
    }, 3000);
}

// ================= VERIFY =================
function verify() {
    const inputCode = document.getElementById("code").value.trim();
    const message = document.getElementById("message");

    message.textContent = "";
    message.className = "message";

    const tempUser = JSON.parse(localStorage.getItem("tempUser"));

    if (!tempUser) {
        message.textContent = "Data tidak ditemukan!";
        message.classList.add("error");
        return;
    }

    if (!inputCode) {
        message.textContent = "Kode wajib diisi!";
        message.classList.add("error");
        return;
    }

    if (inputCode !== tempUser.code) {
        message.textContent = "Kode salah!";
        message.classList.add("error");
        return;
    }

    const finalUser = {
        email: tempUser.email,
        username: tempUser.username,
        password: tempUser.password
    };

    localStorage.setItem("user", JSON.stringify(finalUser));
    localStorage.removeItem("tempUser");

    message.textContent = "Verifikasi berhasil!";
    message.classList.add("success");

    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
}

// ================= LOGIN =================
function login() {
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const error = document.getElementById("error");

    error.textContent = "";

    if (!email || !username) {
        error.textContent = "Semua field wajib diisi!";
        return;
    }

    if (!email.includes("@")) {
        error.textContent = "Format email tidak valid!";
        return;
    }

    const userData = JSON.parse(localStorage.getItem("user"));

    if (!userData) {
        error.textContent = "Akun tidak ditemukan!";
        return;
    }

    if (email !== userData.email || username !== userData.username) {
        error.textContent = "Email atau Username salah!";
        return;
    }

    alert("Login berhasil!");
    window.location.href = "dashboard.html";
                                    }
