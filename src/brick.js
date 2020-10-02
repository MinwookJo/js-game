export default class brick {
    /**
     * 
     * @param {CanvasRenderingContext2D} ctx 2d 컨텍스트 객체
     * @param {String} color // 색깔
     * @param {Number} height // 높이
     * @param {Number} row // 열
     * @param {Number} col // 행
     * @param {NUmber} width // 넓이
     * @param {NUmber} height // 높이
     * @param {NUmber} padding // 벽돌간 간격
     * @param {NUmber} offsetTop // 첫번 째 벽돌 top offset
     * @param {NUmber} offsetLeft // 첫번 째 벽돌 left offset
     */
    constructor(ctx, color, row, col, width, height, padding, offsetTop, offsetLeft) {
        this.ctx = ctx;
        this.color = color;
        this.row = row;
        this.col = col;
        this.width = width;
        this.height = height;
        this.padding = padding;
        this.offsetTop = offsetTop;
        this.offsetLeft = offsetLeft;
        this.bricks = [];

        this.createBrkicksArray(); // 벽돌 배열 생성
    }

    // brick array 생성, draw 전에 해줘야함
    createBrkicksArray() {
        for(let c =0; c<this.col; c++) {
            this.bricks[c] = [];
            for(let r=0; r<this.row; r++) {
                this.bricks[c][r] = { x: 0, y:0, active: true }
            }
        }
    }

    // 벽돌에 충돌 감지
    collisionDetection(ballX, ballY, callBack) {
        for(let c=0; c<this.col; c++) {
            for(let r=0; r<this.row; r++) {
                const brickItem = this.bricks[c][r];
                const brickX = brickItem.x;
                const brickY = brickItem.y;
                /**
                 * 1. 공의 x좌표가 벽의 시작넓이 부터 끝넓이 사이
                 * 2. 공의 y좌표가 벽의 시작높이 부터 끝높이 사이
                 * 3. 벽돌의 상태가 active 상태
                 */
                if(ballX > brickX && ballX < brickX + this.width) {
                    if(ballY > brickY && ballY < brickY + this.height) {
                        if(this.bricks[c][r].active) {
                            this.bricks[c][r].active = false;
                            callBack();
                        }
                    }
                }
            }
        }
    }

    drawSingleBrick(x, y) {
        this.ctx.beginPath();
        this.ctx.rect(x, y, this.width, this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawBricks() {
        for(let c=0; c<this.col; c++) {
            for(let r=0; r<this.row; r++) {
                this.bricks[c][r].x = (c * (this.width+this.padding) + this.offsetLeft);
                this.bricks[c][r].y = (r * (this.height+this.padding) + this.offsetTop);
                const brickX = this.bricks[c][r].x;
                const brickY = this.bricks[c][r].y;

                if(this.bricks[c][r].active) {
                    this.drawSingleBrick(brickX, brickY);
                }
            }
        }
    }
}