function toggleForm() {
    document.getElementById("login-box").classList.toggle("hidden");
    document.getElementById("signup-box").classList.toggle("hidden");
}

function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    let error = document.getElementById("login-error");
    error.textContent = "";
    
    if (!email.includes("@")) {
        error.textContent = "Invalid email format";
        return;
    }
    if (password.length < 6) {
        error.textContent = "Password must be at least 6 characters";
        return;
    }
    document.getElementById("login-box").classList.toggle("hidden");
    document.getElementById("signup-box").classList.toggle("hidden");

}

function signup() {
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    let confirm = document.getElementById("signup-confirm").value;
    let error = document.getElementById("signup-error");
    error.textContent = "";
    
    if (!email.includes("@")) {
        error.textContent = "Invalid email format";
        return;
    }
    if (password.length < 6) {
        error.textContent = "Password must be at least 6 characters";
        return;
    }
    if (password !== confirm) {
        error.textContent = "Passwords do not match";
        return;
    }
    document.getElementById("login-box").classList.toggle("hidden");
    document.getElementById("signup-box").classList.toggle("hidden");
    location="http://127.0.0.1:5500/main.html"
}
