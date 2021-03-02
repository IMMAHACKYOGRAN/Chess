class Piece {
    constructor(pixelx, pixely, isWhite, imageLocation) {
        this.pixelx = pixelx;
        this.pixely = pixely;
        this.isDed = false;
        this.white = isWhite;
        this.imageLocation = imageLocation;
    }

    draw() {}
    move() {}
}

class King extends Piece {
    constructor(pixelx, pixely, isWhite, imageLocation) {
        super(pixelx, pixely, isWhite, imageLocation);
    }

    draw() {
        ctx.drawImage(pieceUrl, (this.imageLocation - 1) * 70, 0, 70, 70, this.pixelx, this.pixely, 70, 70);
    }
}