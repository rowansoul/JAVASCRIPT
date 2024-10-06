// Operadores de comparación
// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine() {
    // Tu código aquí...
    public class CompararNumeros {
    public static void main(String[] args) {
        int a = 10;
        int b = 9;
        if (a > b) {
            System.out.println(a + " es mayor que " + b);
        } else {
            System.out.println(a + " no es mayor que " + b);
        }
    }
}
}
// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
    // Tu código aquí...
    function compareZeroAndZero() {
    // Comprobar si 0 es igual a 0
    let resultado = (0 === 0);

    // Imprimir el resultado en la consola
    console.log("¿0 es igual a 0? " + resultado);
}
// Llamar a la función
compareZeroAndZero();
}
// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
    // Tu código aquí...
    function compareSeven() {
    // Comprobar si 7 es mayor que 8 y menor que 10
    let resultado = (7 > 8) && (7 < 10);

    // Imprimir el resultado en la consola
    console.log("¿7 es mayor que 8 y menor que 10? " + resultado);
}
// Llamar a la función
compareSeven();
}
// Operadores lógicos
// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct() {
    // Tu código aquí...
    function canBuyProduct() {
    // Precio del producto
    const precioOriginal = 1500;
    // Descuento del 25%
    const descuento = 0.25;
    // Monto que tienes
    const dineroDisponible = 1150;

    // Calcular el precio con descuento
    const precioConDescuento = precioOriginal * (1 - descuento);

    // Verificar si puedes comprar el producto
    const resultado = dineroDisponible >= precioConDescuento;

    // Imprimir el resultado en la consola
    if (resultado) {
        console.log("Puedes comprar el producto.");
    } else {
        console.log("No puedes comprar el producto.");
    }
}

// Llamar a la función
canBuyProduct();
}
// Variables
// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable() {
    // Tu código aquí...
    function createMessageVariable() {
    // Crear la variable mensaje y asignarle el valor "Hola JavaScript"
    let mensaje = "Hola JavaScript";

    // Imprimir la variable en la consola
    console.log(mensaje);
}

// Llamar a la función
createMessageVariable();
}
// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createSumVariable() {
    // Tu código aquí...
    function createSumVariable() {
    // Crear la variable resultado y asignarle la suma de 2 y 3
    let resultado = 2 + 3;

    // Imprimir la variable en la consola
    console.log(resultado);
}

// Llamar a la función
createSumVariable();
}

// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant() {
    // Tu código aquí...
    function createDisabledConstant() {
    // Crear la constante IS_DISABLED y asignarle el valor booleano true
    const IS_DISABLED = true;

    // Imprimir la constante en la consola
    console.log(IS_DISABLED);
}
// Llamar a la función
createDisabledConstant();
}
// Null y Undefined
// 8. Crea una variable con `let` llamada `capacidad` y asígnale un valor `null`, luego imprime la variable en consola.
function createNullVariable() {
    // Tu código aquí...
    function createNullVariable() {
    // Crear la variable capacidad y asignarle el valor null
    let capacidad = null;

    // Imprimir la variable en la consola
    console.log(capacidad);
}

// Llamar a la función
createNullVariable();
}
// 9. Crea una variable con `let` llamada `dinero` y asígnale un valor `undefined`, luego imprime la variable en consola.
function createUndefinedVariable() {
    // Tu código aquí...
    function createUndefinedVariable() {
    // Crear la variable dinero y asignarle el valor undefined
    let dinero;

    // Imprimir la variable en la consola
    console.log(dinero);
}

// Llamar a la función
createUndefinedVariable();
}
// typeof
// 10. Escribe un código para ver el tipo de una variable llamada `userName` e imprime el tipo de dato en consola.
function checkUserNameType() {
    // Tu código aquí...
    function checkUserNameType() {
    // Declarar la variable userName y asignarle un valor
    let userName = "Juan";

    // Verificar el tipo de la variable userName
    let tipoDeDato = typeof userName;

    // Imprimir el tipo de dato en la consola
    console.log("El tipo de dato de userName es: " + tipoDeDato);
}

// Llamar a la función
checkUserNameType();
}
// 11. Asegúrate de que `dogId` es una cadena de texto y luego imprime el tipo de dato en consola.
function checkDogIdIsString() {
    // Tu código aquí...
    function checkDogIdIsString() {
    // Declarar la variable dogId y asignarle un valor
    let dogId = "12345"; // Asigna un ID de ejemplo como cadena de texto

    // Verificar si dogId es una cadena de texto
    let esString = typeof dogId === 'string';

    // Imprimir el tipo de dato de dogId en la consola
    console.log("El tipo de dato de dogId es: " + typeof dogId);
    console.log("¿dogId es una cadena de texto? " + esString);
}

// Llamar a la función
checkDogIdIsString();
}
// console.log()
// 12. Imprime un mensaje en la consola utilizando `console.log()`.
function logMessage() {
    // Tu código aquí...
    function logMessage() {
    // Imprimir un mensaje en la consola
    console.log("Hola soy Rowansoul.");
}
// Llamar a la función
logMessage();
}
// 13. Utiliza `console.log()` para imprimir el valor de la variable `edad` que tiene el valor 30.
function logAge() {
    // Tu código aquí...
    function logAge() {
    // Declarar la variable edad y asignarle el valor 30
    let edad = 30;

    // Imprimir el valor de la variable edad en la consola
    console.log("La edad es: " + edad);
}

// Llamar a la función
logAge();
}
// 14. Muestra el mensaje 'La versión de JavaScript es' seguido de la variable `version` con el valor 2024 usando `console.log()`.
function logVersion() {
    // Tu código aquí...
    function logVersion() {
    // Declarar la variable version y asignarle el valor 2024
    let version = 2024;

    // Imprimir el mensaje en la consola
    console.log("La versión de JavaScript es: " + version);
}

// Llamar a la función
logVersion();
}
// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    compareTenAndNine,
    compareZeroAndZero,
    compareSeven,
    canBuyProduct,
    createMessageVariable,
    createSumVariable,
    createDisabledConstant,
    createNullVariable,
    createUndefinedVariable,
    checkUserNameType,
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
};
// 1. Comparar 10 y 9
function compareTenAndNine() {
    console.log(10 > 9);
}

// 2. Comparar 0 y 0
function compareZeroAndZero() {
    console.log(0 === 0);
}

// 3. Comparar si 7 es mayor que 8 y menor que 10
function compareSeven() {
    console.log(7 > 8 && 7 < 10);
}

// 4. Verificar si puedes comprar un producto
function canBuyProduct() {
    const precioProducto = 1500;
    const descuento = 0.25; // 25%
    const dineroDisponible = 1150;

    const precioFinal = precioProducto * (1 - descuento);
    console.log(dineroDisponible >= precioFinal ? "Puedes comprar el producto." : "No puedes comprar el producto.");
}

// 5. Crear un mensaje
function createMessageVariable() {
    let mensaje = "Hola JavaScript";
    console.log(mensaje);
}

// 6. Crear una suma
function createSumVariable() {
    let resultado = 2 + 3;
    console.log(resultado);
}

// 7. Crear una constante
function createDisabledConstant() {
    const IS_DISABLED = true;
    console.log(IS_DISABLED);
}

// 8. Crear variable null
function createNullVariable() {
    let capacidad = null;
    console.log(capacidad);
}

// 9. Crear variable undefined
function createUndefinedVariable() {
    let dinero;
    console.log(dinero);
}

// 10. Verificar tipo de userName
function checkUserNameType() {
    let userName = "Juan";
    console.log("El tipo de dato de userName es: " + typeof userName);
}

// 11. Verificar tipo de dogId
function checkDogIdIsString() {
    let dogId = "12345";
    console.log("El tipo de dato de dogId es: " + typeof dogId);
}

// 12. Imprimir mensaje
function logMessage() {
    console.log("Este es un mensaje desde la función logMessage.");
}

// 13. Imprimir edad
function logAge() {
    let edad = 30;
    console.log("La edad es: " + edad);
}

// 14. Imprimir versión de JavaScript
function logVersion() {
    let version = 2024;
    console.log("La versión de JavaScript es: " + version);
}

// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    compareTenAndNine,
    compareZeroAndZero,
    compareSeven,
    canBuyProduct,
    createMessageVariable,
    createSumVariable,
    createDisabledConstant,
    createNullVariable,
    createUndefinedVariable,
    checkUserNameType,
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
}// 1. Comparar 10 y 9
function compareTenAndNine() {
    console.log(10 > 9);
}

