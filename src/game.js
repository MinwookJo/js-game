// 패드 움직임 이상함
import Ball from './ball';
import Paddle from './paddle';
import { initEvent, rightPressed, leftPressed } from './userEventHanlder';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const keyColor = '#e6524b';

const ball = new Ball(ctx, canvas, 10, keyColor, canvas.width/2, canvas.height/2, 3);
const paddle = new Paddle(ctx, canvas, 75, 10, keyColor, canvas.width/2 , canvas.height - 15);

// main thread
function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.drawBall();
    ball.move();
    
    if(leftPressed && paddle.x > 0) {
        paddle.x -= 7;
    }
    else if(rightPressed && paddle.x < canvas.width-paddle.width) {
        paddle.x += 7;
    }
    paddle.drawPaddle();
}

// main thread
setInterval(main, 10);