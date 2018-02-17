function openNav() {
    document.getElementById("mySidenav").style.width = "50px";
    document.getElementById("menu").style.visibility = "hidden";
};

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("menu").style.visibility = "visible";
};

function emptyName() {
    document.getElementById("name").value = "";
};

function emptyEmail() {
    document.getElementById("email").value = "";
};

let txt = "Let's build something!";
let i = 0;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    };
};

//etch sketch code
const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');
const etchSketch = document.querySelector('#etch-sketch');
const clear = document.querySelector('#clear');
const etchImg = document.querySelector('#etchImg');
let x = 0;
let y = 0;
window.addEventListener("keydown", moveSomething, false);
window.addEventListener("resize", init, false);
// window.addEventListener("onLoad", printImg, false);
clear.addEventListener("click", reset, false);

init(); //initialise etch sketch area

function init() {
    fitToContainer(canvas);    
    reset();
    // printImg();
};

// function printImg() {
//     ctx.drawImage(etchImg, -100, 0);
// }

//reset canvas
function reset() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x = etchSketch.offsetWidth / 2;
    y = (etchSketch.offsetHeight / 4) * 3;
};

//set canvas to div automat
function fitToContainer(canvas){
    canvas.width  = etchSketch.offsetWidth;
    canvas.height = etchSketch.offsetHeight;
};

//moves ctx on key press
function moveCtx(x, y) {
    ctx.fillRect(x, y, 4, 4);
    console.log(x, y);
};

//on certain key press ctx moves
function moveSomething(e) {
    switch(e.keyCode) {
        case 37: //left
            x -= 4;
            moveCtx(x, y);
            console.log(x, y);
            break;
        case 38: //up
            y -= 4;
            moveCtx(x, y);            
            break;
        case 39: //right
            x += 4;
            moveCtx(x, y);            
            break;
        case 40: //down
            y += 4;
            moveCtx(x, y);            
            break;  
    }   
};

