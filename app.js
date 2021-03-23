//<----------Global Settings-------->
const roundSelect = document.querySelector('#round');
const newGameBtn = document.querySelector('#reset');
const square = Array.from(document.querySelectorAll('#playSquare'));
let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');
let turn = 'X';
let gameBoard;
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let gameOver = false;

//<----------New Game Button-------->
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

//<----------Round Selector-------->
roundSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    newGame();
})

//<----------Game Settings-------->
function playGame() {
    document.getElementById('game').addEventListener('click', function() {
    let play = square.findIndex(function(play) {
        return play === event.target;
    });
    gameBoard[play] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    if (square[0].textContent === 'X' && square[1].textContent === 'X' && square[2].textContent === 'X') {
        p1Score += 1;
        p1Display.classList.add('has-text-success');
        p1Display.innerHTML 
        p1Display.textContent = p1Score;
        alert('Player 1 wins this round!');
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];      
    } if (square[0].textContent === 'O' && square[1].textContent === 'O' && square[2].textContent === 'O') {
        p2Score += 1;
        p2Display.classList.add('has-text-success');
        p2Display.innerHTML = p2Score;
        alert('Player 2 wins this round!');
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];
    }  if (square[3].textContent === 'X' && square[4].textContent === 'X' && square[5].textContent === 'X') {
        p1Score += 1;
        p1Display.classList.add('has-text-success');
        p1Display.innerHTML 
        p1Display.textContent = p1Score;
        alert('Player 1 wins this round!');
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];          
    } if (square[3].textContent === 'O' && square[4].textContent === 'O' && square[5].textContent === 'O') {
        p2Score += 1;
        p2Display.classList.add('has-text-success');
        p2Display.innerHTML = p2Score;
        alert('Player 2 wins this round!');
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];
    }  if (square[6].textContent === 'X' && square[7].textContent === 'X' &&square[8].textContent === 'X') {
        p1Score += 1;
        p1Display.classList.add('has-text-success');
        p1Display.innerHTML 
        p1Display.textContent = p1Score;
        alert('Player 1 wins this round!');
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];          
    } if (square[6].textContent === 'O' && square[7].textContent === 'O' && square[8].textContent === 'O') {
        p2Score += 1;
        p2Display.classList.add('has-text-success');
        p2Display.innerHTML = p2Score;
        alert('Player 2 wins this round!');
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];
    }  if (square[0].textContent === 'X' && square[3].textContent === 'X' && square[6].textContent === 'X') {
        p1Score += 1;
        p1Display.classList.add('has-text-success');
        p1Display.innerHTML 
        p1Display.textContent = p1Score;
        alert('Player 1 wins this round!');
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];          
    } if (square[0].textContent === 'O' && square[3].textContent === 'O' &&square[6].textContent === 'O') {
        p2Score += 1;
        p2Display.classList.add('has-text-success');
        p2Display.innerHTML = p2Score;
        alert('Player 2 wins this round!');
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];
    }  if (square[1].textContent === 'X' && square[4].textContent === 'X' && square[7].textContent === 'X') {
        p1Score += 1;
        p1Display.classList.add('has-text-success');
        p1Display.innerHTML 
        p1Display.textContent = p1Score;
        alert('Player 1 wins this round!');
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];          
    } if (square[1].textContent === 'O' && square[4].textContent === 'O' &&square[7].textContent === 'O') {
        p2Score += 1;
        p2Display.classList.add('has-text-success');
        p2Display.innerHTML = p2Score;
        alert('Player 2 wins this round!');
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
        alert('Player 1 wins this round!');
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];          
    } if (square[2].textContent === 'O' && square[5].textContent === 'O' && square[8].textContent === 'O') {
        p2Score += 1;
        p2Display.classList.add('has-text-success');
        p2Display.innerHTML = p2Score;
        alert('Player 2 wins this round!');
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];
    }  if (square[0].textContent === 'X' && square[4].textContent === 'X' && square[8].textContent === 'X') {
        p1Score += 1;
        p1Display.classList.add('has-text-success');
        p1Display.innerHTML 
        p1Display.textContent = p1Score;
        alert('Player 1 wins this round!');
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];          
    } if (square[0].textContent === 'O' & square[4].textContent === 'O' & square[8].textContent === 'O') {
        p2Score += 1;
        p2Display.classList.add('has-text-success');
        p2Display.innerHTML = p2Score;
        alert('Player 2 wins this round!');
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];
    }  if (square[2].textContent === 'X' && square[4].textContent === 'X' && square[6].textContent === 'X') {
        p1Score += 1;
        p1Display.classList.add('has-text-success');
        p1Display.innerHTML 
        p1Display.textContent = p1Score;
        alert('Player 1 wins this round!');
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];          
    } if (square[2].textContent === 'O' && square[4].textContent === 'O' &&square[6].textContent === 'O') {
        p2Score += 1;
        p2Display.classList.add('has-text-success');
        p2Display.innerHTML = p2Score;
        alert('Player 2 wins this round!');
        gameBoard = [
            '', '', '',
            '', '', '',
            '', '', ''
            ];
    } 
 //<---------Tie Game Settings-------->
    
//<----------Winning Score Settings-------->
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
   

    game();
})
}
function game() {
    gameBoard.forEach(function(mark, index) {
    square[index].textContent = mark;
    });
} 
playGame();
newGame();
newGameBtn.addEventListener('click', newGame);

    
