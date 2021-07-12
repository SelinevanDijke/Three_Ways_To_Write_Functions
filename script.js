// Function declaration
function multiply(number1, number2) {
    const square = number1 * number1;
    const squareTwo = number2 * number2;
    const squareTotal = square * squareTwo; 
    const sum = squareTotal * squareTotal;
    return sum;
};
console.log(multiply(1,10)); // 10.000 

// Function expressions
const multiplyTwo = function (number3, number4) {
    const square = number3 * number3;
    const squareTwo = number4 * number4;
    const squareTotal = square * squareTwo; 
    const sum = squareTotal * squareTotal;
    return sum;
};
console.log(multiplyTwo(1,10)); // 10.000 

// // Function arrow
const multiplyThree = (number5, number6) => {
    const square = number5 * number5;
    const squareTwo = number6 * number6;
    const squareTotal = square * squareTwo; 
    const sum = squareTotal * squareTotal;
    return sum;
};
console.log(multiplyThree(1,10)); // 10.000 



