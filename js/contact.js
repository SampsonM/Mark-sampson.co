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