const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 560;
const width = canvas.width,
    height = canvas.height;

let selected;
var lightColour = '#eae9d4'; //'#ebecd0';
var darkColour = '#436588'; //'#779556';
const piecesurl = new Image();
piecesurl.src = './Textures/Pieces.png';
piecesurl.addEventListener('load', () => {
    render();
});

ctx.fillStyle = '#33322e';
ctx.fillRect(0, 0, width, height);


function render() {
    for (let rank = 0; rank < 8; rank ++) {
        for(let file = 0; file < 8; file ++) {
            var value = internalBoard[file][rank] - 1;
            ctx.drawImage(piecesurl, value * 70, 0, 70, 70, rank * 70, file * 70, 70, 70);
        }
    }
}

function update() {
    render();
    drawCoords();
}

canvas.addEventListener('click', function (e) {
    const mouse = {
        pos: { x: Math.floor((e.x) / 70), y: Math.floor((e.y) / 70) }
    }

    if(internalBoard[mouse.pos.y][mouse.pos.x] > 0) {
        createBoard();
        ctx.fillStyle = '#00a5ff7f';
        ctx.fillRect(mouse.pos.x * 70, mouse.pos.y * 70, mouse.pos.x + 70 - mouse.pos.x, mouse.pos.y + 70 - mouse.pos.y);
        update();
        selected = [mouse.pos.x][mouse.pos.y]
    }
});

createBoard();
setup();
update();