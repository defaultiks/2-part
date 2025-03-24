
// let a = 5
// let btn = document.getElementById('check-in')
// let div = document.getElementById('out')

// btn.onclick = function elem(){
//     div.innerHTML = a
// }


function add() {
    calculate((a, b) => a + b);
}

function subtract() {
    calculate((a, b) => a - b);
}

function multiply() {
    calculate((a, b) => a * b);
}

function divide() {
    calculate((a, b) => {
        if (b === 0) {
            alert("Ошибка: Деление на ноль!");
            return null;
        }
        return a / b;
    });
}
function calculate(operation) {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    
    const result = operation(firstNumber, secondNumber);
    document.getElementById("result").innerText = "Результат: " + result;
}
