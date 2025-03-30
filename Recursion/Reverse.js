// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

//with recursion
let count = 1;
function reverse(data) {
    let reversedText = '';
    function reversal(index) {
        if (index < 0) return reversedText
        reversedText += data.charAt(index);
        return reversal(index - 1)
    }
    return reversal(data.length - 1)
}

console.log(reverse('awesome'))


//without recursion

function noRecursionReversal(text) {
    let reversedText = "";
    for (let i = text.length - 1; i >= 0; i--) {
        reversedText = reversedText + text.charAt(i)
    }
    return reversedText;
}

// console.log(noRecursionReversal('awesome'))