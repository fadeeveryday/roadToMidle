const firstInput = document.getElementById('firstInput')
const secondInput = document.getElementById('secondInput')
const resultValue = document.getElementById('resultValue')


function colorValue(first, second) {
    let result = Number(first) 
    if (result > 0) {
        resultValue.innerHTML = result        
    }
}
function addition () {
    resultValue.innerHTML = Number(firstInput.value) + Number(secondInput.value)  
};

function minus () {
    resultValue.innerHTML = Number(firstInput.value) - Number(secondInput.value)  
};

function multiple () {
    resultValue.innerHTML = Number(firstInput.value) * Number(secondInput.value)  
};

function division () {
    resultValue.innerHTML = Number(firstInput.value) / Number(secondInput.value)  
};
// division.addEventListener('click', () => {
//     resultValue.innerHTML = Number(firstInput.value) / Number(secondInput.value)
// });