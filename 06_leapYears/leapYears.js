const leapYears = function(year) {
    let remaindFour = year % 4;
    let remaindFourhund = year % 400;
    console.log(remaindFour + remaindFourhund);
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
