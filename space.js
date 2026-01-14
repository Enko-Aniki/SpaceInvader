//board
let tileSize = 32; // Corrigido: tileSizes para tileSize (singular)
let rows = 16;
let columns = 16;

let board;
let boardWidth = tileSize * columns; // 32 * 16
let boardHeight = tileSize * rows; // 32 * 16
let context;

//ship
let shipWidth = tileSize * 2;
let shipHeight = tileSize;
let shipX = boardWidth / 2 - shipWidth / 2;
let shipY = boardHeight - shipHeight - 10;

let ship = {
    x: shipX,
    y: shipY,
    width: shipWidth,
    height: shipHeight
}

let ShipImg;
let ShipVelo = tileSize;

//aliens
let aliensArray = [];
let alienWitdh = tileSize * 2;
let alienHeight = tileSize;
let alienX = tileSize;
let alienY = tileSize;
let alienImage;

let alienRows = 2
let alienCollumns = 3
let alienCount = 0 // numero de aliens
let alienVeloX = 1;
let alienVoloY = 2;




window.onload = function () {
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight; // Corrigido: Height para height (minúsculo)
    context = board.getContext("2d");


    //context.fillStyle="green"
    //context.fillRect(ship.x,ship.y,ship.width,ship.height)

    //load image
    ShipImg = new Image();
    ShipImg.src = "./ship.png";
    ShipImg.onload = function () {
        context.drawImage(ShipImg, ship.x, ship.y, ship.width, ship.height)


        alienImage = new Image();
        alienImage.src = "./alien.png"
        createAlien();


    }
    requestAnimationFrame(update)
    document.addEventListener("keydown", moveShip)
}



function update() {

    requestAnimationFrame(update)

    context.clearRect(0, 0, board.width, board.height)

    //ship 
    context.drawImage(ShipImg, ship.x, ship.y, ship.width, ship.height)

    //alien

    for (let i = 0; i < aliensArray.length; i++) {
        let alien = aliensArray[i]
        if (alien.alive) {
            alien.x += alienVeloX;


            // quando alien chega no fim da tela

            if (alien.x + alien.width >= board.width || alien.x <= 0) {

                alienVeloX *= -1
                for (let j = 0; j < aliensArray.length; j++) {
                    aliensArray[j].y += alienHeight

                }

            }
            context.drawImage(alienImage, alien.x, alien.y, alien.width, alien.height);
        }
    }

}


function moveShip(e) {
    if (e.code == "ArrowLeft" && ship.x - ShipVelo >= 0) {
        ship.x -= ShipVelo;
    }
    else if (e.code == "ArrowRight" && ship.x + ShipVelo + ship.width <= board.width) {

        ship.x += ShipVelo

    }


}



function createAlien() {
    for (let c = 0; c < alienCollumns; c++) {
        for (let r = 0; r < alienRows; r++) {
            let alien = {
                img: alienImage,
                x: alienX + c * alienWitdh,
                y: alienY + r * alienHeight,
                width: alienWitdh,
                height: alienHeight,
                alive: true

            }

            aliensArray.push(alien)
        }
    }

    alienCount = aliensArray.length

}