let el = document.createElement("h3");
el.classList = "title";
el.textContent = "darius";

console.log(el);

let title = document.querySelector("#title");

console.log(title);

// let body = document.querySelector("body");

let pai = title.parentNode;

pai.replaceChild(el, title);
