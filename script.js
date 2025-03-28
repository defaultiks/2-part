
// let a = 5
// let btn = document.getElementById('check-in')
// let div = document.getElementById('out')

// btn.onclick = function elem(){
//     div.innerHTML = a
// }


// function add() {
//     calculate((a, b) => a + b);
// }

// function subtract() {
//     calculate((a, b) => a - b);
// }

// function multiply() {
//     calculate((a, b) => a * b);
// }

// function divide() {
//     calculate((a, b) => {
//         if (b === 0) {
//             alert("Ошибка: Деление на ноль!");
//             return null;
//         }
//         return a / b;
//     });
// }
// function calculate(operation) {
//     const firstNumber = parseFloat(document.getElementById("firstNumber").value);
//     const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    
//     const result = operation(firstNumber, secondNumber);
//     document.getElementById("result").innerText = "Результат: " + result;
// }

// УРОК 10


let city = document.querySelector(".city")

fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=d000fe065fbbc765b939d66078e4a40d&quot")
.then(function(resp) {return resp.json()})
.then(function(data){
    console.log(data)
    
    city.innerHTML = data.sys.country
    city.innerHTML = data.sys.sunrise
    city.innerHTML = data.sys.sunset
    city.innerHTML = data.wind.speed
    city.innerHTML = data.name.humidity

})
