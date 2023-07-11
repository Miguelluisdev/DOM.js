let el = document.createElement("div");

el.classList = "div-class";
el.textContent = "dalva";
console.log(el);

let container = document.querySelector("#container");

//inserindo o elemento
container.appendChild(el);

// insert before

let el2 = document.createElement("div");
el2.style.color = "pink";
el2.classList = "darius";
el2.style.border = "1px solid black";
el2.textContent = "dickens";

let el3 = document.querySelector("#container .div-class");

container.insertBefore(el2, el3);
