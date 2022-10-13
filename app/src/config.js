class Config {
    gravity = 150

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

    bird = {
        x: 50,
        y: 100,
        width: 34,
        height: 26,

        flapSpeed: 150,
        
        frames: [
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