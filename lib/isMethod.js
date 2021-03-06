/**
 * Pass two number and return true or false if the
 * dividend is divided by divisor
 * @param {*} dividend
 * @param {*} divisor
 */
const isDivisor = (dividend, divisor) => {
  return dividend % divisor == 0;
};

/**
 * Pass a number and return true or false
 * based on if the number is even
 * @param {*} number
 */
const isEven = (number) => {
  return number % 2 == 0;
};

/**
 * Pass a number and return true or false
 * based on if the number is odd
 * @param {*} number
 */
const isOdd = (number) => {
  return number % 2 != 0;
};

/**
 * Pass a number and return true or false
 * if the number is prime or not
 * @param {*} num
 */
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

/**
 * Check palindrome number
 * @param {*} number
 * palindromeNumber(45674); // false
 * palindromeNumber(4567654); // true
 */
const isPalindrome = (number) => {
  var final = 0,
    temp = number;
  while (number > 0) {
    var rem = number % 10;
    number = parseInt(number / 10);
    final = final * 10 + rem;
  }
  return final == temp;
};

/**
 * Check positive number
 * @param {*} number
 * isPositive(45674); // true
 * isPositive(-4567654); // false
 */
const isPositive = (number) => {
  if (number === 0) return false;
  return ((number >> 31) & 1) === 0;
};

/**
 * Check negative number
 * @param {*} number
 * isNegative(45674); // false
 * isNegative(-4567654); // true
 */
const isNegative = (number) => {
  if (number === 0) return false;
  return ((number >> 31) & 1) === 1;
};

/**
 * Check isPowerOfTwo number
 * @param {*} number
 * isPowerOfTwo(35); // false
 * isPowerOfTwo(32); // true
 */
const isPowerOfTwo = (number) => {
  if (number < 1) return false;
  return (number & (number - 1)) === 0;
};

module.exports = {
  isDivisor,
  isEven,
  isOdd,
  isPrime,
  isPalindrome,
  isPositive,
  isNegative,
  isPowerOfTwo,
};
