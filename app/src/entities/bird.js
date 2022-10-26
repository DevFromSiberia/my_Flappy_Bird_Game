class Bird extends Entity {
    constructor(params) {
        super(params)
        this._flapSpeed = params.flapSpeed
        this._physicsEngine = params.physicsEngine
        this.falling = true
    }

    update(delta) {
        super.update(delta)

        

        this._physicsEngine.update(this, delta)

        this.#collide()
    }
    
    #collide() {
        const botTubeX1 = this._canvas._tubes.x
        const botTubeY1 = this._canvas._tubes.y

        const topTubeX1 = this._canvas._tubes.x
        const topTubeY1 = this._canvas._tubes.y - this._canvas._tubes._spaceTube

        const botTubeX2 = this._canvas._tubes.x + this._canvas._tubes.width
        const botTubeY2 = this._canvas._tubes.y

        const topTubeX2 = this._canvas._tubes.x + this._canvas._tubes.width
        const topTubeY2 = this._canvas._tubes.y - this._canvas._tubes._spaceTube

        const topBirdX = this._canvas._bird.x + this._canvas._bird.width
        const topBirdY = this._canvas._bird.y

        const botBirdX = this._canvas._bird.x + this._canvas._bird.width
        const botBirdY = this._canvas._bird.y + this._canvas._bird.height

        const condition = (this.y + this.height >= this._canvas.height)

        
        if(this.y < 0) {
            this.y = 0
        }

        if(condition) {
            this._canvas.gameOver()
        }

        

    }

    flap() {
        this.speed = -this._flapSpeed
    }
}