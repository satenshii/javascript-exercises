const removeFromArray = function (arr, ...args) {
    return arr.filter((current) => !args.includes(current));
};

// Do not edit below this line
module.exports = removeFromArray;
