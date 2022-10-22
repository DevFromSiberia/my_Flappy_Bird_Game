class Tubes extends Entity {
    constructor(params) {
        super(params)
        this._SPEEDGAME = params.speedGame
        this._w = 480

        this._index = 0
        this._index2 = 0
        this._index3 = 0

        this._bottomTall1 = 100
        this._bottomTall2 = 100
        this._bottomTall3 = 100

        this._dist = 52
    }

    createTube(tubeX, tall) { 
        return (
            this._spriteSheet.then(sprites => {
                this._drawEngine.drawImage({
                    spriteSheet: sprites,
                    image: this._frames[this._frameIdx],
                    x: tubeX + this._w,
                    y: tall,
                    width: this.width,
                    height: this.height
                })
            })
        )
    }    
    
    draw() {
        this._index += 0.3
        this.tubeX = -((this._index * this._SPEEDGAME) % this._w) - 48
        if(this.tubeX > -49) {
            this._bottomTall1 = 150 + Math.random() * (250 + 1 - 150)
        } 
        this.createTube(this.tubeX, this._bottomTall1)

        if(this._index > this._dist) {
            this._index2 += 0.3
            let newTubeX = -((this._index2 * this._SPEEDGAME) % this._w) - 48
            if(newTubeX > -49) {
                this._bottomTall2 = 150 + Math.random() * (250 + 1 - 150)
            }
            this.createTube(newTubeX, this._bottomTall2)
        }

        if(this._index2 > this._dist) {
            this._index3 += 0.3
            let newTubeX = -((this._index3 * this._SPEEDGAME) % this._w) - 48
            if(newTubeX > -49) {
                this._bottomTall3 = 150 + Math.random() * (250 + 1 - 150)
            }
            this.createTube(newTubeX, this._bottomTall3)
        }       
    }
}
