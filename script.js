let firstNumber = "";
let operator = "";
let secondNumber = "";
let justCalculated = false;
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
        return "Nice try!";
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
}
    return NaN;
}

const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const actionButtons = document.querySelectorAll('.action');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(justCalculated){
            firstNumber="";
            justCalculated = false;
        }
        
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
        if(button.textContent === "="){
            
            if(!firstNumber || !secondNumber || !operator) return;
            
            const result = operate();
            display.value = result;

            firstNumber = result;
            secondNumber = "";
            operator = "";

            justCalculated = true;
        }

        if(button.textContent === "AC"){
         firstNumber = "";
         secondNumber = "";
         operator="";
         display.value="";   
        }
    })
});
