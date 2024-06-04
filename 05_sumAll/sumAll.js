const sumAll = function () {
    let args = Array.from(arguments);
    if (!Number.isInteger(args[0]) || !Number.isInteger(args[1])) {
        return "ERROR";
    } else if (args[0] < 0 || args[1] < 0) {
        return "ERROR";
    } else {
        args = args.sort();
        let counter = ((args[1] - args[0]) - 1);
        let midSums = 0;
        while (counter >= 1) {
        midSums += (args[1] - counter);
        counter--;
        }
        allSum = (midSums + args[0] + args[1]);
        return allSum;
    }
  };

// Do not edit below this line
module.exports = sumAll;
