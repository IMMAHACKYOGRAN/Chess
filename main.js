const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;
const width = canvas.width,
    height = canvas.height;

var lightColour = '#6592CF'; //'#ebecd0';
var darkColour = '#243D83'; //'#779556';
const piecesurl = new Image();
piecesurl.src = './Textures/Pieces.png';

function update() {
    
    requestAnimationFrame(update);
}

function render() {
    for (let file = 0; file < 8; file ++) {
        for(let rank = 0; rank < 8; rank ++) {
            var value = internalBoard[file][rank];
            ctx.drawImage(piecesurl);
        }
    }
}

createBoard();
setup();
render();
update();
