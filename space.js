//board
let tileSizes = 32;
let rows =16;
let columns = 16;

let board;
let boardWidth = tileSizes * columns // 32 * 16
let boardHeight = tileSizes * rows // 32 * 16
let context;

//ship

let shipWidth = tileSizes*2
let shipHeight = tileSizes*2
let shipX = tileSizes * columns/2 - tileSizes
let shipY = tileSizes * rows - tileSizes


let ship = {
    
    x: shipX,
    y: shipY,
    width: shipWidth,
    height: shipHeight

}


window.onload = function(){

    board = document.getElementById("board");
    board.width = boardWidth;
    board.Height = boardHeight;
    context = board.getContext("2d");// usado para desenhar a tela

    //draw ship
    context.fillStyle="green";
    context.FillRect(ship.x,ship.y,ship.width,ship.height)

}



