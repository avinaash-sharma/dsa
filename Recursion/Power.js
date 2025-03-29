// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exponent) {

    function multiply(count) {
        if (count <= 0) {
            return 1
        }
        return base * multiply(count - 1)
    }
    return multiply(exponent)
}

console.log(power(2, 4))