const textBox = document.getElementById("textBox")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelsius = document.getElementById("toCelsius")
let result =  document.getElementById("result")
let temp;

function convert(){

    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp + "F" 
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = temp * 9/5 - 32;
        result.textContent = temp + "C" 
    }
    else{
        result.textContent = "Select a Unit"
    }
}