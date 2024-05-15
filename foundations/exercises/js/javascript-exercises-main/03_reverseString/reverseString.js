const reverseString = function(string) {
    let chars = string.split("");
    let reversed = [];
    for (let i = 1; i <= chars.length; i++) {
        reversed.push(chars[chars.length - i]);
    }

    return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
