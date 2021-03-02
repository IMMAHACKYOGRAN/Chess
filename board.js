class Board {
    constructor() {
        this.whitePieces = [];
        this.blackPieces = [];
        
        this.lightColour = '#eae9d4'; //'#ebecd0';
        this.darkColour = '#436588'; //'#779556';
    }

    drawBoard() {
        for (let file = 0; file < 8; file ++) {
            for(let rank = 0; rank < 8; rank ++) {
                var isLightSquare = (file + rank) % 2 != 0;
    
                var squareColour = (isLightSquare) ? this.darkColour : this.lightColour;
                var pos = [file * 70, rank * 70];
    
                ctx.fillStyle = squareColour;
                ctx.fillRect(pos[0], pos[1], 70, 70);
            }
        }
    }

    setupPieces() {
        this.whitePieces.push(new King(70, 70, true, 2));
    }

    render() {
        for(let i = 0; i < this.whitePieces.length; i++) {
            this.whitePieces[i].draw();
        }
    }
}