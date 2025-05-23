// Frequency Counter - findAllDuplicates

// Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

// console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])) // array with 2 and 3
//     findAllDuplicates([4, 3, 2, 1, 0]) // []
//     findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1


function findAllDuplicates(data) {
    let valueCount = {};
    let duplicatedArray = [];

    data.forEach(element => {
        if (valueCount[`${element}`]) {
            // will get undefined if the value is not repeated if repeated we will get 1
            duplicatedArray.push(element);
        } else {
            valueCount[`${element}`] = 1;
        }
    })
    return duplicatedArray;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))