let firstOperand = null;
let secondOperand = null;
let operation = null;
let displayValue;
let floatFlag = false;

const container = document.querySelector('.buttons');
const displayElement = document.querySelector('.display p');

container.addEventListener('mousedown', (event) => {
    if('button' === event.target.classList[0]){
        event.target.animate([
            {
                // from
                backgroundColor: 'black'
            },
            {
                // to
                backgroundColor: 'grey'
            },
            {
                // to
                backgroundColor: 'black'
            }
        ], 200);

        switch (event.target.value){
            case "+":
                floatFlag = false;
                displayValue = +displayElement.textContent;
                if(!firstOperand){
                    firstOperand = displayValue;
                }
                else{
                    secondOperand = displayValue;
                }
                if(operation){
                    firstOperand = operate(operation, firstOperand, secondOperand);
                    displayElement.textContent = firstOperand;
                }
                operation = '+'
                break;

            case "-":
                floatFlag = false;
                displayValue = +displayElement.textContent;
                if(!firstOperand){
                    firstOperand = displayValue;
                }
                else{
                    secondOperand = displayValue;

                }
                if(operation){
                    firstOperand = operate(operation, firstOperand, secondOperand);
                    displayElement.textContent = firstOperand;
                }
                operation = '-'
                break;

            case "*":
                floatFlag = false;
                displayValue = +displayElement.textContent;
                if(!firstOperand){
                    firstOperand = displayValue;
                }
                else{
                    secondOperand = displayValue;
                }
                if(operation){
                    firstOperand = operate(operation, firstOperand, secondOperand);
                    displayElement.textContent = firstOperand;
                }
                operation = '*'
                break;

            case "/":
                floatFlag = false;
                displayValue = +displayElement.textContent;
                if(!firstOperand){
                    firstOperand = displayValue;
                }
                else{
                    secondOperand = displayValue;
                }
                if(operation){
                    firstOperand = operate(operation, firstOperand, secondOperand);
                    displayElement.textContent = firstOperand;
                }
                operation = '/'
                break;
            
            case "C":
                floatFlag = false;
                firstOperand = null;
                secondOperand = null;
                operation = null;
                displayElement.textContent = "";
                break;

            case "=":
                floatFlag = false;
                // secondOperand = displayValue.textContent.split(/[\+\-\*\/]/);
                // secondOperand = +secondOperand[secondOperand.length - 1];
                if(null === firstOperand){
                    break;
                }
                if (null === secondOperand){
                    break;
                }
                firstOperand = operate(operation, firstOperand, secondOperand);
                displayElement.textContent = firstOperand;
                secondOperand = null;
                operation = null;
                break;

            default:

                if(event.target.value === "."){
                    if(!floatFlag){
                        floatFlag = true;
                    }
                    else{
                        break;
                    }
                }

                if(null === operation){
                    if(firstOperand && firstOperand.length < 8){
                        displayElement.textContent += event.target.value;
                    }
                    else{
                        displayElement.textContent = event.target.value;
                    }
                }
                else{
                    if(secondOperand && secondOperand.length < 8){
                        secondOperand += event.target.value;
                        displayElement.textContent += event.target.value;
                    }
                    else{
                        secondOperand = event.target.value;
                        displayElement.textContent = event.target.value;
                    }
                }
        }
    }
});

function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(operator, a, b) {
    console.log("operation:", operator, typeof(operator));
    console.log("firstOperand:", a, typeof(a));
    console.log("secondOperand:", b, typeof(b));

    switch(operator){
        case '+':
            return add(+a,+b).toString().substring(0,8);
        case '-':
            return substract(+a,+b).toString().substring(0,8);
        case '*':
            return multiply(+a,+b).toString().substring(0,8);
        case '/':
            return divide(+a,+b).toString().substring(0,8);
        default:
            return displayElement.textContent;
    }
}
