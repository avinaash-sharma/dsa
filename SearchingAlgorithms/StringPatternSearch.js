function findString(longString, pattern) {
    let count = 0;
    // console.log("🚀 ~ findString ~ pattern.length:", pattern.length)
    for (let i = 0; i < longString.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            // console.log("🚀 ~ findString ~ longString.charAt(i):", longString.charAt(i))
            // if (longString.charAt(i) !== pattern.charAt(j)) {
            //     console.log("🚀 ~ findString ~ longString.charAt(i) !== pattern.charAt(j):", i, longString.charAt(i), j, pattern.charAt(j))
            //     break;
            // }
            if (longString.charAt(i) === pattern.charAt(j)) {
                // console.log("🚀 ~ findString ~ longString.charAt(i) === pattern.charAt(j):", longString.charAt(i), pattern.charAt(j))
                count++;
            }
            if (count === pattern.length) {
                return true
            }
            // console.log('count', count)
        }
    }

    if (count !== pattern.length) {
        return false
    }

}


console.log(findString('hello People', 'hell'))