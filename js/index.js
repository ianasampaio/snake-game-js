const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let speed = 7;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;
let headX = 10;
let headY = 10;

let appleX = 5;
let appleY = 5;

let xVelocity = 0;
let yVelocity = 0;

function drawGame(){
    clearScreen();
    changeSnakePosition();
    drawApple();
    drawSnake();
    setTimeout(drawGame, 1000/ speed);
}

function clearScreen(){
    ctx.fillStyle = "#9ee493";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function drawSnake(){
    ctx.fillStyle = "#42273b";
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

function changeSnakePosition(){
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}

function drawApple(){
    
}

document.body.addEventListener('keydown', keyDown);

function keyDown(event){
    key = event.key;

    if(key == "ArrowUp"){
        if(yVelocity == 1)
            return;
        yVelocity = -1;
        xVelocity = 0;
    }

    if(key == "ArrowDown"){
        if(yVelocity == -1)
            return;
        yVelocity = 1;
        xVelocity = 0;
    }

    if(key == "ArrowLeft"){
        if(xVelocity == 1)
            return;
        yVelocity = 0;
        xVelocity = -1;
    }

    if(key == "ArrowRight"){
        if(xVelocity == -1)
            return;
        yVelocity = 0;
        xVelocity = 1;
    }
}

drawGame();