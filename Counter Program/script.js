const decbtn = document.getElementById("decreaseBtn")
const resbtn = document.getElementById("resetBtn")
const incbtn = document.getElementById("increaseBtn")
const countLabel = document.getElementById("countlabel")
let count = 0;

incbtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decbtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resbtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
