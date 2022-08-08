"use strict";

const startingModal = document.querySelector('.modalStart');
const playerVsPlayerBtn = document.querySelector('.friendBtn');
const playerVsComputerBtn = document.querySelector('.compBtn');

const body = document.querySelector('.body');

const board = document.querySelector('.board');

const reset = document.querySelector('.return_btn');

let xo_turn_img = document.querySelector('.xo_turn_img');

const x_score_div = document.querySelector('.x_score');
const ties_score_div = document.querySelector('.ties_score');
const o_score_div = document.querySelector('.o_score');

const modalWinWindow = document.querySelector('.modalWindow');
const winImg = document.querySelector('.xoWinImgDiv');
const winText = document.querySelector('.whoWinText');
const quitBtn = document.querySelector('.quitBtn');
const nextRoundBtn = document.querySelector('.nextRoundBtn');

const headWinText = document.querySelector('.headWinText');

let x_score = 0;
let ties_score = 0;
let o_score = 0;

const x = 'img/cross_sign_blue.png';
const o = 'img/orange_circle.png';
const x_white = 'img/cross_sign_white.png';
const o_white = 'img/circle_white.png';
const x_darkblue = 'img/dark_blue_cross.png';
const o_darkblue = 'img/dark_blue_circle.png';

let tile_usedbyX = {
    tile_1: false,
    tile_2: false,
    tile_3: false,
    tile_4: false,
    tile_5: false,
    tile_6: false,
    tile_7: false,
    tile_8: false,
    tile_9: false
}

let tile_usedbyO = {
    tile_1: false,
    tile_2: false,
    tile_3: false,
    tile_4: false,
    tile_5: false,
    tile_6: false,
    tile_7: false,
    tile_8: false,
    tile_9: false
}

let tiles = {
    tile_1: document.querySelector('.tile1'),
    tile_2: document.querySelector('.tile2'),
    tile_3: document.querySelector('.tile3'),
    tile_4: document.querySelector('.tile4'),
    tile_5: document.querySelector('.tile5'),
    tile_6: document.querySelector('.tile6'),
    tile_7: document.querySelector('.tile7'),
    tile_8: document.querySelector('.tile8'),
    tile_9: document.querySelector('.tile9') 
}

let xTurn = true;
let oTurn = false;

let roundWon = false;

let winScreen = false;

let startScreen = false;

function playerVsPlayerBtnPressed() {
    board.style.opacity = 1;
    startingModal.style.display = 'none';

    startScreen = false;
}

function playerVsComputerBtnPressed() {
    board.style.opacity = 1;
    startingModal.style.display = 'none';

    startScreen = false;


}

function checkTie() {
    if(document.querySelector('.xImgWin')) {
        document.querySelector('.xImgWin').style.display = 'none';
        document.querySelector('.xImgWin').remove();
        console.log('x_removed');
    }
    if(document.querySelector('.oImgWin')) {
        document.querySelector('.oImgWin').style.display = 'none';
        document.querySelector('.oImgWin').remove();
        console.log('o_removed');
    }

    let counter = 0;

    for (let key in tile_usedbyX) {
        if (tile_usedbyX[key] == true) {
            counter ++;
        }
    }

    for (let key in tile_usedbyO) {
        if (tile_usedbyO[key] == true) {
            counter ++;
        }
    }

    if (counter == 9) {
        winText.innerHTML = 'TIE';

        winText.style.color = 'White';
        winText.style.margin = 'auto';

        headWinText.style.display = 'none';

        modalWinWindow.style.display="block";
        board.style.opacity = "0.3";
        ties_score++;
    }

    console.log(counter);
}

function resetBtnPressed() {
    document.location.reload(true);
}

