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

    buildGrid (columns, rows, populate) {
        return new Array(columns).fill(null)
          .map(() => new Array(rows).fill(populate));
    }
    
}
