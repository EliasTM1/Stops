let hrs = 0;
let min = 0;
let sec = 0;
let ms = 0;
let interval = null;
// var status = false;
let status = false;

function stopWatch() {
    ms++;
    if (ms / 100 == 1) {
        ms = 0;
        sec++;
        if (sec / 60 == 1) {
            sec = 0;
            min++;
            if (min / 60 == 1) {
                min = 0
                hrs++;
            }
        }
    }
    document.getElementById("ms").innerHTML = ms;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("min").innerHTML = min;
    document.getElementById("hrs").innerHTML = hrs;
}
if (min > 10) {
    "0" + min
}


function startStop() {

    if (!status) {
        interval = window.setInterval(stopWatch, 10);
        document.getElementById("start").innerHTML = ("Stop");
        status = true;
    } else {
        window.clearInterval(interval);
        document.getElementById("start").innerHTML = ("Start");
        status = false;
    };


};

function reset() {
    hrs = 0;
    min = 0;
    sec = 0;
    ms = 0;
    document.getElementById("ms").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hrs").innerHTML = "00";
}
// window.setInterval(stopWatch, 10)