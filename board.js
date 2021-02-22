const util = new Util();

var internalBoard = util.buildGrid(8, 8, 0);

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

function createBoard() {
    for (let file = 0; file < 8; file ++) {
        for(let rank = 0; rank < 8; rank ++) {
            var isLightSquare = (file + rank) % 2 != 0;

            var squareColour = (isLightSquare) ? darkColour : lightColour ;
            var pos = [file * 50, rank * 50];

            ctx.fillStyle = squareColour;
            ctx.fillRect(pos[0], pos[1], 50, 50);
        }
    }
}