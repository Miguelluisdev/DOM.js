const caixa = document.querySelector("#caixa")

let mapa = new Map()

mapa.set("curso","javascript")
mapa.set(10, "curso")
mapa.set(1,100)

console.log(mapa)

caixa.textContent = mapa.get("curso")

if (mapa.has(10)){
  caixa.textContent = "existe na coleção"

} else{
  caixa.textContent = " não está na coleção"
}