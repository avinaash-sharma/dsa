// Frequency Counter / Multiple Pointers - areThereDuplicates

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

//     areThereDuplicates(1, 2, 3) // false
//     areThereDuplicates(1, 2, 2) // true 
//     areThereDuplicates('a', 'b', 'c', 'a') // true 

// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

function areThereDuplicates(...args) {
    // good luck. (supply any arguments you deem necessary.)
    args.sort();
    let count = 0;
    for (let i = 1; i < args.length; i++) {
        if (args[i] === args[i - 1]) {
            count++;
        }
    }

    if (count > 0) {
        return true
    } else {
        return false
    }
}
console.log(areThereDuplicates(1, 2, 3))