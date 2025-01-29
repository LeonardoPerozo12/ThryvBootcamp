// Selección de elementos del DOM
const display = document.getElementById("display");

// Función para agregar números y operadores al display
function appendTodisplay(value) {
    display.value += value;
}

// Función para limpiar el display
function clearDisplay() {
    display.value = "";
}

// Función para cambiar de signo el número en pantalla
function changeSign() {
    if (display.value) {
        display.value = parseFloat(display.value) * -1;
    }
}

// Función para calcular el porcentaje
function percentage() {
    if (display.value) {
        display.value = parseFloat(display.value) / 100;
    }
}

// Función para evaluar la expresión en pantalla
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Funciones de operaciones matemáticas básicas
function sumar() {
    realizarOperacion("+");
}

function restar() {
    realizarOperacion("-");
}

function multiplicar() {
    realizarOperacion("*");
}

function dividir() {
    realizarOperacion("/");
}

// Función auxiliar para realizar operaciones
function realizarOperacion(operador) {
    const valores = display.value.split(operador);
    
    if (valores.length !== 2 || isNaN(valores[0]) || isNaN(valores[1])) {
        display.value = "Error";
        return;
    }

    const num1 = parseFloat(valores[0]);
    const num2 = parseFloat(valores[1]);

    let resultado;
    switch (operador) {
        case "+": resultado = num1 + num2; break;
        case "-": resultado = num1 - num2; break;
        case "*": resultado = num1 * num2; break;
        case "/":
            if (num2 === 0) {
                display.value = "Error";
                return;
            }
            resultado = num1 / num2;
            break;
    }

    display.value = resultado;
}