class Tubes extends Entity {
    constructor(params) {
        super(params)
        this._SPEEDGAME = params.speedGame
        this._framesTop = params.framesTop
        this._framesBottom = params.framesBottom

        this._w = 480

        this._index = 0
        this._index2 = 0

        this._bottomTall1 = 0
        this._bottomTall2 = 0
    
        this._topTall1 = 0
        this._topTall2 = 0

        this._minTallBottomTube = 280
        this._maxTallBottomTube = 160

        this._spaceTube = 400 + params.spaceTube


        this._dist = 80
    }

    createTube(tubeX, tall) {
        return (
            this._spriteSheet.then(sprites => {
                this._drawEngine.drawImage({
                    spriteSheet: sprites,
                    image: this._framesBottom[this._frameIdx],
                    x: tubeX + this._w,
                    y: tall,
                    width: this.width,
                    height: this.height
                })

                this._drawEngine.drawImage({
                    spriteSheet: sprites,
                    image: this._framesTop[this._frameIdx],
                    x: tubeX + this._w,
                    y: tall - this._spaceTube,
                    width: this.width,
                    height: this.height
                })
            })
        )
    }    

    update() {
        
    }
    
    draw() {
        this._index += 0.3
        this.tubeX = -((this._index * this._SPEEDGAME) % this._w) - 48

        if(this.tubeX > -49) {
            this._bottomTall1 = this._minTallBottomTube + Math.random() * (this._maxTallBottomTube + 1 - this._minTallBottomTube)
        }

        this.createTube(this.tubeX, this._bottomTall1)

        if(this._index > this._dist) {
            this._index2 += 0.3
            let newTubeX = -((this._index2 * this._SPEEDGAME) % this._w) - 48
            if(newTubeX > -49) {
                this._bottomTall2 = this._minTallBottomTube + Math.random() * (this._maxTallBottomTube + 1 - this._minTallBottomTube)
            }
        this.createTube(newTubeX, this._bottomTall2)
        }              
    }
}
