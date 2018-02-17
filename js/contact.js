function openNav() {
    document.getElementById("mySidenav").style.width = "50px";
    document.getElementById("menu").style.visibility = "hidden";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("menu").style.visibility = "visible";
}

function emptyName() {
    document.getElementById("name").value = "";
}

function emptyEmail() {
    document.getElementById("email").value = "";
}

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
let x = 0;
let y = 0;
window.addEventListener("keydown", moveSomething, false);
canvas.addEventListener("click", start, false);

//finds start user position and sets [tested]
function start(e) {
    x = e.clientX;
    y = e.clientY;
    ctx.moveTo(x, y);
    console.log(x, y);
}

function moveCtx(x, y) {
    ctx.fillRect(x, y, 2, 2);
    console.log(x, y);
}

function moveSomething(e) {
    switch(e.keyCode) {
        case 37: //left
            x -= 2;
            moveCtx(x, y);
            break;
        case 38: //up
            y -= 2;
            moveCtx(x, y);            
            break;
        case 39: //right
            x += 2;
            moveCtx(x, y);            
            break;
        case 40: //down
            y += 2;
            moveCtx(x, y);            
            break;  
    }   
}