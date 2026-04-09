let firstNumber;
let operator;
let secondNumber;
function add(a, b){
    return a + b;
}

console.log(add(1, 2));

function subtract(a, b){
    return a - b;
}
console.log(subtract(5, 2));

function multiply(a, b){
    return a * b;
}
console.log(multiply(7, 2));

function divide(a, b){
    if(b === 0){
        return NaN;
    }else {
        return a / b;
    }
    
}
console.log(divide(10, 2))

function operate(){
if(operator === "+"){
    return add(firstNumber, secondNumber);
}
if(operator === "-"){
    return subtract(firstNumber, secondNumber);
}
if(operator === "*"){
    return multiply(firstNumber, secondNumber);
}
if(operator === "/"){
    return divide(firstNumber, secondNumber);
}else{
    return NaN;
}
}

const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(!operator){
            firstNumber = button.textContent;
            display.value = firstNumber;
        } else {
            secondNumber = button.textContent;
            display.value = secondNumber;
        }
        
    });
});