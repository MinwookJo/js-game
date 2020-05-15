export default class paddle {
    constructor(ctx, canvas, width, height, color, initX, initY) {
        this.ctx = ctx; // required
        this.canvas = canvas; // required

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
}