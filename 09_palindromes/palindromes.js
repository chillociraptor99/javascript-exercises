const palindromes = function (word) {
    let noPunc = word.match(/[^_\W]+/g).join('');
    let lowerC = noPunc.toLowerCase()
    strArray = Array.from(lowerC);
    revArray = strArray.toReversed();
    revvedArray = revArray.join('');
    console.log(lowerC + "=" + revvedArray);
    return revvedArray === lowerC;
};

// Do not edit below this line
module.exports = palindromes;
