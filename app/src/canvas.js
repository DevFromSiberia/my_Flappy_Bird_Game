class Canvas {
    constructor() {
        this._config = new Config()

        this._canvas = document.getElementById(this._config.canvas.canvasId)
        this._canvas.width = this._config.canvas.width
        this._canvas.height = this._config.canvas.height

        this.height = this._config.canvas.height
        this.width = this._config.canvas.width
		this._score = 0
        this._drawEngine = new CanvasDrawEngine({canvas: this._canvas, score: this._score})
        this._physicsEngine = new PhysicsEngine({gravity: this._config.gravity})
        this._resourceLoader = new ResourceLoader()

        this._inputHandler = new MouseInputHandler({
            left: () => {
                this._bird.flap()
            }
        })
    }

    async prepare() {
        this._spriteSheet = this._resourceLoader.load({
            type: RESOURCE_TYPE.IMAGE,
            src: this._config.spritesheet.src,
            width: this._config.spritesheet.width,
            height: this._config.spritesheet.height,
        })
    }

    reset() {
        this._score = 0
        
        this._bg = new Bg({
            x: this._config.bg.x,
            y: this._config.bg.y,
            width: this._config.bg.width,
            height: this._config.bg.height,
            frames: this._config.bg.frames,
            spriteSheet: this._spriteSheet,
            drawEngine: this._drawEngine,
            canvas: this
        })
        this._bird = new Bird({
            x: this._config.bird.x,
            y: this._config.bird.y,
            width: this._config.bird.width,
            height: this._config.bird.height,
            frames: this._config.bird.frames,
            spriteSheet: this._spriteSheet,
            flapSpeed: this._config.bird.flapSpeed,
            physicsEngine:this._physicsEngine,
            drawEngine: this._drawEngine,
            canvas: this
        })
        this._ground = new Ground({
            x: this._config.ground.x,
            y: this._config.ground.y,
            width: this._config.ground.width,
            height: this._config.ground.height,
            frames: this._config.ground.frames,
            spriteSheet: this._spriteSheet,
            speedGame: this._config.speedGame,
            drawEngine: this._drawEngine,
            canvas: this
        })

        this._tubes = new Tubes({
            x: this._config.tubes.x,
            y: this._config.tubes.y,
            width: this._config.tubes.width,
            height: this._config.tubes.height,
            frames: this._config.tubes.frames,
            spriteSheet: this._spriteSheet,
            speedGame: this._config.speedGame,
            drawEngine: this._drawEngine,
            canvas: this,
            spaceTube: this._config.spaceTube
        })
    }

    update(delta) {
        this._bird.update(delta)
        this._tubes.update(delta)
    }

    draw() {
        this._bg.draw()
        this._bird.draw()
        this._ground.draw()
        this._tubes.draw()
    }

    _loop() {
        const now = Date.now()
        const delta =  now - this._lastUpdate

        this.update(delta / 1000)
        this.updateCounter()
        if(this._playing) {
            this._drawEngine.clear()
            this.draw()
            
            this._lastUpdate = now

            requestAnimationFrame(this._loop.bind(this))
        }
        
    }

    createCounter() {
        this._counter = document.getElementById('counter')
        this._counter.innerText = `score: ${this._score}`
    }
    
    updateCounter() {
        const range = 1
        const conditionForIncrease = 
        (this._bird.x + (this._bird.width / 2) - range) <= this._tubes.x + (this._tubes.width / 2) 
        && 
        (this._bird.x + (this._bird.width / 2)) >= this._tubes.x + (this._tubes.width / 2);
        
        if(conditionForIncrease) {
            ++this._score
            this._counter.innerText = `score: ${this._score}`
        }
    }

    start() {
        this._playing = true
        this._inputHandler.subscribe()
        this._lastUpdate = Date.now()
        this.reset()
        this.createCounter()
        this._loop()
    }

    gameOver() {
        this._playing = false
    }
}