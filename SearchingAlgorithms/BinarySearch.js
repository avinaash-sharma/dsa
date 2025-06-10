// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

function binarySearch(sortedArray, searchKey) {
    console.log("🚀 ~ binarySearch ~ sortedArray:", sortedArray)
    let left = 0;
    let right = sortedArray.length - 1;
    console.log("🚀 ~ binarySearch ~ right:", right)
    while (left <= right) {
        let mid = Math.ceil((left + right) / 2);
        console.log("🚀 ~ binarySearch ~ mid:", mid)
        if (sortedArray[mid] === searchKey) {
            return mid;
        }
        if (sortedArray[mid] > searchKey) {
            right = mid - 1;
        }
        if (sortedArray[mid] < searchKey) {
            left = mid + 1;
        }
    }

    return -1;

}


console.log("🚀 ~ binarySearch([1,2,3,4,5],2):", binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95))
