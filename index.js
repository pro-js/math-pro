/**
 * Pass two parameter and
 * return teh the sum of tow numbers
 *
 * @param {*} firstNumber
 * @param {*} secondNumber
 */
const addition = (firstNumber, secondNumber) => firstNumber + secondNumber;

/**
 * Pass an array and add all the
 * elements, return the result
 * @param {*} array
 */
const sumArray = (array) => array.reduce((a, b) => a + b);

/**
 * Pass two number and subtract
 * second number from first one
 * @param {*} biggerNumber
 * @param {*} smallerNumber
 */
const subtraction = (biggerNumber, smallerNumber) =>
  biggerNumber - smallerNumber;

/**
 * Pass two number and return
 * the multiplication of two number
 * @param {*} firstNumber
 * @param {*} secondNumber
 */
const multiplication = (firstNumber, secondNumber) =>
  firstNumber * secondNumber;

/**
 * Pass an array and return the
 * multiplication of the whole array
 * @param {*} array
 */
const multiplyArray = (array) => array.reduce((a, b) => a * b);

/**
 * Pass two number and divide those
 * number
 * @param {*} dividend
 * @param {*} divisor
 */
const division = (dividend, divisor) => dividend / divisor;

/**
 * Pass two number and return
 * the remainder
 * @param {*} dividend
 * @param {*} divisor
 */
const getRemainder = (dividend, divisor) => dividend % divisor;

/**
 * Pass two number and return true or false if the
 * dividend is divided by divisor
 * @param {*} dividend
 * @param {*} divisor
 */
const isDivisor = (dividend, divisor) => dividend % divisor == 0;

/**
 * Pass a number and return true or false
 * based on if the number is even
 * @param {*} number
 */
const isEven = (number) => number % 2 == 0;

/**
 * Pass a number and return true or false
 * based on if the number is odd
 * @param {*} number
 */
const isOdd = (number) => number % 2 != 0;