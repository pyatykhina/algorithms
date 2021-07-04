function brackets(string) {
    let stack = [];

    for (let i = 0; i < string.length; i++) {
        if (string[i] === "(" || string[i] === "{" || string[i] === "[" || string[i] === "<") {
            stack.push(string[i]);
        } 
        else if (string[i] === ")") {
            if (stack.pop() !== "(") return false;
        }
        else if (string[i] === "}") {
            if (stack.pop() !== "{") return false;
        }
        else if (string[i] === "]") {
            if (stack.pop() !== "[") return false;
        }
        else if (string[i] === ">") {
            if (stack.pop() !== "<") return false;
        }
    }

    if (stack.length !== 0) return false;

    return true;
}

console.log('brackets("(a) + [b] - {c} + <d>")', brackets("(a) + [b] - {c} + <d>"))
console.log('brackets("(a + [b)] - {c} + <d>")', brackets("(a + [b)] - {c} + <d>"))
console.log('brackets("(a) + (b] - <c} + <d}")', brackets("(a) + (b] - <c} + <d}"))
