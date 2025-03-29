function outer(input) {
    let outerScopedVariable = [];
    function helper(helperText) {
        // do something with the outerScopedVariable here or any logic
        return helper(helperText - 1)
    }
    helper(input)

    return outerScopedVariable;
}