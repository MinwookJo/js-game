// 패드 움직임 이상함
import Ball from './ball';
import Paddle from './paddle';
import { rightPressed, leftPressed } from './userEventHanlder';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const keyColor = '#e6524b';

const ball = new Ball(ctx, 10, keyColor, canvas.width/2, canvas.height/2, 3);
const paddle = new Paddle(ctx, 75, 10, keyColor, canvas.width/2 , canvas.height - 15);

// main thread
function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.bound(canvas.width, canvas.height, paddle.x, paddle.width, paddle.height);
    ball.move();

    paddle.move(leftPressed, rightPressed, 0, canvas.width-paddle.width);

    ball.drawBall();
    paddle.drawPaddle();
}

// main thread
setInterval(main, 10);