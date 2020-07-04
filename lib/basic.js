/**
 * Calculate the division of arguments
 * @param {*} array
 * division(1, 2, 3, 4); // 0.04166666666666666
 */
exports.division = (...array) => array.reduce((a, b) => a / b);

/**
 * Calculate the mod of collection index
 * @param {*} firstNumber
 * @param {*} secondNumber
 * mod(-1, 5); // 4
 * mod(3, 5);  // 3
 * mod(6, 5);  // 1
 */
exports.mod = (firstNumber, secondNumber) => 
  ((firstNumber % secondNumber) + secondNumber) % secondNumber;

/**
 * Calculate the remainder of division of arguments
 * @param {*} array
 * remainder(1, 2, 3, 4); // 1
 */
exports.remainder = (...array) => array.reduce((a, b) => a % b);

/**
 * Compute the greatest common divisor between two numbers
 * @param {*} firstNumber
 * @param {*} secondNumber
 * remainder(1, 2, 3, 4); // 1
 */
exports.gcd = (firstNumber, secondNumber) => 
  secondNumber === 0 ? firstNumber 
  : gcd(secondNumber, firstNumber % secondNumber);


/**
 * Convert a number to equivalent characters
 * @param {*} number
 * numberToChars(0); // A
 * numberToChars(51); // AZ
 */
exports.numberToChars = number => 
  `${number >= 26 ? toChars(Math.floor(number / 26) - 1) : ''}
  ${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[number % 26]}`;

/**
 * Convert degrees to radians
 * @param {*} deg
 */
exports.degsToRads = deg => (deg * Math.PI) / 180.0;

/**
 * Convert radians to degrees
 * @param {*} rad
 */
exports.radsToDegs = rad => rad * 180 / Math.PI;

/**
 * Get the arrays of digits from a number
 * @param {*} number
 * digits(12345); // [1, 2, 3, 4, 5]
 */
exports.digits = number => 
  `${number}`.split('').map(v => parseInt(v));

/**
 * Round a number to a given number of digits
 * @param {*} number
 * @param {*} decimals
 * round(1.234567, 3); // 1.235
 * round(1.2345678, 5); // 1.23457
 */
exports.round = (number, decimals = 0) => 
  Number(`${Math.round(`${number}e${decimals}`)}e-${decimals}`);