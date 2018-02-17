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
let x = 0;
let y = 0;
clear.addEventListener("click", reset, false);
window.addEventListener("keydown", moveSomething, false);
init();

function init() {
    x = etchSketch.offsetWidth / 2;
    y = (etchSketch.offsetHeight / 4) * 3;
}

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

fitToContainer(canvas);

function fitToContainer(canvas){
  // ...then set the internal size to match
  canvas.width  = etchSketch.offsetWidth;
  canvas.height = etchSketch.offsetHeight;
}

function reset() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    init();
};

