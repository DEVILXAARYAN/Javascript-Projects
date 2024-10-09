const number = 5;
const arr = []
for(let i = number+1; i>1; i--){
    let number = i - 1;
    number = arr.push(number)
}

const factorial = arr.reduce((acc, ele) => acc * ele)
console.log(factorial)