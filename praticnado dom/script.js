// chama a função
function addContact() {
  const section = document.querySelector("#contact-list");
  // cria titulo para o contato
  const h3 = document.createElement("h3");
  // cria o texto
  h3.textContent = "contato";
  // cria a lista para adicionar varios campos para os contatos
  const ul = document.createElement("ul");
  // nome
  //campo
  //endereço

  // li para armazenar o input do contato
  const nameLi = document.createElement("li");

  nameLi.textContent = " Nome: ";
  // input para o  nome do contato
  const nameInput = document.createElement("input");
  // valores do input
  nameInput.type = "text";

  nameInput.name = "fullname";
  // adiciona o li e o input
  nameLi.appendChild(nameInput);
  ul.appendChild(nameLi);
  // cria a tag br dentro do apppend
  ul.appendChild(document.createElement("br"));

  const phoneLi = document.createElement("li");
  phoneLi.textContent = " Telefone: ";
  // input para o  nome do contato
  const phoneInput = document.createElement("input");
  // valores do input
  phoneInput.type = "text";
  phoneInput.name = "fullname";
  // adiciona o li e o input
  phoneLi.appendChild(phoneInput);
  ul.appendChild(phoneLi);

  ul.appendChild(document.createElement("br"));

  // cria o endereço
  const addressLi = document.createElement("li");
  addressLi.textContent = '<label for="adress"> Endereço </label>';

  const adressInput = document.createElement("input");
  adressInput.type = "text";
  adressInput.name = "addres";
  adressInput.id = "address";
  addressLi.appendChild(adressInput);
  ul.appendChild(addressLi);

  ul.appendChild(document.createElement("br"));
  // adiciona os elementos na section
  section.append(h3, ul);
}
// function remover contato com removeChield
function removeContact() {
  const contactSection = document.querySelector("#contact-list");
  const title = document.getElementsByTagName("h3");
  const contact = document.getElementsByTagName("ul");

  contactSection.removeChild(title[title.length - 1]);
  contactSection.removeChild(contact[contact.length - 1]);
}
