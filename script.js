document.addEventListener("DOMContentLoaded", function() {
    const togglePasswordButton = document.getElementById("toggle-password");
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");

    togglePasswordButton.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";  // Exibe a senha
            eyeIcon.src = "svg/eye.svg"; // Altera para o ícone de olho aberto
        } else {
            passwordInput.type = "password"; // Oculta a senha
            eyeIcon.src = "svg/eye-closed.svg"; // Altera para o ícone de olho fechado
        }
    });
});