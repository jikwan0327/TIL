const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
//2D형태로 지정?
//캔버스에 그림을 그릴 때 사용
canvas.width = 800;
canvas.height = 800;

//ctx.fillRect(50, 50, 100, 200);
//fillRect(x, y, w, h);
// (50,50)이 시작 점이며 가로 100 세로 200으로 사각형 생성

//사각형
// ctx.moveTo(50, 50); //50,50만큼 이동
// ctx.lineTo(150, 50); //오른쪽으로 100만큼 이동
// ctx.lineTo(150, 150); //밑으로 100만큼 이동
// ctx.lineTo(50, 150); //왼쪽으로 100만큼 이동
// ctx.lineTo(50, 50); //위로 100만큼 이동
//ctx.stroke(); //선만 긋는다
//ctx.fill(); //채운다

//집 그리기
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// //ctx.lineWidth = 2; //줄의 굵기 설정
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();
// ctx.stroke();

//사람 그리기
// ctx.fillRect(210 - 40, 200 - 20, 15, 100);
// ctx.fillRect(350 - 40, 200 - 20, 15, 100);
// ctx.fillRect(260 - 40, 200 - 20, 60, 200);

// ctx.arc(250, 100, 50, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle = "white";
// ctx.arc(260 + 10, 80, 8, Math.PI, 2 * Math.PI);
// ctx.arc(220 + 10, 80, 8, Math.PI, 2 * Math.PI);
// ctx.fill();

//마우스를 따라 선그리기
// ctx.lineWidth = 2;
// const colors = ["#ff3838", "#ffb8b8", "#c56cf0", "#ff9f1a", "#fff200", "#32ff7e", "#7efff5", "#18dcff", "#7d5fff"];
// function onClick(event) {
//     ctx.beginPath();
//     ctx.moveTo(0, 0);
//     const color = colors[Math.floor(Math.random() * colors.length)];
//     ctx.strokeStyle = color;
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
// }

// canvas.addEventListener("mousemove", onClick);

//
let isPainting = false;
function onMove(event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown() {
    isPainting = true;
}

function onMouseUp() {
    isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseleave", cancelPainting);
