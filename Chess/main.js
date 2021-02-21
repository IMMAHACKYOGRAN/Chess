const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;
var width = canvas.width,
    height = canvas.height

var util = new Util();

var lightColour = '#6592CF'; //'#ebecd0';
var darkColour = '#243D83'; //'#779556';

function update() {
    render();
    requestAnimationFrame(update);
}

function createBoard() {
    for (let file = 0; file < 8; file ++) {
        for(let rank = 0; rank < 8; rank ++) {
            var isLightSquare = (file + rank) % 2 != 0;

            var squareColour = (isLightSquare) ? lightColour : darkColour;
            var pos = [file * 50, rank * 50];

            ctx.fillStyle = squareColour;
            ctx.fillRect(pos[0], pos[1], 50, 50);
        }
    }
}

function render() {
    
}

createBoard();
update();
