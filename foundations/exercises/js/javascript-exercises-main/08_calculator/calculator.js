const add = function(a, b) {  
  return a + b
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  if (a.length === 0) {
    return 0;
  }

	return parseInt(a.reduce((b, c) => b + c, 0));
};

console.log(sum([7, 11]));

const multiply = function(a) {
  return a.reduce((b, c) => b * c, 1);
};

const power = function(a, b) {
  let c = 1;
  for (let i = 0; i < b; i++) {
    c *= a;
  }

  return c;
};

const factorial = function(a) {
	if (a === 0) {
    return 1;
  }

  for (let i = a - 1; i > 0; i--) {
    a *= i;
  }

  return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
