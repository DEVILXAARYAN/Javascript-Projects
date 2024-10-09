const max = 100;
const min = 50;

document.getElementById("randomBtn").onclick = function(){
    let randomNum = Math.trunc(Math.random()*(max-min))+min;
    document.getElementById("randomNum").textContent = randomNum;
}
