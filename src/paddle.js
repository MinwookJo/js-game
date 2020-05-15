export default class paddle {
    constructor(ctx, width, height, color, initX, initY) {
        this.ctx = ctx; // required

        this.color = color;
        this.width = width;
        this.height = height;
        this.x = initX || 10;
        this.y = initY || 10;

        this.rightPressed = false;
        this.leftPressed = false;
    }

    drawPaddle() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    move(leftPressed, rightPressed, leftRange, rightRange) {
        if(leftPressed && this.x > leftRange) {
            this.x -= 7;
        }
        else if(rightPressed && this.x < rightRange) {
            this.x += 7;
        }
    }
}