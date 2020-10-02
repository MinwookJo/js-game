export default class paddle {
    /**
     * 
     * @param {CanvasRenderingContext2D} ctx 2d 컨텍스트 객체
     * @param {Number} width // 넓이
     * @param {Number} height // 높이
     * @param {String} color // 색깔
     * @param {Number} initX // 초기화 x좌표
     * @param {NUmber} initY // 초기화 y좌표
     */
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

    /**
     * @param {*} leftPressed 왼쪽 키보드 press 여부 
     * @param {*} rightPressed 오른쪽 키보드 press 여부
     * @param {*} leftRange 패들이 움직일 수 있는 왼쪽 범위
     * @param {*} rightRange 패들이 움직일 수 있는 오른쪽 범위
     */
    move(leftPressed, rightPressed, leftRange, rightRange) {
        if(leftPressed && this.x > leftRange) {
            this.x -= 7;
        }
        else if(rightPressed && this.x < rightRange) {
            this.x += 7;
        }
    }
}