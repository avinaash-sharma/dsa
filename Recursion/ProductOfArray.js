// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {

    function multiply(arrList) {
        // console.log("🚀 ~ multiply ~ arrList:", arrList)
        if (arrList.length == 0) {
            return 1
        }
        // console.log("🚀 ~ multiply ~ multiply(arrList.slice(1):", multiply(arrList.slice(1)))

        return arrList[0] * multiply(arrList.slice(1))
    }
    console.log(multiply(arr))
}

productOfArray([1, -2, 3, 10, 0])