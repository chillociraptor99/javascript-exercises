const sumAll = function () {
    let args = Array.from(arguments);
    if (isNaN(args[0]) || isNaN(args[1])) {
        return "ERROR";
    } else if (args[0] < 0 || args[1] < 0) {
        return "ERROR";
    } else {
        args = args.sort();
        let counter = ((args[1] - args[0]) - 1);
        console.log("Counter: " + counter);
        let midSums = 0;
        while (counter >= 1) {
            console.log("Args last: " + args[1]);
        midSums += (args[1] - counter);
        counter--;
        }
        console.log("Mid Sums: " + midSums);
        allSum = (midSums + args[0] + args[1]);
        console.log("Final sum: " + allSum);
        return allSum;
    }
  };

// Do not edit below this line
module.exports = sumAll;
