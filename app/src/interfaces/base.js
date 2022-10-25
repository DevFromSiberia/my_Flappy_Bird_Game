class BaseInterface {
    constructor({x,y,text, spriteSheet, canvas}) {
        this.x = x
        this.y = y
        this.text = text

        this._spriteSheet = spriteSheet
        this._canvas = canvas
    }

    draw() {
    
    }
}

