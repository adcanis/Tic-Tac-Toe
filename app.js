//Global Settings
let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');
const roundSelect = document.querySelector('#round');
const newGameBtn = document.querySelector('#reset');
const square = Array.from(document.querySelectorAll('#playSquare'));

//Game Settings
let turn = 'X';
let gameBoard;
let win;
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let gameOver = false;


const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

roundSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    newGame();
})

function newGame() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    gameBoard = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    game();
}

document.getElementById('game').addEventListener('click', playTurn);

function getWinner() {
    if (square[0].textContent === 'X' & square[1].textContent === 'X' & square[2].textContent === 'X') {
        p1Score += 1;
        p1Display.classList.add('has-text-success');
        p1Display.innerHTML 
        p1Display.textContent = p1Score;
        
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];          
    } if (square[0].textContent === 'O' & square[1].textContent === 'O' & square[2].textContent === 'O') {
        p2Score += 1;
        p2Display.classList.add('has-text-success');
        p2Display.innerHTML = p2Score;
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];
    }  if (square[3].textContent === 'X' & square[4].textContent === 'X' & square[5].textContent === 'X') {
        p1Score += 1;
        p1Display.classList.add('has-text-success');
        p1Display.innerHTML 
        p1Display.textContent = p1Score;
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];          
    } if (square[3].textContent === 'O' & square[4].textContent === 'O' & square[5].textContent === 'O') {
        p2Score += 1;
        p2Display.classList.add('has-text-success');
        p2Display.innerHTML = p2Score;
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];
    }  if (square[6].textContent === 'X' & square[7].textContent === 'X' & square[8].textContent === 'X') {
        p1Score += 1;
        p1Display.classList.add('has-text-success');
        p1Display.innerHTML 
        p1Display.textContent = p1Score;
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];          
    } if (square[6].textContent === 'O' & square[7].textContent === 'O' & square[8].textContent === 'O') {
        p2Score += 1;
        p2Display.classList.add('has-text-success');
        p2Display.innerHTML = p2Score;
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];
    }  if (square[0].textContent === 'X' & square[3].textContent === 'X' & square[6].textContent === 'X') {
        p1Score += 1;
        p1Display.classList.add('has-text-success');
        p1Display.innerHTML 
        p1Display.textContent = p1Score;
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];          
    } if (square[0].textContent === 'O' & square[3].textContent === 'O' & square[6].textContent === 'O') {
        p2Score += 1;
        p2Display.classList.add('has-text-success');
        p2Display.innerHTML = p2Score;
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];
    }  if (square[1].textContent === 'X' & square[4].textContent === 'X' & square[7].textContent === 'X') {
        p1Score += 1;
        p1Display.classList.add('has-text-success');
        p1Display.innerHTML 
        p1Display.textContent = p1Score;
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];          
    } if (square[1].textContent === 'O' & square[4].textContent === 'O' & square[7].textContent === 'O') {
        p2Score += 1;
        p2Display.classList.add('has-text-success');
        p2Display.innerHTML = p2Score;
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];
    }  if (square[2].textContent === 'X' & square[5].textContent === 'X' & square[8].textContent === 'X') {
        p1Score += 1;
        p1Display.classList.add('has-text-success');
        p1Display.innerHTML 
        p1Display.textContent = p1Score;
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];          
    } if (square[2].textContent === 'O' & square[5].textContent === 'O' & square[8].textContent === 'O') {
        p2Score += 1;
        p2Display.classList.add('has-text-success');
        p2Display.innerHTML = p2Score;
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];
    }  if (square[0].textContent === 'X' & square[4].textContent === 'X' & square[8].textContent === 'X') {
        p1Score += 1;
        p1Display.classList.add('has-text-success');
        p1Display.innerHTML 
        p1Display.textContent = p1Score;
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];          
    } if (square[0].textContent === 'O' & square[4].textContent === 'O' & square[8].textContent === 'O') {
        p2Score += 1;
        p2Display.classList.add('has-text-success');
        p2Display.innerHTML = p2Score;
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];
    }  if (square[2].textContent === 'X' & square[4].textContent === 'X' & square[6].textContent === 'X') {
        p1Score += 1;
        p1Display.classList.add('has-text-success');
        p1Display.innerHTML 
        p1Display.textContent = p1Score;
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];          
    } if (square[2].textContent === 'O' & square[4].textContent === 'O' & square[6].textContent === 'O') {
        p2Score += 1;
        p2Display.classList.add('has-text-success');
        p2Display.innerHTML = p2Score;
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];
    } 
    if (p1Score === winningScore) {
        alert('congrats Player 1, You Win');
        p1Display.classList.add('has-text-success')
        p2Display.classList.add('has-text-danger')
        location.reload();
    } if (p2Score === winningScore) {
        alert('congrats Player 1, You Win');
        p2Display.classList.add('has-text-success')
        p1Display.classList.add('has-text-danger')
        location.reload();
    }
}

function playTurn() {
    let idx = square.findIndex(function(play) {
        return play === event.target;
    });
    gameBoard[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    win = getWinner();
    game();
}

function game() {
    gameBoard.forEach(function(mark, index) {
    square[index].textContent = mark;
    });

} 
newGame();
newGameBtn.addEventListener('click', newGame);



