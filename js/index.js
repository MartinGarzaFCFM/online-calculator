const add = (a, b) => parseInt(a, 10) + parseInt(b, 10);
const substract = (a, b) => parseInt(a, 10) - parseInt(b, 10);
const multiply = (a, b) => parseInt(a, 10) * parseInt(b, 10);
const divide = (a, b) => parseInt(a, 10) / parseInt(b, 10);

const operate = (a, op, b) => {
    switch (op) {
        case "+":
            return add(a, b);  
        case "-":
            return substract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            console.log("Invalid Operator");
            break;
    }
}