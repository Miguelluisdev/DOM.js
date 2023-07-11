function show() {
  let verElemento = document.getElementById("contact-list");
  console.log(verElemento);

  const listElements = document.getElementsByTagName("li");
  console.log(listElements);

  const className = document.getElementsByClassName("contact-input");
  console.log(className);

  const seletorAll = document.querySelectorAll("#contact-list > li > label");
  console.log(seletorAll);

  const contact1 = document.getElementsByName("contact1");
  console.log(contact1);

  // Obter um elemento a partir de uma query (o primeiro elemento a corresponder)
  const contact = document.querySelector("#contact-list > li > label");
  console.log(contact);
  console.log(contact.textContent);
}
