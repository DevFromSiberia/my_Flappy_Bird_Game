class GameOverDesk extends Entity {
    constructor(params) {
        super(params)
        this._scoresX = params.scoresX
        this._scoresY = params.scoresY

        this._recordX = params.recordX
        this._recordY = params.recordY

        this._medalX = params.medalX
        this._medalY = params.medalY
        this._medalW = params.medalW
        this._medalH = params.medalH
        this._medalFrames = params.medalFrames
    }

    #drawScores() {
        this._spriteSheet.then(sprites => {
            this._drawEngine.drawText({
                x: this._scoresX,
                y: this._scoresY,
                text: this._canvas._score
            })

            this._drawEngine.drawText({
                x: this._recordX,
                y: this._recordY,
                text: this._canvas._record
            })
        })

        this.#drawMedal()
    }

    #drawMedal() {
        this._spriteSheet.then(sprites => {
            this._drawEngine.drawImage({
                spriteSheet: sprites,
                image: this._medalFrames[0],
                x: this._medalX,
                y: this._medalY,
                width: this._medalW,
                height: this._medalH
            })
        })
    }

    draw() {
        super.draw()
        this.#drawScores()
    }
}