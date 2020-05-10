function draw2(){
    const canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    canvas.style.backgroundColor = "black";

//- white squares
    ctx.fillStyle = "white";
    ctx.fillRect(5, 5, 90, 50);

    ctx.fillStyle = "white";
    ctx.fillRect(105, 5, 85, 50);
    
    ctx.fillStyle = "white";
    ctx.fillRect(5, 65, 185, 130);
    
    ctx.fillStyle = "white";
    ctx.fillRect(5, 205, 185, 50);

    ctx.fillStyle = "white";
    ctx.fillRect(200, 265, 100, 130);

    ctx.fillStyle = "white";
    ctx.fillRect(310, 265, 195, 130);

    ctx.fillStyle = "white";
    ctx.fillRect(515, 265, 80, 50);

//- colored squares
    ctx.fillStyle = "red";
    ctx.fillRect(200, 5, 395, 250);
    
    ctx.fillStyle = "yellow";
    ctx.fillRect(5, 265, 185, 130);

    ctx.fillStyle = "blue";
    ctx.fillRect(515, 325, 80, 70);
}
draw2();