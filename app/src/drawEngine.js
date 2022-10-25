class DrawEngine {
    drawImage( {spriteSheet, image, x, y, width, height} ) {}

    clear() {}
}

class CanvasDrawEngine extends DrawEngine {
    constructor({canvas, score}) {
        super()
        this._canvas = canvas
        this._score = score
        this._context = canvas.getContext('2d')
    }

    drawImage( {spriteSheet, image, x, y, width, height} ) {
        super.drawImage({spriteSheet, image, x, y, width, height})
		this._context.drawImage(spriteSheet, image.x, image.y, image.w, image.h, x, y, width, height)
        this._context.font = "30px Arial";
        this._context.fillText(this._score, 20, 50)
    }

    clear() {
        super.clear()
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
    }
}