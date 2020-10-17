function checkForMatchingBrackets(strArg) {
    if(strArg.length == 0) { return true; } // if the string is empty, then there are no brackets.
    if(strArg[0] == "}") { return false; } // can't start with a closing bracket.
    let leftBrackets = 0;
    let rightBrackets = 0;
    for(let i = 0; i < strArg.length; i++) {
        let potentialBracket = strArg[i];
        switch(potentialBracket) {
            case "{":
                leftBrackets += 1; break;
            case "}":
                rightBrackets += 1; break;
            default: break;
        }
    }
    if(leftBrackets === rightBrackets) { return true; }
    return false
}

function sumOfMultiples(first, second, below) {
    let sum = 0;
    for(let m = first; m < below; m++) {
        if(m % first == 0 || m % second == 0) {
            sum += m;
        }
    }
    return sum;
}

module.exports = {
    checkForMatchingBrackets,
    sumOfMultiples
}