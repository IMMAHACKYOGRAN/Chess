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
        //White
        this.whitePieces.push(new Rook(0, 7, true, 4));
        this.whitePieces.push(new Rook(7, 7, true, 4));
        this.whitePieces.push(new Knight(1, 7, true, 5));
        this.whitePieces.push(new Knight(6, 7, true, 5));
        this.whitePieces.push(new Bishop(2, 7, true, 6))
        this.whitePieces.push(new Bishop(5, 7, true, 6));
        this.whitePieces.push(new Queen(3, 7, true, 3));
        this.whitePieces.push(new King(4, 7, true, 2));

        this.whitePieces.push(new Pawn(0, 6, true, 1));
        this.whitePieces.push(new Pawn(1, 6, true, 1));
        this.whitePieces.push(new Pawn(2, 6, true, 1));
        this.whitePieces.push(new Pawn(3, 6, true, 1));
        this.whitePieces.push(new Pawn(4, 6, true, 1));
        this.whitePieces.push(new Pawn(5, 6, true, 1));
        this.whitePieces.push(new Pawn(6, 6, true, 1));
        this.whitePieces.push(new Pawn(7, 6, true, 1));

        //Black
        this.blackPieces.push(new Rook(0, 0, false, 10));
        this.blackPieces.push(new Rook(7, 0, false, 10));
        this.blackPieces.push(new Knight(1, 0, false, 11));
        this.blackPieces.push(new Knight(6, 0, false, 11));
        this.blackPieces.push(new Bishop(2, 0, false, 12))
        this.blackPieces.push(new Bishop(5, 0, false, 12));
        this.blackPieces.push(new Queen(3, 0, false, 9));
        this.blackPieces.push(new King(4, 0, false, 8));

        this.blackPieces.push(new Pawn(0, 1, false, 7));
        this.blackPieces.push(new Pawn(1, 1, false, 7));
        this.blackPieces.push(new Pawn(2, 1, false, 7));
        this.blackPieces.push(new Pawn(3, 1, false, 7));
        this.blackPieces.push(new Pawn(4, 1, false, 7));
        this.blackPieces.push(new Pawn(5, 1, false, 7));
        this.blackPieces.push(new Pawn(6, 1, false, 7));
        this.blackPieces.push(new Pawn(7, 1, false, 7));
    }

    render() {
        for(let i = 0; i < this.whitePieces.length; i++) {
            this.whitePieces[i].draw(pixelMouse.pos.x, pixelMouse.pos.y);
        }

        for(let i = 0; i < this.blackPieces.length; i++) {
            this.blackPieces[i].draw(pixelMouse.pos.x, pixelMouse.pos.y);
        }
    }

    isPieceAt(x, y) {
        for(let i = 0; i < this.whitePieces.length; i++) {
            if(this.whitePieces[i].matrixPos.x == x && this.whitePieces[i].matrixPos.y == y) {
               return true;
            }
        }

        for(let i = 0; i < this.blackPieces.length; i++) {
            if(this.blackPieces[i].matrixPos.x == x && this.blackPieces[i].matrixPos.y == y) {
               return true;
            }
        }
        return false;
    } 

    getPieceAt(x, y) {
        for (var i = 0; i < this.whitePieces.length; i++) {
          if (!this.whitePieces[i].taken && this.whitePieces[i].matrixPos.x ==
            x && this.whitePieces[i].matrixPos.y == y) {
            return this.whitePieces[i];
          }
        }
        for (var i = 0; i < this.blackPieces.length; i++) {
          if (!this.blackPieces[i].taken && this.blackPieces[i].matrixPos.x ==
            x && this.blackPieces[i].matrixPos.y == y) {
            return this.blackPieces[i];
          }
        }
        return null;
      }
}