document.addEventListener("DOMContentLoaded", function () {
    const togglePasswordButton = document.getElementById("toggle-password");
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");

    const cadButton = document.querySelector(".cad-btn");
    const entButton = document.querySelector(".ent-btn");
    const form = document.querySelector("form");
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

    // Inicia com "Cadastrar" ativo
    toggleForm("cadastrar");

    // Evento para alternar entre os botões
    cadButton.addEventListener("click", () => toggleForm("cadastrar"));
    entButton.addEventListener("click", () => toggleForm("entrar"));

    // Validação dos campos antes do envio
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede envio padrão

        // Removendo mensagens antigas
        document.querySelectorAll(".error-message").forEach(msg => msg.remove());

        let hasError = false;

        // Função para verificar e adicionar mensagem de erro
        function checkField(input) {
            if (input.value.trim() === "") {
                const errorMessage = document.createElement("span");
                errorMessage.textContent = "Campo obrigatório";
                errorMessage.classList.add("error-message");
                input.parentNode.appendChild(errorMessage);
                hasError = true;
            }
        }

        checkField(emailInput);
        checkField(passwordInput);

        if (!hasError) {
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
