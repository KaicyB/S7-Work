let intervalID = -1;
let timerToBeIncremented = 0;

document.getElementById("homepagetimer").addEventListener("click", () => {
    intervalID = setInterval(logTimer, timer=1000)
})