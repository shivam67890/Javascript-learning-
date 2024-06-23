const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let etime = 0;
let isrunning = false;
function start() {
    if (!isrunning) {
        startTime = Date.now() - etime;
        timer = setInterval(update, 10);
        isrunning = true;
    }
}
function stop() {
    if (isrunning) {
        clearInterval(timer);
        etime = Date.now() - startTime;
        isrunning = false;
    }
}
function reset() {
    clearInterval(timer);
    timer = null;
    startTime = 0;
    etime = 0;
    isrunning = false;
    display.textContent=`00:00:00:00`;
}
function update() {
    let date = Date.now();//it give millisecond till now from january.
    etime = date - startTime;
    let hour = Math.floor(etime / (1000 * 60 * 60));
    let minute = Math.floor(etime / (1000 * 60) % 60);
    let second = Math.floor(etime / (1000) % 60);
    let milisecond = Math.floor(etime % 1000 / 10);
    hour = String(hour).padStart(2, "0");
    minute = String(minute).padStart(2, "0");
    second = String(second).padStart(2, "0");
    milisecond = String(milisecond).padStart(2, "0");
    display.textContent = `${hour}:${minute}:${second}:${milisecond}:`;
}
