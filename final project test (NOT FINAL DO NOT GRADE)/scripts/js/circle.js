function draw1(){
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.style.backgroundColor = 'black';


ctx.beginPath();
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

const radius = 170;

ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
ctx.fillStyle = "lightgreen";
ctx.fill();
ctx.stroke();
}
draw1();


function draw2(){
  const canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  canvas.style.backgroundColor = "lightpink"
  
  ctx.beginPath();
  const centerX = canvas.width/2;
  const centerY = canvas.height/2;
  //top point
  ctx.moveTo(centerX + 200, centerY - 90);
  //right point
  ctx.lineTo(centerX + 210, centerY - 75);
  //left point
  ctx.lineTo(centerX - 125, centerY - 65);
  ctx.strokeStyle = "grey";
  ctx.lineWidth = "5";
  ctx.stroke();
}
draw2()