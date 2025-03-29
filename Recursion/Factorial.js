// get factorial 4 = 4*3*2*1

const getFactorial = (number) => {
    if (number === 1) {
        console.log(number);
        return number
    }
    console.log(number)
    return number * getFactorial(number - 1)
}

console.log(getFactorial(10))