
let firstNumber = 0
let secondNumber = 0
let result = 0


const checkInputFirstNumber = () => {
    if (!isNaN(firstNumber = parseFloat(prompt('Podaj pierwszą liczbę')))) {
        return firstNumber
    }else {
        return alert('To nie jest liczba')
    }
}

const checkInputSecondNumber = () => {
    if (!isNaN(secondNumber = parseFloat(prompt('Podaj drugą liczbę')))) {
        return secondNumber
    }else {
        return alert('To nie jest liczba')
    }
}

checkInputFirstNumber()
const operation = prompt('Podaj operator arytmetyczny (+, -, *, / lub %)')
checkInputSecondNumber()

const add = () => {
    result = firstNumber + secondNumber
    return alert(result)
}

const subtraction = () => {
    result = firstNumber - secondNumber
    return alert(result)
}

const multiply = () => {
    result = firstNumber * secondNumber
    return alert(result)
}

const divine = () => {
    result = firstNumber / secondNumber
    return alert(result)
}

const modulo = () => {
    result = firstNumber % secondNumber
    return alert(result)
}

switch (operation) {
    case '+':
        add()
        break
    case '-':
        subtraction()
        break
    case '*':
        multiply()
        break
    case '/':
        if(firstNumber === 0 || secondNumber === 0) {
            alert('Nie dzielimy przez zero!')
            break
        } else
        divine()
        break
    case '%':
        if(firstNumber === 0 || secondNumber === 0) {
            alert('Nie szukamy reszty dzielenia przez zero!')
            break
        } else
        modulo()
        break
    default:
        alert('Ups, coś nie tak')
}