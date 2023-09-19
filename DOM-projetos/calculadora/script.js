import calculate from "./calculate.js";
import _switch from "./switch.js";

import copy from "./copy.js";

const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");

// impedir que o usuario digita apenas os botões sem letras
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

// funcionalidade dos botões
document.querySelectorAll(".charKey").forEach(function(charKeyBtn){
  charKeyBtn.addEventListener("click", function(){
    const value = charKeyBtn.dataset.value
    input.value += value
  })
});

// configurando o botão clear para limpar o input
document.getElementById("clear").addEventListener("click", function(){
  input.value = ""
  input.focus()
});

// associar ao btn igual a função calculo
document.getElementById("equal").addEventListener("click", calculate)

input.addEventListener("keydown", function(ev){
  ev.preventDefault()
  // verifica se inclui oq esta na array

  if (allowedKeys.includes(ev.key)){
    input.value += ev.key
    return
  }
  // tratamento de backspace apagar a letra e numero
  if (ev.key === "Backspace"){
    input.value = input.value.slice(0, -1)
  }
  // tratamento do  enter para quando cliccar executa a operação
  if (ev.key === "Enter"){
    calculate()
  }


});
// função responsavel pelo calculo



// function calculate(){
//   // eval função interessante mais perigosa roda codigo js 
//   const result = eval(input.value)
//   resultInput.value = result
//   resultInput.value = "ERROR"
//   resultInput.classList.add("error")
// };

// btn copiar para area de transferencia

// trocar o tema pelo root pegando as var e alterando com setproperty

