function drawM(){
    const canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    canvas.style.backgroundColor = 'white';
    
    
    ctx.beginPath();
    const centerX = canvas.width / 1;
    const centerY = canvas.height / 2;
    
    const radius = 120;
    
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "magenta";
    ctx.fill();
    ctx.stroke();
    }
    drawM();
    
function drawY(){
    const canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    
    
    
    ctx.beginPath();
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 1;
    
    const radius = 70;
    
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();
    }
    drawY();

function drawC(){
    const canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    
    
    
    ctx.beginPath();
    const centerX = canvas.width / 2.5;
    const centerY = canvas.height / 2;
    
    const radius = 50;
    
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "cyan";
    ctx.fill();
    ctx.stroke();
    }
    drawC();