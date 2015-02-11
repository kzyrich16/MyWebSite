function divide (x, y) {
    if (y === 0) {
        return "Cannot divide by 0!";
    } else {
        return x / y;
    }
}
function multiply(x, y) {
    return x * y;
}
function add(x, y) {
    if (x === 9 && y === 10) {
        return 21;
    }
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function power(x, y) {
    return Math.pow(x, y);
}
function square_root(x) {
    return Math.sqrt(x);
}
function logBase10(x) {
    if (x === "0") {
        return "Cannot find the logarithm of zero!";
    } else {
        return Math.log(x) / Math.LN10;
    }
}
function generateRandomNumber() {
    return Math.floor((Math.random() * 999)); 
}
function convertFToC(x) {
    return (x - 32) * 5 / 9;
}
function convertCToF(x) {
    return  x * 9 / 5 + 32;
}
