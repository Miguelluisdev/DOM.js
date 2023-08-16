/*
## Tic-Tac-Toe / Jogo da Velha

Construa um jogo tic-tac-toe, conhecido em português como jogo da velha, utilizando HTML, CSS e Javascript. Você pode desenvolver com liberdade, da forma que preferir, mas o jogo precisa atender aos seguintes requisitos:

- use cores escuras e dark/light mode
- Deve ser possível incluir os nomes dos dois jogadores;
- O nome do jogador da vez deve ser mostrado na tela em um modal e alterado a medida que os turnos vão se alternando;
- Um tabuleiro deve ser mostrado na tela e ser atualizado quando o jogador clicar na região que ele quer marcar;
- Quando um jogador clicar no tabuleiro deve ser marcado um “X” ou “O” de acordo com o jogador da vez e não deve ser possível clicar naquela região novamente;
- Quando um jogador ganhar seu nome deve ser mostrado na tela e as regiões da vitória devem ser destacadas de alguma forma;
- Em caso de empate, uma mensagem de empate deve ser mostrada na tela, mensagem no modal;
- Deve ser possível reiniciar o jogo para jogar novamente.
- deve ter um modal estilizado que apareça com um btn de confirmação que ao ser clicado mostra o jogo da velha
*/

document.addEventListener("DOMContentLoaded", function() {

  const board = document.getElementById("board");
  const turnDisplay = document.getElementById("turn");
  const resetBtn = document.getElementById("resetBtn");

  let currentPlayer  = "X";
  let cells = [["", "", ""], ["", "", ""], ["", "", ""]];
  let player1Name = "";
  let player2Name = "";

  function initializeGame(){
    cells = [["", "", ""], ["", "", ""], ["", "", ""]];
    currentPlayer = "X";
    updateTurnDisplay();
    createBoard();
  }

  function createBoard(){
    board.textContent = "";
    for (let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++ ){  // Corrigir: estava usando i++ em vez de j++
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.row = i;
        cell.dataset.col = j;
        cell.addEventListener("click", cellClick);
        cell.textContent = cells[i][j];
        board.appendChild(cell);
      }
    }
  }

  function cellClick(eve){
    const cell = eve.target;
    const row = cell.dataset.row;
    const col = cell.dataset.col;

    if (!cells[row][col]){
      cells[row][col] = currentPlayer;
      cell.textContent = currentPlayer;
      cell.classList.add(currentPlayer);

      if (checkWin()){
        board.removeEventListener("click", cellClick);
        const winnerName = currentPlayer === "X" ? player1Name : player2Name;
        turnDisplay.textContent = `${winnerName} ganhou está rodada!!`;
        alert(`${winnerName} venceu!!!`);
      } else if (checkDraw()){
        turnDisplay.textContent = "Empate!!";
        alert("Empate!!");
      } else{
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        updateTurnDisplay();
      }
    }
  }

  function checkWin(){
    const winningCombinations = [
       [[0, 0], [0, 1], [0, 2]],
       [[1, 0], [1, 1], [1, 2]],
       [[2, 0], [2, 1], [2, 2]],
       [[0, 0], [1, 0], [2, 0]],
       [[0, 1], [1, 1], [2, 1]],
       [[0, 2], [1, 2], [2, 2]],
       [[0, 0], [1, 1], [2, 2]],
       [[0, 2], [1, 1], [2, 0]]
    ];

    for (const combination of winningCombinations){
      const [a,b,c] = combination;
      if(
        cells[a[0]][a[1]] === cells[b[0]][b[1]] &&
        cells[a[0]][a[1]] === cells[c[0]][c[1]] &&
        cells[a[0]][a[1]] !== ""
      ){
        winningCells(a,b,c);
        return true;
      }
    }
    return false;
  }

  function checkDraw(){
    for( let row = 0; row < 3; row++){
      for (let col = 0; col < 3; col++){
        if (!cells[row][col]){
          return false;
        }
      }
    }
    return true;
  }

  function winningCells(cell1,cell2,cell3){
    const cellElements = document.getElementsByClassName("cell");

    for (const cell of cellElements){
      const row = parseInt(cell.dataset.row);
      const col = parseInt(cell.dataset.col);

      if (row === cell1[0] && col === cell1[1] ||
          row === cell2[0] && col === cell2[1] ||
          row === cell3[0] && col === cell3[1]
        ){
          cell.classList.add("winning-cell");
        }
    }
  }

  function updateTurnDisplay(){
    turnDisplay.textContent = `Vez de ${currentPlayer === "X" ? player1Name : player2Name}`;
  }

  resetBtn.addEventListener("click", function(ev){
    ev.preventDefault();
    initializeGame();
  });

  player1Name = prompt("Digite o nome do jogador 1:");
  player2Name = prompt("Digite o nome do jogador 2:");

  initializeGame();
});
