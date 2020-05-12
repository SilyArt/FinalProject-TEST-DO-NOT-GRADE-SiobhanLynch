//-----------------------MAGENTA CIRCLE----------
function drawM(){
    const canvas = document.getElementById("canvas3");
    let ctx = canvas.getContext("2d");
    canvas.style.backgroundColor = 'white';
    
    
    ctx.beginPath();
    const radius = 110;
//------ROW 1
    ctx.arc(300, 0, radius, 0, Math.PI * 2);
//------ROW 2
    ctx.arc(0, 200, radius, 0, Math.PI * 2);
    ctx.arc(450, 200, radius, 0, Math.PI * 2);
//------ROW 3 
    ctx.arc(150, 400, radius, 0, Math.PI * 2);
    ctx.arc(600, 400, radius, 0, Math.PI * 2);
    
    
    
    ctx.fillStyle = "rgb(255, 0, 255, 0.5)";
    ctx.fill();
}
drawM();