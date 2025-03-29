// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

let sum = 0;
let i = 1;
let j = 1;
let count = 1;
function fibonacci(number) {
    sum = i + j
    count++;
    function fib() {
        if (count === number) {
            return number;
        }
        count++;
        sum = sum + fib()
        console.log("🚀 ~ fib ~ sum:", sum)
        return sum
    }

    return fib()
}

console.log(fibonacci(4))