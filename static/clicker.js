var clickerAmount = 0;
document.getElementById("breadDough").addEventListener("click", () => {
    clickerAmount += 1
    document.getElementById("cAmount").innerHTML = clickerAmount
    console.log(clickerAmount)
})