function nextRoundBtnPressed() {
    winScreen = false;
    roundWon = false;
    console.log(roundWon);

    board.style.opacity = "1";
    modalWinWindow.style.display="none";

    for (const key in tiles) {
        tiles[key].style.background = "#1F3540";

        //removing previous imgs
        if(tiles[key].querySelector('.xImg')){
            tiles[key].removeChild(tiles[key].querySelector('.xImg'));
        }
        if (tiles[key].querySelector('.oImg')){
            tiles[key].removeChild(tiles[key].querySelector('.oImg'));
        }

        if(tiles[key].querySelector('.xImgWon')) {
            tiles[key].removeChild(tiles[key].querySelector('.xImgWon'));
        }
        else if(tiles[key].querySelector('.oImgWon')) {
            tiles[key].removeChild(tiles[key].querySelector('.oImgWon'));
        }
    }

    roundWon == false;

    tile_usedbyX = {
        tile_1: false,
        tile_2: false,
        tile_3: false,
        tile_4: false,
        tile_5: false,
        tile_6: false,
        tile_7: false,
        tile_8: false,
        tile_9: false
    }

    tile_usedbyO = {
        tile_1: false,
        tile_2: false,
        tile_3: false,
        tile_4: false,
        tile_5: false,
        tile_6: false,
        tile_7: false,
        tile_8: false,
        tile_9: false
    }
}

function displayModal(whoWon) {
    winScreen = true;

    if(whoWon == 'x') {
        if(document.querySelector('.xImgWin')) {
            document.querySelector('.xImgWin').remove();
            console.log('x_removed');
        }
        if(document.querySelector('.oImgWin')) {
            document.querySelector('.oImgWin').remove();
            console.log('o_removed');
        }

        headWinText.style.display = 'block';

        let xImg = document.createElement('img');
        xImg.setAttribute("src", x);
        xImg.setAttribute("height", "60");
        xImg.setAttribute("width", "60");
        xImg.setAttribute("alt", "X");
        xImg.setAttribute("class", "xImgWin");
        winImg.appendChild(xImg);

        winText.innerHTML = 'Takes the round';
        winText.style.color = '#31C4BE';
        winText.style.margin = 'auto';

        modalWinWindow.style.display="block";
        board.style.opacity = "0.3";
    } else if (whoWon == 'o') {
        if(document.querySelector('.xImgWin')) {
            document.querySelector('.xImgWin').remove();
            console.log('x_removed');
        }
        if(document.querySelector('.oImgWin')) {
            document.querySelector('.oImgWin').remove();
            console.log('o_removed');
        }

        headWinText.style.display = 'block';

        let oImg = document.createElement('img');
        oImg.setAttribute("src", o);
        oImg.setAttribute("height", "60");
        oImg.setAttribute("width", "60");
        oImg.setAttribute("alt", "O");
        oImg.setAttribute("class", "oImgWin");
        winImg.appendChild(oImg);

        winText.innerHTML = 'Takes the round';
        winText.style.color = '#F2B237';
        winText.style.margin = 'auto';

        modalWinWindow.style.display="block";
        board.style.opacity = "0.3";
    }
}

function isTileFree(tile) {
    if(tile.querySelectorAll('img').length > 0){
        return false;
    }
    else {
        return true;
    }
}

function changeWinColors(XO, tile1, tile2, tile3) {
    if(XO == 'x') {
        //remove old imgs
        let oldImg1 = tile1.querySelector('.xImg');
        let oldImg2 = tile2.querySelector('.xImg');
        let oldImg3 = tile3.querySelector('.xImg');

        tile1.removeChild(oldImg1);
        tile2.removeChild(oldImg2);
        tile3.removeChild(oldImg3);

        let xImgs = [];

        for (let i = 0; i < 3 ; i ++) {
            xImgs[i] = document.createElement('img');
            xImgs[i].setAttribute("src", x_darkblue);
            xImgs[i].setAttribute("height", "80");
            xImgs[i].setAttribute("width", "80");
            xImgs[i].setAttribute("alt", "X");
            xImgs[i].setAttribute("class", "xImgWon");
        }
        
        tile1.appendChild(xImgs[0]);
        tile2.appendChild(xImgs[1]);
        tile3.appendChild(xImgs[2]);

        tile1.style.background = '#31C4BE';
        tile2.style.background = '#31C4BE';
        tile3.style.background = '#31C4BE';
    }
    else if(XO == 'o') {
        //remove old imgs
        let oldImg1 = tile1.querySelector('.oImg');
        let oldImg2 = tile2.querySelector('.oImg');
        let oldImg3 = tile3.querySelector('.oImg');
        tile1.removeChild(oldImg1);
        tile2.removeChild(oldImg2);
        tile3.removeChild(oldImg3);

        let oImgs = [];

        for (let i = 0; i < 3; i++) {
            oImgs[i] = document.createElement('img');
            oImgs[i].setAttribute("src", o_darkblue);
            oImgs[i].setAttribute("height", "80");
            oImgs[i].setAttribute("width", "80");
            oImgs[i].setAttribute("alt", "O");
            oImgs[i].setAttribute("class", "oImgWon");
        }

        tile1.style.background = '#F2B237';
        tile2.style.background = '#F2B237';
        tile3.style.background = '#F2B237';
        tile1.appendChild(oImgs[0]);
        tile2.appendChild(oImgs[1]);
        tile3.appendChild(oImgs[2]);

        console.log('O WON');
    }

    displayModal(XO);
}

