const firstInput = document.getElementById('firstInput')
const secondInput = document.getElementById('secondInput')
const resultValue = document.getElementById('resultValue')
const addition = document.getElementById('addition')
const minus = document.getElementById('minus')
const multiplication = document.getElementById('multiplication')
const division = document.getElementById('division')

addition.addEventListener('click', () => {
    resultValue.innerHTML = Number(firstInput.value) + Number(secondInput.value)
});

minus.addEventListener('click', () => {
    resultValue.innerHTML = Number(firstInput.value) - Number(secondInput.value)
});

multiplication.addEventListener('click', () => {
    resultValue.innerHTML = Number(firstInput.value) * Number(secondInput.value)
});

division.addEventListener('click', () => {
    resultValue.innerHTML = Number(firstInput.value) / Number(secondInput.value)
});