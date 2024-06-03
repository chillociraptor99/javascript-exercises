const reverseString = function(word) {
    strArray = Array.from(word);
    revArray = strArray.toReversed();
    revvedArray = revArray.join('');
    return revvedArray;
};

// Do not edit below this line
module.exports = reverseString;
