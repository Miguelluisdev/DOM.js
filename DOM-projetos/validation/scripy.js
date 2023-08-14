const form = document.querySelector("#form");
const modal = document.getElementById("errorModal");
const modalMessage = document.getElementById("modalMessage");
const closeModal = document.getElementById("closeModal");
const progressBar = document.getElementById("progressBar");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.querySelector("#name").value;
  const emailInput = document.querySelector("#email").value;
  const passwordInput = document.querySelector("#password").value;
  const jobSelect = document.querySelector("#job").value;
  const messageTextarea = document.querySelector("#message").value;

  if (nameInput === "") {
    showModal("Por favor, preencha o seu nome.");
    return;
  } else if (nameInput.length < 3) {
    showModal("O nome deve ter pelo menos 3 caracteres.");
    return;
  }

  if (emailInput === "") {
    showModal("Por favor, preencha o seu e-mail.");
    return;
  } else if (!isValidEmail(emailInput)) {
    showModal("Por favor, insira um e-mail válido.");
    return;
  }

  if (passwordInput === "") {
    showModal("Por favor, preencha a sua senha.");
    return;
  } else if (passwordInput.length < 6) {
    showModal("A senha deve ter pelo menos 6 caracteres.");
    return;
  }

  if (jobSelect === "") {
    showModal("Por favor, selecione a sua situação de trabalho.");
    return;
  }

  if (messageTextarea === "") {
    showModal("Por favor, preencha a sua mensagem.");
    return;
  }

  // Se todas as validações passarem, envie o formulário
  form.submit();
});

function showModal(message) {
  modalMessage.textContent = message;
  modal.style.display = "block";
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Atualiza a barra de progresso conforme os campos são preenchidos
form.addEventListener("input", () => {
  const inputs = form.querySelectorAll("input, select, textarea");
  const filledInputs = Array.from(inputs).filter(input => input.value !== "");

  const progress = (filledInputs.length / inputs.length) * 100;
  progressBar.style.width = `${progress}%`;
});

// Função para validar o formato de e-mail
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

