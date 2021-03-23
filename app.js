//<----------Global Settings-------->
const roundSelect = document.querySelector('#round');
const newGameBtn = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const squares = Array.from(document.querySelectorAll('#playSquare'));
const messages = document.querySelector('#message');

let p1Score = 0;
let p2Score = 0;
let gameBoard;
let turn = 'X';
let win;
let winningScore = 3;
let gameOver = false;

messages.style.color = '#3273dc';

//<----------Game Board Buttons and Selector-------->

//Round Select//
roundSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    newGame();
})

//New Game Button//
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

//<----------Game Play Settings-------->

document.getElementById('game').addEventListener('click', playTurn);
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], 
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

//<----------Game Play-------->

function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (gameBoard[combo[0]] && gameBoard[combo[0]] === gameBoard[combo[1]] && gameBoard[combo[0]] === gameBoard[combo[2]]) winner = gameBoard[combo[0]];
        });
        return winner ? winner : gameBoard.includes('') ? null : 'T';
};

function playTurn() {
    let playTurn = squares.findIndex(function(square) {
        return square === event.target;
    });
    gameBoard[playTurn] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    win = getWinner();
    game();
};

function game() {
    gameBoard.forEach(function(mark, index) {
    squares[index].textContent = mark;
    })
    messages.textContent = `It's your turn "${turn}"`;

    if 
    
    (win === 'X') {
        p1Score += 1;
        p1Display.textContent = p1Score;
        p1Display.style.color = "#00d1b2";
        p2Display.style.color = "#ff3860";
        messages.textContent = 'X wins this Round! Click the board to continue.'; 
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];  

    } 
    
    if (win === 'O') {
        p2Score += 1;
        p2Display.textContent = p1Score;
        p2Display.style.color = "#00d1b2";
        p1Display.style.color = "#ff3860";
        messages.textContent = 'O wins this Round! Click the board to continue.';
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];

    } 
    
    if (win === 'T') {
        p1Display.style.color = '#ffdd57';
        p2Display.style.color = '#ffdd57';
        messages.textContent = "it's a draw...Click the board to continue";
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];
    }

    if (p1Score === winningScore) {
        alert('Congrats to X, you won the game!');
        location.reload();
    } if (p2Score === winningScore) {
        alert('COngrats to O, you won the game!');
        location.reload();
    }
}

newGame();

newGameBtn.addEventListener('click', function () {
    location.reload();

})
