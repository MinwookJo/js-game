export default class ball {
    constructor(ctx, radius, color, initX, initY, speed) {
        this.ctx = ctx; // required

        this.radius = radius;
        this.color = color;
        this.x = initX || 10;
        this.y = initY || 10;
        this.movementX = speed || 2;
        this.movementY = speed || 2;
    };

    // 현재 x, y 값으로 공생성
    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    };

    bound(canvasWidth, canvasHeight, paddleX, paddleWidth, paddleHeight) {
        // 벽 튕기기 (캔버스 크기를 공위치가 넘거나 0을 공위치가 넘으면 이동방향 반대로)
        if(this.x + this.movementX > canvasWidth-this.radius || this.x + this.movementX < 0 + this.radius) {
            this.movementX = -this.movementX;
        }

        if(this.y + this.movementY < 0 + this.radius) {
            this.movementY = -this.movementY;
        } else if(this.y > canvasHeight) { // 캔버스 밖으로 빠지면 사라짐
            this.x = -50;
            this.y = -50;
        }        
        else if(this.y  + this.movementY + paddleHeight > canvasHeight-this.radius) {
            if(this.x > paddleX && this.x < paddleX + paddleWidth) {
                this.movementY = -this.movementY;
            }
        }
    }
    
    move() {
        this.x += this.movementX;
        this.y += this.movementY;
    }
}
