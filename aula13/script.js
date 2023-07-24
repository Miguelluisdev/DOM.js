// #array
const p_array = document.querySelector("#array")
// #txt_pesquisar
const txtPesquisar = document.querySelector("#txt_pesquisar")
//#btnPesquisar
const btnPesquisar = document.querySelector("#btnPesquisar")
// #resultado
const resultado = document.querySelector("#resultado")

const elementosArray =["html","css","javascript"]
p_array.textContent = "[" + elementosArray + "]"

btnPesquisar.addEventListener("click", (evt)=>{
  resultado.textContent = "valor não encontrado"
 const ret = elementosArray.find((e,i)=>{
      if(e.toUpperCase() == txtPesquisar.value.toUpperCase()){
        resultado.textContent = "Valor encontrado: " + e + " posição: " + i
        return e
      }
  })
  console.log(ret)
})