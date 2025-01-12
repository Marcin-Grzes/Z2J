
let firstNumber = parseFloat(prompt('Podaj pierwszą liczbę'));
let operation = prompt('Podaj operator arytmetyczny (+, -, *, / lub %)');
let secondNumber = parseFloat(prompt('Podaj drugą liczbę'));
let result = 0
let status = true

const add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber
}


const subtraction = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber
}

const multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber
}

const divide = (firstNumber, secondNumber) => {
    if(firstNumber === 0 || secondNumber === 0) {
        return alert('Nie dzielimy przez zero!')
    } else {
        return firstNumber / secondNumber
    }
}

const modulo = (firstNumber, secondNumber) => {
    if (firstNumber === 0 || secondNumber === 0) {
        alert('Nie szukamy reszty dzielenia przez zero!')
    } else {
        return firstNumber % secondNumber
    }
}

const calcFisrt = (firstNumber, operation, secondNumber) => {
    if (isNaN(firstNumber && secondNumber)) {
        alert('To nie jest liczba!')}

    switch (operation) {
        case '+':
            result = add(firstNumber, secondNumber)
            break
        case '-':
            result = subtraction(firstNumber, secondNumber)
            break
        case '*':
            result = multiply(firstNumber, secondNumber)
            break
        case '/':
            result = divide(firstNumber, secondNumber)
            break
        case '%':
            result = modulo(firstNumber, secondNumber)
            break
        default:
            break
    } return result
}

alert(calcFisrt(firstNumber, operation, secondNumber))

while(true){
    let operation = prompt('Podaj operator arytmetyczny (+, -, *, / lub %)');
    if(operation === ''){
        break
    } else {
    let secondNumber = parseFloat(prompt('Podaj drugą liczbę'));
    alert(calcFisrt(result, operation, secondNumber))
}}
