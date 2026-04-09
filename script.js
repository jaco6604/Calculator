let firstNumber = "";
let operator = "";
let secondNumber = "";
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
    return add(Number(firstNumber), Number(secondNumber));
}
if(operator === "-"){
    return subtract(Number(firstNumber), Number(secondNumber));
}
if(operator === "*"){
    return multiply(Number(firstNumber), Number(secondNumber));
}
if(operator === "/"){
    return divide(Number(firstNumber), Number(secondNumber));
}else{
    return NaN;
}
}

const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const actionButtons = document.querySelectorAll('.action');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(!operator){
            firstNumber = firstNumber  + button.textContent;
            display.value = firstNumber;

        }
        else {
            secondNumber = secondNumber + button.textContent;
            display.value = secondNumber;
        }
        

        
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () =>{
        operator = button.textContent;
    })
});

actionButtons.forEach(button => {
    button.addEventListener('click', () =>{
        action = button.textContent;
    })
});
