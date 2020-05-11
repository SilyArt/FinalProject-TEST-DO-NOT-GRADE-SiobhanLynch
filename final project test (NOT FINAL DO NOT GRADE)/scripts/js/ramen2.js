
function draw2(){
    const canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d"); 
    canvas.style.backgroundColor = 'white';
    
if (canvas.getContext) {
    ctx = canvas.getContext('2d');
    } else {
        const para = document.querySelector('.unsupported');
        para.textContent = 'Browser unsupported for HTML5 Canvas';
    }

    //////////- background rectangle
    ctx.fillStyle = "red";
    ctx.fillRect(150, 0, 300, 400);






//---------------------RAMON NOODLES--------------------//


//-------FIRST bunch---//
    ctx.beginPath();
    const radius = 55;
    ctx.arc(350, 400, radius, 0, Math.PI * 2);
    ctx.arc(300, 250, radius, 65, Math.PI * 2);
    ctx.arc(350, 400, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = '5';
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
   



















    
    ///////////- coverup rectangle
    ctx.fillStyle = "salmon";
    ctx.fillRect(0, 0, 150, 400);
    
    ctx.fillStyle = "salmon";
    ctx.fillRect(450, 0, 150, 400);
}
draw2();