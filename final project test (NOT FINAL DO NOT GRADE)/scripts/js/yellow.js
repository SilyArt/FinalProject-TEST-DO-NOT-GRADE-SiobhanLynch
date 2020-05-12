//-----------------------YELLOW CIRCLE----------
function drawY(){
    const canvas = document.getElementById("canvas3");
    let ctx = canvas.getContext("2d");
    
    
    
    ctx.beginPath();
    const radius = 110;
//------ROW 1
    ctx.arc(150, 0, radius, 0, Math.PI * 2);
    ctx.arc(600, 0, radius, 0, Math.PI * 2);
//------ROW 2
    ctx.arc(300, 200, radius, 0, Math.PI * 2);
//------ROW 3
    ctx.arc(0, 400, radius, 0, Math.PI * 2);
    ctx.arc(450, 400, radius, 0, Math.PI * 2);


    ctx.fillStyle = "rgb(255, 255, 0, 0.5)";
    ctx.fill();
}
drawY();