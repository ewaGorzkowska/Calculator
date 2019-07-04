let numbers = [...document.querySelectorAll('[data-button-type="number"]')];
let operators = [...document.querySelectorAll('[data-button-type="operator"]')];
let equal = document.querySelector('[data-button-type="equal"]');
let numberX;
let numberY;
let operator;

numbers.forEach(numb => numb.addEventListener('click', clickOnButtonNumber));
operators.forEach(oper => oper.addEventListener('click', clickOnButtonOperator));
equal.addEventListener('click', clickOnButtonEqual);

function clickOnButtonNumber(event) {

    if (!operator) {
        if (!numberX)
            numberX = event.target.dataset.btn
        else
            numberX += event.target.dataset.btn
        console.log('numberX:' + numberX)
    }
    else {
        if (!numberY)
            numberY = event.target.dataset.btn
        else
            numberY += event.target.dataset.btn
        console.log('numberY ' + numberY);
    }

};

function clickOnButtonOperator(event) {
    if (numberX)
        operator = event.target.dataset.btn;
}
function clickOnButtonEqual(event) {
    let result;
    if (numberX && numberY && operator) {
        if (operator === 'plus')
            result=(parseInt(numberX) + parseInt(numberY));
        if (operator === 'minus')
            result=(parseInt(numberX) - parseInt(numberY));
        if (operator === 'multiplication')
            result=(parseInt(numberX) * parseInt(numberY));
            console.log(result);
    }
}

function display(number) {
    
}
