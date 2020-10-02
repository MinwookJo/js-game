// 패드 움직임 이상함
import Ball from './ball';
import Paddle from './paddle';
import Bricks from './brick';
import { rightPressed, leftPressed } from './userEventHanlder';

const canvas = document.getElementById("canvas"); // get canvas element from index.html
const ctx = canvas.getContext("2d"); // get 2d context
const keyColor = '#e6524b'; // theme color

const ball = new Ball(ctx, 10, keyColor, canvas.width/2, canvas.height/2, 3); // construct ball class
const paddle = new Paddle(ctx, 75, 10, keyColor, canvas.width/2 , canvas.height - 15); // construct paddle class
const brick = new Bricks(ctx, keyColor, 3, 5, 75, 20, 10, 30, 30); // construct brick class

// main thread
function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.bound(canvas.width, canvas.height, paddle.x, paddle.width, paddle.height);
    ball.move();

    paddle.move(leftPressed, rightPressed, 0, canvas.width-paddle.width);
    brick.drawBricks();
    ball.drawBall();
    paddle.drawPaddle();
    brick.collisionDetection(ball.x, ball.y, () => {
        ball.movementY = -ball.movementY;
    });
}

// main thread
main();
setInterval(main, 10);
