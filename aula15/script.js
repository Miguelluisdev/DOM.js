// #array
const p_array = document.querySelector("#array")
//#btnverificar
const btnVerificar = document.querySelector("#btnVerificar")
// #resultado
const resultado = document.querySelector("#resultado")

const elementosArray =[16,17,12,11,14,,15,13,19]
p_array.textContent = "[" + elementosArray + "]"

btnVerificar.addEventListener("click", (evt)=>{
 
 const ret = elementosArray.some((el,i)=>{
  if(el < 18){
    resultado.textContent = "Lista Não conforme" + " na posisção " + i
  }
      return el >= 18
  })
  if(ret){
    resultado.textContent = "OK"
  }
 // console.log(ret)
})