function winCondition() {
    console.log(tile_usedbyX.tile_1);
    checkTie();

    //horizontal
    if(tile_usedbyX.tile_1 == true && tile_usedbyX.tile_2 == true && tile_usedbyX.tile_3 == true /* && roundWon == false */) {
        x_score ++;
        roundWon = true;
        changeWinColors('x', tiles.tile_1, tiles.tile_2, tiles.tile_3);
    }
    if(tile_usedbyX.tile_4 == true && tile_usedbyX.tile_5 == true && tile_usedbyX.tile_6 == true /* && roundWon == false */) {
        x_score ++;
        roundWon = true;
        changeWinColors('x', tiles.tile_4, tiles.tile_5, tiles.tile_6);
    }
    if(tile_usedbyX.tile_7 == true && tile_usedbyX.tile_8 == true && tile_usedbyX.tile_9 == true /* && roundWon == false */) {
        x_score ++;
        roundWon = true;
        changeWinColors('x', tiles.tile_7, tiles.tile_8, tiles.tile_9);
    }

    if(tile_usedbyO.tile_1 == true && tile_usedbyO.tile_2 == true && tile_usedbyO.tile_3 == true /* && roundWon == false */) {
        o_score ++;
        roundWon = true;
        changeWinColors('o', tiles.tile_1, tiles.tile_2, tiles.tile_3);
    }
    if(tile_usedbyO.tile_4 == true && tile_usedbyO.tile_5 == true && tile_usedbyO.tile_6 == true /* && roundWon == false */) {
        o_score ++;
        roundWon = true;
        changeWinColors('o', tiles.tile_4, tiles.tile_5, tiles.tile_6);
    }
    if(tile_usedbyO.tile_7 == true && tile_usedbyO.tile_8 == true && tile_usedbyO.tile_9 == true /* && roundWon == false */) {
        o_score ++;
        roundWon = true;
        changeWinColors('o', tiles.tile_7, tiles.tile_8, tiles.tile_9);
    }

    //vertical
    if(tile_usedbyX.tile_1 == true && tile_usedbyX.tile_4 == true &&  tile_usedbyX.tile_7 == true /* && roundWon == false */) {
        x_score ++;
        roundWon = true;
        changeWinColors('x', tiles.tile_1, tiles.tile_4, tiles.tile_7);
    }
    if(tile_usedbyX.tile_2 == true && tile_usedbyX.tile_5 == true && tile_usedbyX.tile_8 == true /* && roundWon == false */) {
        x_score ++;
        roundWon = true;
        changeWinColors('x', tiles.tile_2, tiles.tile_5, tiles.tile_8);
    }
    if(tile_usedbyX.tile_3 == true && tile_usedbyX.tile_6 == true && tile_usedbyX.tile_9 == true /* && roundWon == false */) {
        x_score ++;
        roundWon = true;
        changeWinColors('x', tiles.tile_3, tiles.tile_6, tiles.tile_9);
    }

    if( tile_usedbyO.tile_1 == true && tile_usedbyO.tile_4 == true && tile_usedbyO.tile_7 == true /* && roundWon == false */) {
        o_score ++;
        roundWon = true;
        changeWinColors('o', tiles.tile_1, tiles.tile_4, tiles.tile_7);
    }
    if(tile_usedbyO.tile_2 == true && tile_usedbyO.tile_5 == true && tile_usedbyO.tile_8 == true /* && roundWon == false */) {
        o_score ++;
        roundWon = true;
        changeWinColors('o', tiles.tile_2, tiles.tile_5, tiles.tile_8);
    }
    if(tile_usedbyO.tile_3 == true && tile_usedbyO.tile_6 == true && tile_usedbyO.tile_9 == true /* && roundWon == false */) {
        o_score ++;
        roundWon = true;
        changeWinColors('o', tiles.tile_3, tiles.tile_6, tiles.tile_9);
    }

    //diagonal
    if(tile_usedbyX.tile_1 == true && tile_usedbyX.tile_5 == true && tile_usedbyX.tile_9 == true /* && roundWon == false */) {
        x_score ++;
        roundWon = true;
        changeWinColors('x', tiles.tile_1, tiles.tile_5, tiles.tile_9);
    }
    if(tile_usedbyX.tile_3 == true && tile_usedbyX.tile_5 == true && tile_usedbyX.tile_7 == true /* && roundWon == false */) {
        x_score ++;
        roundWon = true;
        changeWinColors('x', tiles.tile_3, tiles.tile_5, tiles.tile_7);
    }

    if(tile_usedbyO.tile_1 == true && tile_usedbyO.tile_5 == true && tile_usedbyO.tile_9 == true /* && roundWon == false */) {
        o_score ++;
        roundWon = true;
        changeWinColors('o', tiles.tile_1, tiles.tile_5, tiles.tile_9);
    }
    if(tile_usedbyO.tile_3 == true && tile_usedbyO.tile_5 == true && tile_usedbyO.tile_7 == true /* && roundWon == false */) {
        o_score ++;
        roundWon = true;
        changeWinColors('o', tiles.tile_3, tiles.tile_5, tiles.tile_7);
    }


    changeScore();
}

