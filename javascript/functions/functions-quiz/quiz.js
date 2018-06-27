
function isEven(num) {
    // if(num % 2 === 0){
    //     return true;
    // }
    // else {
    //     return false;
    // }
    // Can be simplified to:
    return num % 2 === 0;
}

function factorial(num) {
    // 4! = 4 x 3 x 2 x 1 = 24
    // 0! = 1
    // This doesn't allow for factorial(0) to equal 1 as required.
    // let result = num;
    // for (let i = num -= 1; i > 0; i -= 1) {
    //     // result = result * i;
    //     result *= i;
    // }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= 1;
    }
    return result;
}

function kebabToSnake(str) {
    return str.replace(/-/g, "_");
}