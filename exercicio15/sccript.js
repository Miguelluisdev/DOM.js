const valor1 = document.querySelector("#input1");
const valor2 = document.querySelector("#input2");
// resultado
const resltado = document.querySelector("#resultado");
// btn operation
const somar = document.querySelector("#soma");
const sub = document.querySelector("#sub");
const multi = document.querySelector("#multi");
const divi = document.querySelector("#divi")

// array operation

const operation = [

  (val1,val2)=>{
      return val1 + val2
  },

  (val1,val2)=>{
    return val1 - val2
  },

  (val1,val2)=>{
    return val1 * val2
  },

  (val1,val2)=>{
    return val1 / val2
  }
]

// eventos do btn
somar.addEventListener("click", (evt)=>{
  const valores = [parseFloat(valor1.value), parseFloat(valor2.value)]
  const result = operation[0](...valores)
  resltado.textContent = result

})
sub.addEventListener("click", (evt)=>{
  const valores = [parseFloat(valor1.value), parseFloat(valor2.value)]
  const result = operation[1](...valores)
  resltado.textContent = result

})

multi.addEventListener("click", (evt)=>{
  const valores = [parseFloat(valor1.value), parseFloat(valor2.value)]
  const result = operation[2](...valores)
  resltado.textContent = result

})
divi.addEventListener("click", (evt)=>{
  const valores = [parseFloat(valor1.value), parseFloat(valor2.value)]
  const result = operation[3](...valores)
  resltado.textContent = result

})