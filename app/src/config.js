class Config {
    gravity = 150
    speedGame = 10

    canvas = {
        canvasId: 'canvas',
        width: 480,
        height: 320,
    }

    spritesheet = {
        width: 606,
        height: 428,
        src: 'app/assets/spritesheet.png'
    }

    ground = {
        x: 0,
        y: 300,
        width: this.canvas.width,
        height: 110,
        frames: [{
            x: 276,
            y: 2,
            w: 224,
            h: 110,
        }]
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
}