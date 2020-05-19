var result = {
    currentInput: [],
    currentResult: 0,
}

function addValueToInput(clickedButton){
    console.log('click ' + clickedButton);
    result.currentInput.push(clickedButton);
    console.log(result.currentInput)
}

function getNumberCasted(){
    if(result.currentInput.length){
        for (i = 0; i < result.currentInput.length; i++) {
            var stringHolder = stringHolder + result.currentInput[i];
            console.log(stringHolder);
        }
        console.log(parseInt(stringHolder))
        result.currentResult = parseInt(stringHolder)
    }   
}

var button1 = document.getElementById('number1');
button1.addEventListener('click', addValueToInput('1'));
console.log(result.currentInput)

// button1.click(addValueToInput('1'))

document.querySelector('.number-display').textContent = getNumberCasted(result.currentResult)