const board = new Board();
const pieceUrl = new Image();
pieceUrl.src = './Textures/Pieces.png';

ctx.fillStyle = '#33322e';
ctx.fillRect(0, 0, width, height);

function setup () {
    board.drawBoard();
    board.setupPieces();
    console.log(board.whitePieces);
    board.render();
}

canvas.addEventListener('click', function (e) {
    const mouse = {
        pos: { x: Math.floor((e.x) / 70), y: Math.floor((e.y) / 70) }
    }
        board.drawBoard();
        ctx.fillStyle = '#00a5ff7f';
        ctx.fillRect(mouse.pos.x * 70, mouse.pos.y * 70, mouse.pos.x + 70 - mouse.pos.x, mouse.pos.y + 70 - mouse.pos.y);
        board.render();
});

pieceUrl.addEventListener('load', () => {setup()});
