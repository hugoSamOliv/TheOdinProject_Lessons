const removeFromArray = function(array, ...args) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let comparisonCounter = 0;
        for (let j = 0; j < args.length; j++) {
            if (array[i] !== args[j]) {
                comparisonCounter++;
            } else {
                break;
            }

            if (comparisonCounter === args.length) {
                newArray.push(array[i]);
            }
        }
    }

    return newArray;
};
console.log(removeFromArray([1,2,3,4,5,6,7], 2, 6, 1, 5, 4));

// Do not edit below this line
module.exports = removeFromArray;
