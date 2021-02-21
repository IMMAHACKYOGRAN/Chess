class Util {  
    loadImage (url) {
        return new Promise(resolve => {
            const img = new Image();
            img.addEventListener('load', () => {
                resolve(img);
            });
            img.src = url;
        });
    }

    draw (url, x, y) {
        this.loadImage(url)
        .then(img => {
            ctx.drawImage(img, x, y);
        });
    }

    buidGrid (columns, rows) {
        return new Array(columns).fill(null)
          .map(() => new Array(rows).fill(0));
    }
    
}
