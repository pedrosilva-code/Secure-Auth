document.addEventListener("DOMContentLoaded", function () {
    const togglePasswordButton = document.getElementById("toggle-password");
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");

    const cadButton = document.querySelector(".cad-btn");
    const entButton = document.querySelector(".ent-btn");
    const form = document.querySelector("form");
    const inputBox = document.querySelector(".input-box");
    const emailInput = document.getElementById("email");

    let isCadastro = true; // Começa com a tela de Cadastrar ativa

    // Alternar entre "Cadastrar" e "Entrar"
    function toggleForm(mode) {
        if (mode === "cadastrar") {
            isCadastro = true;
            cadButton.classList.add("active");
            entButton.classList.remove("active");
            form.querySelector("button[type='submit']").textContent = "Cadastrar";
        } else {
            isCadastro = false;
            cadButton.classList.remove("active");
            entButton.classList.add("active");
            form.querySelector("button[type='submit']").textContent = "Entrar";
        }
    }

    // Inicia com o Cadastrar ativo
    toggleForm("cadastrar");

    // Evento para os botões
    cadButton.addEventListener("click", () => toggleForm("cadastrar"));
    entButton.addEventListener("click", () => toggleForm("entrar"));

    // Validação dos campos antes do envio
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede envio padrão

        if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
            alert("Todos os campos são obrigatórios!");
        } else {
            alert(isCadastro ? "Cadastro realizado com sucesso!" : "Login efetuado com sucesso!");
            form.reset(); // Limpa os campos
        }
    });

    // Alternar visibilidade da senha
    togglePasswordButton.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            eyeIcon.src = "svg/eye.svg";
        } else {
            passwordInput.type = "password";
            eyeIcon.src = "svg/eye-closed.svg";
        }
    });
});
