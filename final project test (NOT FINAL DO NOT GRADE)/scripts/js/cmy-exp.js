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












//-----------------------MAGENTA CIRCLE----------
function drawM(){
    const canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    canvas.style.backgroundColor = 'white';
    
    
    ctx.beginPath();
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2.75;
    
    const radius = 110;
    
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgb(255, 0, 255, 0.5)";
    ctx.fill();
    ctx.strokeStyle = "rgb(255, 0, 255, 0.5)"
    ctx.stroke();
}
drawM();
  

//-----------------------YELLOW CIRCLE----------
function drawY(){
    const canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    
    
    
    ctx.beginPath();
    const centerX = canvas.width / 1.55;
    const centerY = canvas.height / 1.6;
    
    const radius = 110;
    
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgb(255, 255, 0, 0.5)";
    ctx.fill();
    ctx.strokeStyle = "rgb(255, 255, 0, 0.5)"
    ctx.stroke();
}
drawY();


//-----------------------CYAN CIRCLE----------
function drawC(){
    const canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    
    
    
    ctx.beginPath();
    const centerX = canvas.width / 2.35;
    const centerY = canvas.height / 1.45;
    
    const radius = 110;
    
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgb(0, 255, 255, 0.5)";
    ctx.fill();
    ctx.strokeStyle = "rgb(0, 255, 255, 0.5)"
    ctx.stroke();
}
drawC();


















//-----------------------MAGENTA CIRCLE----------
function drawM(){
    const canvas = document.getElementById("canvas");
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
  

//-----------------------YELLOW CIRCLE----------
function drawY(){
    const canvas = document.getElementById("canvas");
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


//-----------------------CYAN CIRCLE----------
function drawC(){
    const canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    
    
    
    ctx.beginPath();
    const radius = 110;
//------ROW 1
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.arc(450, 0, radius, 0, Math.PI * 2);
//------ROW 2
    ctx.arc(150, 200, radius, 0, Math.PI * 2);
    ctx.arc(600, 200, radius, 0, Math.PI * 2);
//------ROW 3
    ctx.arc(300, 400, radius, 0, Math.PI * 2);

    ctx.fillStyle = "rgb(0, 255, 255, 0.5)";
    ctx.fill();
}
drawC();