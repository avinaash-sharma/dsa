// print sum range if input is 3 then - 3+2+1

function sumRange(num) {
    if (num === 1) {
        console.log(num);
        return 1;
    }
    console.log(num);
    return num + sumRange(num - 1);
}

console.log('=> ', sumRange(10))