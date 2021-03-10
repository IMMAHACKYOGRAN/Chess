const tileSize = 70;
const board = new Board();
const pieceUrl = new Image();
pieceUrl.src = './Textures/Pieces.png';

let moving = false, movingPiece;
let mouse = {pos:{x:0,y:0}}, pixelMouse = {pos:{x:0,y:0}};

function setup () {
    board.drawBoard();
    board.setupPieces();
    update();
}

function update() {
    board.drawBoard();
    board.render();
    requestAnimationFrame(update);
}

canvas.addEventListener('mousedown', function (e) {
    if(!moving) {
        movingPiece = board.getPieceAt(mouse.pos.x, mouse.pos.y);
        if(movingPiece != null) {
            movingPiece.movingThisPiece = true;
        } else {
            return;
        }
    } else {
        if(movingPiece.canMove(mouse.pos.x, mouse.pos.y, board)) {
            movingPiece.move(mouse.pos.x, mouse.pos.y);
            movingPiece.movingThisPiece = false;
        } else {
            return;
        }
    }
    moving = !moving;
});

canvas.addEventListener('mousemove', function(e) {
    mouse = {pos: { x: Math.floor((e.x) / tileSize), y: Math.floor((e.y) / tileSize) }}
    pixelMouse = {pos:{x:e.x,y:e.y}}
});

pieceUrl.addEventListener('load', () => {setup()});
