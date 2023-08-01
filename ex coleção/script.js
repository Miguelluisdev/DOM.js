/*crie uma estrutura de dados para representar informações sobre estudantes de uma escola, cada aluno será identificado por um número de matricula(chave) e terá um objeto contendo informações*/
const mapa = new Map()
// add estudante
const addStudent = (id,idade,nome,curso)=>{
  mapa.set(id, {
      nome,
      idade,
      curso,
  })

}
// buscar estudante
const buscarEstudante = (id)=>{
  return mapa.get(id)
}
// verificar estudante
const verificar = (id)=>{
  return mapa.has(id)
}
// remover estudante
const removerEstudante = (id)=>{
  mapa.delete(id)
}
// add alunos
addStudent(101,"darius",20, ["matemacia", "ciencias"])
addStudent(102, "dc" , 19, ["historia"])
addStudent(103, "ace", 18 , ["biologia"])

console.log(mapa)

// verificar aluno
const verfifyId = 102
 if (verificar(verfifyId)){
  const studanteInfo = buscarEstudante(verfifyId)
  console.log(` Informações do ALuno da matricula ${verfifyId}
    Nome: ${studanteInfo.nome}
    Idade: ${studanteInfo.idade}
    Curso: ${studanteInfo.curso}
  
  `)
 } else{
  console.log(`aluno da matricula ${verfifyId} não encontrado`)
 }

 // remover estudanr
 const removeStudent = 101
 if (verificar(removeStudent)){
      removerEstudante(removeStudent)
 }

 console.log(mapa)