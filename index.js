const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const map = new Image();
map.src = "./images/little-town.png";
const player = new Image();
player.src = "./images/playerDown.png";
const w = canvas.width = 1024;
const h = canvas.height = 576;
let mapWidth = -200;
let mapHeight = -630;


ctx.fillStyle = "white";
ctx.fillRect(0,0, w, h);

class Sprite {
    constructor(position, map){
        this.position = position
        this.map = map
    }
    draw(){
        ctx.drawImage(map, -200, -630)
    }
}

const background = new Sprite({
    position: {
        x: -200,
        y: -630
    },
    map: map
})

const keys = {
    w: {
        pressed: false
    },
    s: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    }

}

function animate(){
    window.requestAnimationFrame(animate)
    background.draw()
    ctx.drawImage(
        player,
        0,
        0,
        player.width/6,
        player.height,
        w/2 - player.width/8, 
        h/2 + player.height,
        player.width/6,
        player.height
    )
    if (keys.w.pressed){
        background.position.y = background.position.y + 3
    }
    
}
animate()

window.addEventListener('keydown', (e) => {
    switch (e.key){
        case 'w':
            keys.w.pressed = true
            break;
        case 'a':
            keys.a.pressed = true
            break;
        case 's':
            keys.s.pressed = true
            break;
        case 'd':
            keys.d.pressed = true
            break;
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.key){
        case 'w':
            keys.w.pressed = false
            break;
        case 'a':
            keys.a.pressed = false
            break;
        case 's':
            keys.s.pressed = false
            break;
        case 'd':
            keys.d.pressed = false
            break;
    }
})