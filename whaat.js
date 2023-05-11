let currentPlayer = "X";
let gameActive = true;
let statusDisplay = document.querySelector('.status');

function cellClicked(cell) {
  let clickedCell = cell.id;
  if (!gameActive || cell.textContent !== '') {
    return;
  }
  cell.textContent = currentPlayer;
  checkResult();
  togglePlayer();
}

function togglePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkResult() {
  let cell1 = document.getElementById("1").textContent;
  let cell2 = document.getElementById("2").textContent;
  let cell3 = document.getElementById("3").textContent;
  let cell4 = document.getElementById("4").textContent;
  let cell5 = document.getElementById("5").textContent;
  let cell6 = document.getElementById("6").textContent;
  let cell7 = document.getElementById("7").textContent;
  let cell8 = document.getElementById("8").textContent;
  let cell9 = document.getElementById("9").textContent;
  let winningCombination = [
    [cell1, cell2, cell3],
    [cell4, cell5, cell6],
    [cell7, cell8, cell9],
    [cell1, cell4, cell7],
    [cell2, cell5, cell8],
    [cell3, cell6, cell9],
    [cell1, cell5, cell9],
    [cell3, cell5, cell7]
  ];
  for (let i = 0; i < winningCombination.length; i++) {
    if (winningCombination[i][0] === currentPlayer && winningCombination[i][1] === currentPlayer && winningCombination[i][2] === currentPlayer) {
      statusDisplay.textContent = currentPlayer + " is the winner!";
      gameActive = false;
      return;
    }
  }
  let cells = document.querySelectorAll('td');
  let isTie = true;
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === '') {
      isTie = false;
      break;
    }
  }
  if (isTie) {
    statusDisplay.textContent = "It's a tie!";
    gameActive = false;
    return;
  }
}

function reset() {
  let cells = document.querySelectorAll('td');
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
  }
  statusDisplay.textContent = '';
  currentPlayer = 'X';
  gameActive = true;
}
