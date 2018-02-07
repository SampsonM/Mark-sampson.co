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

function openTimer() {
    document.getElementById("timer").style.visibility = "visible";

    setInterval(function(){ myTimer()}, 100);
 
function myTimer() {
    var today = new Date();
    var start = new Date('2017-2-20');
    var count = today - start;

    let days = Math.floor(count/(60*60*1000*24)*1);
    let hours = Math.floor((count%(60*60*1000*24))/(60*60*1000)*1);
    let minutes = Math.floor(((count%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
    let secs = Math.floor((((count%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("secs").innerHTML = secs;
 }
    document.getElementById("backg-fade").style.width = "100%";
}
        
function closeTimer() {
    document.getElementById("timer").style.visibility = "hidden";
    document.getElementById("backg-fade").style.width = "0";
}