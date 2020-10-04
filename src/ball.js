export default class ball {
    /**
     * 
     * @param {CanvasRenderingContext2D} ctx 2d 컨텍스트 객체
     * @param {Number} radius // 둥글기
     * @param {String} color // 색깔
     * @param {Number} initX // 초기화 x좌표
     * @param {Number} initY // 초기화 y좌표
     * @param {NUmber} speed // 공 이동속도
     */
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
        this.ctx.beginPath(); // context begin
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2); // 원 그리기
        this.ctx.fillStyle = this.color;
        this.ctx.fill(); // 색 채우기
        this.ctx.closePath(); // context close
    };

    bound(canvasWidth, canvasHeight, paddleX, paddleWidth, paddleHeight) {
        // 벽 튕기기 (캔버스 크기를 공위치가 넘거나 0을 공위치가 넘으면 이동방향 반대로)
        if(this.x + this.movementX > canvasWidth-this.radius || this.x + this.movementX < 0 + this.radius) { // x좌표 양끝에 닿으면 반대로 이동
            this.movementX = -this.movementX;
        }

        if(this.y + this.movementY < 0 + this.radius) { // 상단 y좌표 끝에 닿으면 반대로 이동
            this.movementY = -this.movementY;
        } else if(this.y > canvasHeight) { // 하단 y좌표 캔버스 밖으로 빠지면 사라짐
            this.x = -50;
            this.y = -50;
        } else if(this.y + this.movementY + this.radius > canvasHeight - paddleHeight) { // paddle에 y좌표와 맞고,
            if(this.x > paddleX && this.x < paddleX + paddleWidth) { // paddle에 x좌표에 맞으면
                this.movementY = -this.movementY; // 반대로이동
            }
        }
    }
    
    move() {
        this.x += this.movementX;
        this.y += this.movementY;
    }
}
