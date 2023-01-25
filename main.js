const ROWS = 20;
const COLUMNS = 20;


// button setup
const startGameButton = document.getElementById('btn-start-game')
const generateBoardButton = document.querySelector('#generate-board');
const altGenerateBoardButton = document.querySelector('#alt-generate-board');
const resetBoardButton = document.querySelector('#reset-board');

// scene set up
const sceneTitle = document.getElementById('scene-title');
const sceneMain = document.getElementById('scene-main');
const board = document.querySelector('#board');

startGameButton.addEventListener('click', ()=>{
    sceneTitle.classList.add('hidden');
    // sceneMain.classList.add('show');
    sceneTitle.addEventListener('transitionend', ()=> {sceneTitle.style.display = 'none'});
    sceneTitle.addEventListener('transitionend', startGame);
})

generateBoardButton.addEventListener('click', generateBoardV1);

function generateBoardV1() {
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
}

altGenerateBoardButton.addEventListener('click', generateBoardV2);

function generateBoardV2() {
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
            tile.setAttribute('row', row);
            tile.setAttribute('column', column);
            rowDiv.appendChild(tile);
        }
        board.appendChild(rowDiv);
    }
}

resetBoardButton.addEventListener('click', resetBoard)

function resetBoard() {
    board.innerHTML = '';
    board.style.display = 'block';
}



class GameManager {
    constructor () {
        this.timer = 0;
        this.gameBoard = new GameBoard(ROWS, COLUMNS);
        this.running = false;

    }

    run () {
        this.running = true;
        this.gameBoard.randomSetup();
        this.gameBoard.drawBoard();
    }
}

class GameBoard {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.board = [];
        this.terrain = {
            grass: 0,
            water: 1,
            rock: 2,
        }
    }

    randomSetup() {
        for (let row = 0; row < this.rows; row++) {
            const currentRow = [];
            this.board.push(currentRow);
            for (let column = 0; column < this.columns; column++) {
                const rng = Math.random();
                let type = this.terrain.grass;
                if (rng > .95) type = this.terrain.rock;
                else if (rng > .8) type = this.terrain.water;
                currentRow.push(new Tile(row, column, type))
            }
        }
    }

    drawBoard() {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                const gameTile = this.board[row][column]
                const boardTile = document.querySelector(`[row='${row}'][column='${column}']`)
                switch(gameTile.type) {
                    case this.terrain.rock:
                        boardTile.classList.add('rock');
                        break;
                    case this.terrain.water:
                        boardTile.classList.add('water');
                        break;
                    case this.terrain.grass:
                        boardTile.classList.add('grass');
                        break;
                    default:
                        break;
                }
            }
        }
    }
}

class Tile {
    constructor(row, column, type) {
        this.row = row;
        this.column = column;
        this.type = type;
    }

}

class Gamepiece {

}

class Quad {

}


function startGame() {
    generateBoardV2();

    const gm = new GameManager();
    gm.run();
}