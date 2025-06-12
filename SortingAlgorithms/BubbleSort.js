function bubbleSort(arr) {
    const swap = (arr, id1, id2) => {
        [arr[id1], arr[id2]] = [arr[id2], arr[id1]]
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log("🚀 ~ bubbleSort ~ arr:", arr, arr[i], arr[j])
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }

    return arr
}

console.log(bubbleSort([1, 2, 6, 7, 0]))