const numbers = document.querySelectorAll(".number")
const calculatorScreen = document.querySelector(".calculator-screen")
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector(".equal-sign")
const decimal = document.querySelector(".decimal")
const clearBtn = document.querySelector(".all-clear")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentInput)
    })
})

const updateScreen = (number) => {
    calculatorScreen.value = number
}

let prevInput = "0"
let calculationOperator = ""
let currentInput = "0"

const inputNumber = (number) => {
    if (currentInput === "0") {
        currentInput = number
    }
    else {
        currentInput += number
    }
}


operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)

    })
})

const inputOperator = (operator) => {
    prevInput = currentInput
    calculationOperator = operator
    currentInput = "0"
}

equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentInput)
})

const calculate = () => {
    let result = 0
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevInput) + parseFloat(currentInput)
            break
        case "-":
            result = parseFloat(prevInput) - parseFloat(currentInput)
            break
        case "*":
            result = parseFloat(prevInput) * parseFloat(currentInput)
            break
        case "/":
            result = parseFloat(prevInput) / parseFloat(currentInput)
            break
        case "%":
            result = (parseFloat(prevInput) / 100 ) * parseFloat(currentInput)
            break
        case "pi":
            result = Math.PI;
            break
        case "^":
            result = Math.pow(prevInput, currentInput)
            break
        case "sqrt":
            result = Math.sqrt(currentInput)
            break
        case "sin":
            result = Math.sin(currentInput)
            break
        case "cos":
            result = Math.cos(currentInput)
            break
        case "tan":
            result = Math.tan(currentInput)
            break
        case "e^":
            result = Math.exp(currentInput)
            break
        case "Ln2":
            result = Math.log2(prevInput)
            break
        case "e":
            result = Math.E
            break
        case "Ln10":
            result = Math.log10(prevInput)
            break
        default:
            return
    }
    currentInput = result.toString()
    calculationOperator = ""
}

clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentInput)
})

const clearAll = () => {
    prevInput = "0"
    calculationOperator = ""
    currentInput = "0"
}