// 2. Comparar 0 y 0
function compareZeroAndZero() {
    console.log(0 === 0);
}

// 3. Comparar si 7 es mayor que 8 y menor que 10
function compareSeven() {
    console.log(7 > 8 && 7 < 10);
}

// 4. Verificar si puedes comprar un producto
function canBuyProduct() {
    const precioProducto = 1500;
    const descuento = 0.25; // 25%
    const dineroDisponible = 1150;

    const precioFinal = precioProducto * (1 - descuento);
    console.log(dineroDisponible >= precioFinal ? "Puedes comprar el producto." : "No puedes comprar el producto.");
}

// 5. Crear un mensaje
function createMessageVariable() {
    let mensaje = "Hola JavaScript";
    console.log(mensaje);
}

// 6. Crear una suma
function createSumVariable() {
    let resultado = 2 + 3;
    console.log(resultado);
}

// 7. Crear una constante
function createDisabledConstant() {
    const IS_DISABLED = true;
    console.log(IS_DISABLED);
}

// 8. Crear variable null
function createNullVariable() {
    let capacidad = null;
    console.log(capacidad);
}

// 9. Crear variable undefined
function createUndefinedVariable() {
    let dinero;
    console.log(dinero);
}

// 10. Verificar tipo de userName
function checkUserNameType() {
    let userName = "Juan";
    console.log("El tipo de dato de userName es: " + typeof userName);
}

// 11. Verificar tipo de dogId
function checkDogIdIsString() {
    let dogId = "12345";
    console.log("El tipo de dato de dogId es: " + typeof dogId);
}

// 12. Imprimir mensaje
function logMessage() {
    console.log("Este es un mensaje desde la función logMessage.");
}

// 13. Imprimir edad
function logAge() {
    let edad = 30;
    console.log("La edad es: " + edad);
}

// 14. Imprimir versión de JavaScript
function logVersion() {
    let version = 2024;
    console.log("La versión de JavaScript es: " + version);
}

// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    // 1. Comparar 10 y 9
function compareTenAndNine() {
    console.log(10 > 9);
}

// 2. Comparar 0 y 0
function compareZeroAndZero() {
    console.log(0 === 0);
}

// 3. Comparar si 7 es mayor que 8 y menor que 10
function compareSeven() {
    console.log(7 > 8 && 7 < 10);
}

// 4. Verificar si puedes comprar un producto
function canBuyProduct() {
    const precioProducto = 1500;
    const descuento = 0.25; // 25%
    const dineroDisponible = 1150;

    const precioFinal = precioProducto * (1 - descuento);
    console.log(dineroDisponible >= precioFinal ? "Puedes comprar el producto." : "No puedes comprar el producto.");
}

// 5. Crear un mensaje
function createMessageVariable() {
    let mensaje = "Hola JavaScript";
    console.log(mensaje);
}

// 6. Crear una suma
function createSumVariable() {
    let resultado = 2 + 3;
    console.log(resultado);
}

// 7. Crear una constante
function createDisabledConstant() {
    const IS_DISABLED = true;
    console.log(IS_DISABLED);
}

// 8. Crear variable null
function createNullVariable() {
    let capacidad = null;
    console.log(capacidad);
}

// 9. Crear variable undefined
function createUndefinedVariable() {
    let dinero;
    console.log(dinero);
}

// 10. Verificar tipo de userName
function checkUserNameType() {
    let userName = "Juan";
    console.log("El tipo de dato de userName es: " + typeof userName);
}

// 11. Verificar tipo de dogId
function checkDogIdIsString() {
    let dogId = "12345";
    console.log("El tipo de dato de dogId es: " + typeof dogId);
}

// 12. Imprimir mensaje
function logMessage() {
    console.log("Este es un mensaje desde la función logMessage.");
}

// 13. Imprimir edad
function logAge() {
    let edad = 30;
    console.log("La edad es: " + edad);
}

// 14. Imprimir versión de JavaScript
function logVersion() {
    let version = 2024;
    console.log("La versión de JavaScript es: " + version);
}
// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    compareTenAndNine,
    compareZeroAndZero,
    compareSeven,
    canBuyProduct,
    createMessageVariable,
    createSumVariable,
    createDisabledConstant,
    createNullVariable,
    createUndefinedVariable,
    checkUserNameType,
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
}
