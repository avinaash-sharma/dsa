// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

//     sameFrequency(182,281) // true
//     sameFrequency(34,14) // false
//     sameFrequency(3589578, 5879385) // true
//     sameFrequency(22,222) // false

function sameFrequency(numberOne, numberTwo) {
    // good luck. Add any arguments you deem necessary.

    if (numberOne.toString().length !== numberTwo.toString().length) {
        return false;
    }
    let sumOfOne = 0, sumOfTwo = 0;
    while (numberOne > 0 && numberTwo > 0) {
        sumOfOne += numberOne % 10;
        numberOne = Math.floor(numberOne / 10);  // Fix: correctly updating numberOne

        sumOfTwo += numberTwo % 10;
        numberTwo = Math.floor(numberTwo / 10);  // Fix: correctly updating numberTwo
    }

    return sumOfOne === sumOfTwo;

}

sameFrequency(182, 281)
