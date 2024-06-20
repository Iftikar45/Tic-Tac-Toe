const board = document.getElementById('board');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function createBoard() {
    board.innerHTML = '';
    gameBoard.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.dataset.index = index;
        cellElement.innerText = cell;
        cellElement.addEventListener('click', handleCellClick);
        board.appendChild(cellElement);
    });
}

function handleCellClick(e) {
    const index = e.target.dataset.index;
    if (gameBoard[index] === '') {
        gameBoard[index] = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        createBoard();
        checkWinner();
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            setTimeout(() => alert(`Player ${gameBoard[a]} wins!`), 100);
            return;
        }
    }

    if (!gameBoard.includes('')) {
        setTimeout(() => alert('Draw!'), 100);
    }
}

resetButton.addEventListener('click', () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    createBoard();
});

createBoard();
