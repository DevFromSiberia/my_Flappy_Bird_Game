class Config {
    gravity = 300
    speedGame = 3.5 // min speed 3 , max speed 5

    canvas = {
        canvasId: 'canvas',
        width: 320,
        height: 320,
    }

    spritesheet = {
        width: 606,
        height: 428,
        src: 'app/assets/spritesheet.png'
    }

    bg = {
        x: 0,
        y: 0,
        width: this.canvas.width,
        height: this.canvas.height,
        frames: [
            {
                x: 0,
                y: 0,
                w: 276,
                h: 228,
            }
        ]
    }

    ground = {
        x: 0,
        y: 300,
        width: this.canvas.width,
        height: 110,
        frames: [
            {
                x: 276,
                y: 2,
                w: 224,
                h: 110,
            }
        ]
    }

    bird = {
        x: 50,
        y: 100,
        width: 34,
        height: 26,

        flapSpeed: 150,
        
        frames:  [
            {
                x: 276,
                y: 112,
                w: 34,
                h: 26,
            },
            {
                x: 276,
                y: 139,
                w: 34,
                h: 26,
            },
            {
                x: 276,
                y: 164,
                w: 34,
                h: 26,
            },
            {
                x: 276,
                y: 139,
                w: 34,
                h: 26,
            },
        ]
    }

    spaceTube = this.bird.height * 4

    tubes = {
        x: this.canvas.width,
        y: 0,
        width: 68,
        height: 400,
        frames: [
            {
                x: 503,
                y: 1,
                w: 52,
                h: 400,
            },
            {
                x: 556,
                y: 1,
                w: 52,
                h: 400,
            }
        ],
    }

    interfaces = {
        gameOverWords: {
            x: this.canvas.width / 2 - 189 / 2,
            y: this.canvas.height / 2 - 39 / 0.5,
            width: 189,
            height: 39,
            frames: [
                {
                    x: 193,
                    y: 228,
                    w: 189,
                    h: 39,
                }
            ],
        },
        gameOverDesk: {
            x: this.canvas.width / 2 - 227 / 2,
            y: this.canvas.height / 2 - 117 / 4,
            width: 227,
            height: 117,
            frames: [
                {
                    x: 174,
                    y: 272,
                    w: 227,
                    h: 117,
                }
            ],
            scoresX: 236,
            scoresY: 180,

            medals: {
                x: 72,
                y: 171,
                w: 45,
                h: 44,
                frames: [
                    {
                        x: 312,
                        y: 112,
                        w: 45,
                        h: 44,
                    },
                    {
                        x: 312,
                        y: 158,
                        w: 45,
                        h: 44,
                    },
                    {
                        x: 359,
                        y: 112,
                        w: 45,
                        h: 44,
                    },
                    {
                        x: 359,
                        y: 158,
                        w: 45,
                        h: 44,
                    },
                ]
            }
        }
    }
}