//pureRecursionWay
function collectOddValues(arr) {
    let newArra = [];

    if (arr.length === 0)
        return newArra;

    if (arr[0] % 2 !== 0)
        newArra.push(arr[0])

    newArra = newArra.concat(collectOddValues(arr.slice(1)))
    return newArra;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7]))


// helperFunction Approach

let newArr = [];
function collectOddValuesHelperFunction(arr) {

    if (arr.length === 0)
        return newArr;

    if (arr[0] % 2 !== 0)
        newArr.push(arr[0])

    newArr = collectOddValuesHelperFunction(arr.slice(1))
    return newArr;
}

console.log(collectOddValuesHelperFunction([1, 2, 3, 4, 5, 6, 7]))