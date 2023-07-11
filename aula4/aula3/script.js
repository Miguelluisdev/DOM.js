function addInput() {
  const ul = document.getElementById("inputs");

  const newLi = document.createElement("li");

  newLi.className = "list-item";
  newLi.textContent = "new input";

  const newInput = document.createElement("input");
  newInput.type = "text";

  newInput.className = "input-group";

  newInput.name = "Ienput";

  newLi.appendChild(newInput);
  ul.appendChild(newLi);
}
