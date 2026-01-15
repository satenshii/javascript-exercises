const palindromes = function (string) {
    const dict = "123456789abcdefghijklmnopqrstvwxyz";
    const lowercaseString = string.toLowerCase();
    const filteredLetters = lowercaseString.split("").filter((letter) => dict.includes(letter));
    const filteredString = filteredLetters.join();
    const filteredReverseString = filteredLetters.reverse().join();
    return filteredString === filteredReverseString;
};

// Do not edit below this line
module.exports = palindromes;
