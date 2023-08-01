/*
    sistema de votação parsa uma enquete com multiplas escolhas, o set será usado para registrar os votos unicos doges usuarios e contar os votos para cada opção
*/
document.addEventListener("DOMContentLoaded", function (){
  const btnVotar = document.getElementById("vote-button");
  const list = document.getElementById("options-list"); // Correção aqui
  const result = document.getElementById("result");

  // criar set
  const voteSet = new Set();
  // click buton
  btnVotar.addEventListener("click", function(){
    const opçãoSelecionada = document.querySelector('input[name="vote"]:checked'); // Correção aqui
    // validando
    if (opçãoSelecionada){
      const votar = opçãoSelecionada.value;
      // verifica 
      if (!voteSet.has(votar)){
        voteSet.add(votar);
        uptadeResult();
      }else{
        alert("Você já votou nessa opção");
      }
    } else{
      alert("Selecione uma opção para votar");
    }
  });

  function uptadeResult(){
    const resultMap = new Map();
    // contando voto para cada opção
    voteSet.forEach(vote =>{
      if (resultMap.has(vote)){
          resultMap.set(vote, resultMap.get(vote) + 1);
      } else {
          resultMap.set(vote, 1);
      }
    });
    //  exibindo o resultado
    let resultHtml = '<h3>Resultado da votação:</h3>';
    resultMap.forEach((count, option) => {
      resultHtml += `<p>${option}: ${count} voto${count === 1 ? '' : 's'}</p>`;
    });

    result.innerHTML = resultHtml; // Correção aqui
  }
});
