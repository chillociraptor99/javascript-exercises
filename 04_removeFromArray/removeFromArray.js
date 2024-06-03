const removeFromArray = function() {
        const args = Array.from(arguments);
        array = args[0];
        removeValues = args.toSpliced(0,1);
        newArray = Array.from(array);
        
        for (var i = removeValues.length - 1; i >= 0; i--) {
            let position = newArray.indexOf(removeValues[i]);
            finalArray = newArray.toSpliced(position, 1);
            console.log("Array after: " + finalArray);
            newArray = finalArray;
        }
        return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
