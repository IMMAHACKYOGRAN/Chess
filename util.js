const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 560;
const width = canvas.width,
    height = canvas.height;

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
