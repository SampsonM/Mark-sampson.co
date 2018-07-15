$(window).scroll(function(){
    $("#menu").css("opacity", 1 - $(window).scrollTop() / 900);
});

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("menu").style.transitionDelay = "0s";
    document.getElementById("menu").style.visibility = "hidden";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("menu").style.transitionDelay = "0.3s";
    document.getElementById("menu").style.visibility = "visible";
}

function moveToAbout() {
    const about = document.getElementById('about');
    about.scrollIntoView({
        block: "start",
        behavior: 'smooth'
    });
}
