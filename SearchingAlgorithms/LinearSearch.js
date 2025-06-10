// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

// Don't use indexOf to implement this function!


function linearSearch(array, searchKey) {
    // add whatever parameters you deem necessary - good luck!
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchKey) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15))