function changeTurnImg() {
    if(xTurn == true) {
        xo_turn_img.src = x_white;
    }
    else if(oTurn == true) {
        xo_turn_img.src = o_white;
    }
}

function changeScore() {
    x_score_div.textContent = x_score;
    o_score_div.textContent = o_score;
    ties_score_div.textContent = ties_score;
}

window.onload = () => {
    board.style.opacity = 0.3;
    startingModal.style.display = 'block';

    startScreen = true;
}

function checkIfMovePossible(tile) {
    if(xTurn == true && isTileFree(tile) == true && winScreen == false && startScreen == false) {
        let xImg = document.createElement('img');
        xImg.setAttribute("src", x);
        xImg.setAttribute("height", "70");
        xImg.setAttribute("width", "70");
        xImg.setAttribute("alt", "X");
        xImg.setAttribute("class", "xImg");
        tile.appendChild(xImg);

        //if tile is empty, let the player put x there
        for(const key in tiles) {
            if(tile == tiles[key] && tile_usedbyX[key] == false) {
                tile_usedbyX[key] = true;
            }
        }

        winCondition();
        
        xTurn = false;
        oTurn = true;

        changeTurnImg();
    }
    else if(oTurn == true && isTileFree(tile) == true && winScreen == false && startScreen == false) {
        let oImg = document.createElement('img');
        oImg.setAttribute("src", o);
        oImg.setAttribute("height", "70");
        oImg.setAttribute("width", "70");
        oImg.setAttribute("alt", "O");
        oImg.setAttribute("class", "oImg");
        tile.appendChild(oImg);

        //if tile is empty, let the player put o there
        for(const key in tiles) {
            if(tile == tiles[key] && tile_usedbyO[key] == false) {
                tile_usedbyO[key] = true;
            }
        }

        winCondition();
       
       oTurn = false;
       xTurn = true;
       
       changeTurnImg();
    }
}

for (const key in tiles) {
    tiles[key].addEventListener('click', function handleClick() {
        checkIfMovePossible(tiles[key]);
    });
}

playerVsPlayerBtn.addEventListener('click', function handleClick() {
    playerVsPlayerBtnPressed();
})

playerVsComputerBtn.addEventListener('click', function handleClick() {
    playerVsComputerBtnPressed();
})

reset.addEventListener('click', function handleClick() {
    resetBtnPressed();
})

quitBtn.addEventListener('click', function handleClick() {
    resetBtnPressed();
});

nextRoundBtn.addEventListener('click', function handleClick() {
    nextRoundBtnPressed();
})

