function openNav() {
    document.getElementById("menu").style.transition = "0s";
    document.getElementById("mySidenav").style.width = "50px";
    document.getElementById("main").style.marginLeft = "50px";
    document.getElementById("menu").style.visibility = "hidden";
}

function closeNav() {
    document.getElementById("menu").style.transition = "0.2s";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menu").style.visibility = "visible";
}