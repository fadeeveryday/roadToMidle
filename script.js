const firstInput = document.getElementById('firstInput')
const secondInput = document.getElementById('secondInput')
const resultValue = document.getElementById('resultValue')


function colorValue(result) {
    resultValue.classList.remove('positive', 'negative');

    if (Number(result) > 0) {
        resultValue.classList.toggle('positive')         
    } else if(Number(result) < 0) {
        resultValue.classList.toggle('negative')
    }
}
function addition () {
    colorValue(resultValue.innerHTML = Number(firstInput.value) + Number(secondInput.value))
};

function minus () {
    colorValue(resultValue.innerHTML = Number(firstInput.value) - Number(secondInput.value))
};

function multiple () {
    colorValue(resultValue.innerHTML = Number(firstInput.value) * Number(secondInput.value))
};

function division () {
    colorValue(resultValue.innerHTML = Number(firstInput.value) / Number(secondInput.value)) 
};
