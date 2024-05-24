const palindromes = function (word) {
    let allowedChars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let brokenWord = word.toLowerCase().split("").filter(character => allowedChars.includes(character))
    word = word.toLowerCase().split("").filter(character => allowedChars.includes(character)).join("");

    let reverseWord = "";
    for (let i = brokenWord.length - 1; i >= 0; i--) {
        reverseWord += brokenWord[i];
    }

    console.log(word);
    console.log(reverseWord);
    console.log(brokenWord);

    if (word === reverseWord) {
        return true;
    }

    return false
};

console.log(palindromes("wow"));

// Do not edit below this line
module.exports = palindromes;
