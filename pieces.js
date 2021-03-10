class Piece {
    constructor(x, y, isWhite, imageLocation) {
        this.pixelPos = util.createVector(x * tileSize, y * tileSize);
        this.matrixPos = util.createVector(x, y);
        this.movingThisPiece = false;
        this.isDed = false;
        this.white = isWhite;
        this.imageLocation = imageLocation;
    }

    draw(mousex, mousey) {
        if(this.movingThisPiece) {
            ctx.drawImage(pieceUrl, (this.imageLocation - 1) * tileSize, 0, tileSize, tileSize, mousex - tileSize / 2, mousey - tileSize / 2, tileSize, tileSize);
        } else {
            ctx.drawImage(pieceUrl, (this.imageLocation - 1) * tileSize, 0, tileSize, tileSize, this.pixelPos.x, this.pixelPos.y, tileSize, tileSize);
        }
    }

    move(x, y) {
        this.matrixPos = util.createVector(x, y);
        this.pixelPos = util.createVector(x * tileSize, y * tileSize);
    }

    canMove(x, y) {

    }

    withinBounds(x, y) {
        if (x >= 0 && y >= 0 && x < 8 && y < 8) {
            return true;
        }
        return false;
      }

      moveThroughPieces(x, y, board) {
        var stepDirectionX = x - this.matrixPos.x;
        if (stepDirectionX > 0) {
          stepDirectionX = 1;
        } else if (stepDirectionX < 0) {
          stepDirectionX = -1;
        }
        var stepDirectionY = y - this.matrixPos.y;
        if (stepDirectionY > 0) {
          stepDirectionY = 1;
        } else if (stepDirectionY < 0) {
          stepDirectionY = -1;
        }
        var tempPos = util.createVector(this.matrixPos.x, this.matrixPos.y);
        tempPos.x += stepDirectionX;
        tempPos.y += stepDirectionY;
        while (tempPos.x != x || tempPos.y != y) {
    
          if (board.getPieceAt(tempPos.x, tempPos.y) != null) {
            return true;
          }
          tempPos.x += stepDirectionX;
          tempPos.y += stepDirectionY;
        }
    
        return false;
      }
}

class King extends Piece {
    constructor(x, y, isWhite, imageLocation) {
        super(x, y, isWhite, imageLocation);
    }

    canMove(x, y, board) {
        if(!this.withinBounds(x, y)) {
            return false;
        }
        if(Math.abs(x - this.matrixPos.x) <= 1 && Math.abs(y - this.matrixPos.y) <= 1) {
            return true;
        }
        return false;
      }
}

class Queen extends Piece {
    constructor(x, y, isWhite, imageLocation) {
        super(x, y, isWhite, imageLocation);
    }

    canMove(x, y, board) {
        if (!this.withinBounds(x, y)) {
            return false;
        }
        //strait
        if (x == this.matrixPos.x || y == this.matrixPos.y) {   
            if (this.moveThroughPieces(x, y, board)) {
                return false;
              } 
            return true;
        }
        //diagonal
        if (Math.abs(x - this.matrixPos.x) == Math.abs(y - this.matrixPos.y)) { 
            if (this.moveThroughPieces(x, y, board)) {
                return false;
              }   
            return true;
        }

        return false;
    }
}

class Bishop extends Piece {
    constructor(x, y, isWhite, imageLocation) {
        super(x, y, isWhite, imageLocation);
    }

    canMove(x, y, board) {
        if (!this.withinBounds(x, y)) {
            return false;
        }
        //diagonal
        if (Math.abs(x - this.matrixPos.x) == Math.abs(y - this.matrixPos.y)) {
            if (this.moveThroughPieces(x, y, board)) {
                return false;
            } 
            return true;
        }

        return false;
    }
}

class Knight extends Piece {
    constructor(x, y, isWhite, imageLocation) {
        super(x, y, isWhite, imageLocation);
    }
    canMove(x, y, board) {
        if (!this.withinBounds(x, y)) {
            return false;
        }
        // if (this.attackingAllies(x, y, board)) {
        //     return false;
        // }
    
    
        if ((Math.abs(x - this.matrixPos.x) == 2 && Math.abs(y - this.matrixPos.y) == 1) || (Math.abs(x - this.matrixPos.x) == 1 && Math.abs(y - this.matrixPos.y) == 2)) {
            return true;
        }
        return false;
    }
}

class Rook extends Piece {
    constructor(x, y, isWhite, imageLocation) {
        super(x, y, isWhite, imageLocation);
    }

    canMove(x, y, board) {
        if (!this.withinBounds(x, y)) {
            return false;
        }
        //strait
        if (x == this.matrixPos.x || y == this.matrixPos.y) {    
            if (this.moveThroughPieces(x, y, board)) {
                return false;
            } 
            return true;
        }
        return false;
    }
}

class Pawn extends Piece {
    constructor(x, y, isWhite, imageLocation) {
        super(x, y, isWhite, imageLocation);
        this.firstTurn = true;
    }

    canMove(x, y, board) {
        if (!this.withinBounds(x, y)) {
          return false;
        }
        var attacking = board.isPieceAt(x, y);
        if (attacking) {
            if (Math.abs(x - this.matrixPos.x) == Math.abs(y - this.matrixPos.y) && ((this.white && (y - this.matrixPos.y) == -1) || (!this.white && (y - this.matrixPos.y) == 1))) {
                this.firstTurn = false;
                return true;
            }
            return false;
        }

        if (x != this.matrixPos.x) {
            return false;
        }

        if ((this.white && y - this.matrixPos.y == -1) || (!this.white && y - this.matrixPos.y == 1)) {
            this.firstTurn = false;
            return true;
        }

        if (this.firstTurn && ((this.white && y - this.matrixPos.y == -2) || (!this.white && y - this.matrixPos.y == 2))) {
            if (this.moveThroughPieces(x, y, board)) {
                return false;
            }
            this.firstTurn = false;
            return true;
        }
        return false;
    }    
}