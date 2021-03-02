const util = new Util();

let internalBoard = util.buildGrid(8, 8, 0);

const startPosition = [
    [10, 11, 12, 9, 8, 12, 11, 10],
    [7, 7, 7, 7, 7, 7, 7, 7],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [4, 5, 6, 3, 2, 6, 5, 4]
];

function setup() {
    internalBoard = startPosition;
}

function drawCoords() {
    ctx.font = "15px Verdana";
    var isLightSquare = true;
    const rankLets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (let rank = 0; rank < 8; rank++) {
        isLightSquare = !isLightSquare;
        var numColour = (isLightSquare) ? darkColour : lightColour;
            
        ctx.fillStyle = numColour;
        ctx.fillText(rankLets[rank], rank * 70 + 58, 556);
    }
    
    var count = 8
    for (let file = 0; file < 8; file++) {
        isLightSquare = !isLightSquare;
        var numColour = (isLightSquare) ? lightColour : darkColour  ;
            
        ctx.fillStyle = numColour;
        ctx.fillText(count, 4, file * 70 + 15);
        count--;
    }
}

function createBoard() {
    for (let file = 0; file < 8; file ++) {
        for(let rank = 0; rank < 8; rank ++) {
            var isLightSquare = (file + rank) % 2 != 0;

            var squareColour = (isLightSquare) ? darkColour : lightColour;
            var pos = [file * 70, rank * 70];

            ctx.fillStyle = squareColour;
            ctx.fillRect(pos[0], pos[1], 70, 70);
        }
    }
    update();
}