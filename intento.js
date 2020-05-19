var result = {
    currentInput: [],
    currentResult: 0,
    currentInputString: '',
    display:'',
}
const addValue = (value) =>{
    result.currentInput.push(value);
    console.log(result.currentInput)
    result.display = result.display + value;
    document.querySelector('.number-display').textContent = result.display;
}

var button1 = document.getElementById('number1');
var button2 = document.getElementById('number2');
var button3 = document.getElementById('number3');
var button4 = document.getElementById('number4');
var button5 = document.getElementById('number5');
var button6 = document.getElementById('number6');
var button7 = document.getElementById('number7');
var button8 = document.getElementById('number8');
var button9 = document.getElementById('number9');
var button0 = document.getElementById('number0');
var buttonComa = document.getElementById('number-coma');

button1.addEventListener('click', () => addValue('1') );
button2.addEventListener('click', () => addValue('2') );
button3.addEventListener('click', () => addValue('3') );
button4.addEventListener('click', () => addValue('4') );
button5.addEventListener('click', () => addValue('5') );
button6.addEventListener('click', () => addValue('6') );
button7.addEventListener('click', () => addValue('7') );
button8.addEventListener('click', () => addValue('8') );
button9.addEventListener('click', () => addValue('9') );
button0.addEventListener('click', () => addValue('0') );
buttonComa.addEventListener('click', () => addValue(',') );


function convertStringInputToNumber(){
    result.currentInputString;
    if (result.currentInput.length !== 0){
        for (let i = 0; i < result.currentInput.length; i++) {
            if(result.currentInput[i] !== ','){
                result.currentInputString = result.currentInputString + result.currentInput[i];
            }
            
        }
    }
}

var buttonSum = document.getElementById('sum-button');
var buttonMinus = document.getElementById('minus-button');
var buttonMultiply = document.getElementById('multiply-button');
var buttonDivide = document.getElementById('divide-button');
var buttonEqual = document.getElementById('equal-button');

buttonSum.addEventListener('click', sumOperation);
//buttonMinus.addEventListener('click', minusOperation);
//buttonDivide.addEventListener('click', divideOperation);
//buttonMultiply.addEventListener('click', multiplyOperation);

function sumOperation(){
    convertStringInputToNumber()
    document.querySelector('.number-display').textContent = result.currentInputString;
}