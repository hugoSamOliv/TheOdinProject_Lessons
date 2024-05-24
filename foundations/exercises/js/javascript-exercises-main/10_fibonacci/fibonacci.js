const fibonacci = function(index) {
    index = parseInt(index);

    if (index === 0) {
        return 0;
    }

    if (index < 0) {
        return "OOPS";
    }

    let initialNumber = 1;
    let anotherNumber = 0;


    for (let i = 0; i < index; i++) {
        if (i > 0) {
            let temp = initialNumber + anotherNumber;
            anotherNumber = initialNumber;
            initialNumber = temp;
        }
    }

    return initialNumber;
};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
