let repeated = "";

const repeatString = function(word,num) {
    repeated = "";
    for (let i = 0; i < num; i++) {
     repeated += word;
    }
    if (num < 0) {
        repeated = "ERROR";
    }
    return repeated;
};


// Do not edit below this line
module.exports = repeatString;
