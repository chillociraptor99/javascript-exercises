const removeFromArray = function (array, ...check) {
    const newArray = [];
    array.forEach((element) => {
      if (!check.includes(element)) {
        newArray.push(element);
      }
    });
    return newArray;
  };

// Had to reference solution for this. Rest function is "...LABEL" and means "rest of arguments." 
// This takes the input and passes an array from first argument
// followed by the elements to check against array.
// Next it looks at each passed element and if that element is NOT included in the "rest"
// pushes it into a new array that we return at the end.

module.exports = removeFromArray;
