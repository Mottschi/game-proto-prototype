const ROWS = 15;
const COLUMNS = 10;

document.addEventListener('DOMContentLoaded', ()=>{
    const generateBoardButton = document.querySelector('#generate-board');
    const altGenerateBoardButton = document.querySelector('#alt-generate-board');
    const resetBoardButton = document.querySelector('#reset-board');

    const board = document.querySelector('#board');
    


    generateBoardButton.addEventListener('click', (event) => {
        resetBoard();
        board.style.display = 'grid';
        board.style.gridTemplateColumns = `repeat(${COLUMNS}, 1fr)`;
        console.log('generating board')
        for (let row = 0; row < ROWS; row++) {
            for (let column = 0; column < COLUMNS; column++) {
                const tile = document.createElement('div');
                tile.classList.add('tile');
                tile.setAttribute('id', `tile-${row}-${column}`);
                board.appendChild(tile);
            }
        }
    })

    altGenerateBoardButton.addEventListener('click', (event) => {
        resetBoard();
        console.log('generating board - alternative way')
        for (let row = 0; row < ROWS; row++) {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            rowDiv.setAttribute('id', `row-${row}`);
            rowDiv.style.gridTemplateColumns = `repeat(${COLUMNS}, 1fr)`;


            for (let column = 0; column < COLUMNS; column++) {
                const tile = document.createElement('div');
                tile.classList.add('tile');
                tile.setAttribute('id', `tile-${row}-${column}`);
                rowDiv.appendChild(tile);
            }
            board.appendChild(rowDiv);
        }
    })

    resetBoardButton.addEventListener('click', resetBoard)

    function resetBoard() {
        board.innerHTML = '';
        board.style.display = 'block';
    }
})


class GameManager {
    constructor () {
        this.timer = 0;
        this.gameBoard = new GameBoard();
        this.running = false;
        this.startTime = null;
    }

    run () {
        this.running = true;
        this.startTime = new Date().getTime();
        while(this.running) {

        }
    }
}

class GameBoard {
    constructor() {
        this.rows = ROWS;
        this.columns = COLUMNS;
        this.board = [];

        for (let row = 0; row < this.rows; row++) {
            const currentRow = [];
            this.board.push(currentRow);
            for (let col = 0; col < this.columns; col++) {
                currentRow.push(0)
            }
        }
    }
}

class Tile {

}

class Gamepiece {

}

class Quad {

}