// 1.Add
function add(a, b) {
    return a + b
}
console.log(add(2, 4));

// 2.Multiply
function multiply(a, b) {    
    let total = 0
    for (let i = 0; i < b; i += 1){
        total = add (a, total)        
    }
    return total
}
console.log(multiply(3, 6));


// Power/Exponentiantion
function power(x, n) {
    let total = 1
    for (let i = 0; i < n; i += 1){
        total = multiply (x, total)
    }
    return total
}
console.log(power(2, 6));

// Factorial
function factorial(x) {
    let total = 1
    for (let i = 1; i <= x; i++){
        total =  multiply(i, total)
    }
    return total
}
console.log(factorial(5));

// Fibonacci
function fibonacci(n) {
    let num1 = 0
    let nextNum = 1
    let currentNum
       for(let i = 2; i < n; i++) {
        currentNum = add(num1, nextNum)
        num1 = nextNum
        nextNum = currentNum     
    } 
    if (n === 1) {
        return 0
     }
         if (n === 2) {
        return 1
     }
         else {
     return currentNum
     }
    
}
console.log(fibonacci(9));

// 0 1 1 2 3 5 8 13 21 34 55 ....
