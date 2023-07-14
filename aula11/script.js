function register(ev) {
  console.log(ev);
  const sectionElement = ev.currentTarget.parentNode;
  const username = sectionElement.children.username.value;
  const passwrod = sectionElement.children.password.value;
  const passwordConfirmation =
    sectionElement.children.passwordConfirmation.value;
  if (passwrod === passwordConfirmation) {
    alert("usuario: " + username + " registrado");
  } else {
    alert("as senhas não coincidem");
  }
}

const button = document.getElementById("register-button");

// button.addEventListener("click", function () {
//   alert("botão clicado");
// });

button.addEventListener("click", register);

function removeEvent() {
  button.removeEventListener("click", register);
  alert("Event Removed");
}
