// @ts-check

/**
 * Converts the array to string.
 *
 * @param {number[]} array
 * @returns {string} connected array as string
 */
function convertArrayToString(array) {
  let connectedArrayAsString = "";
  array.forEach((el) => (connectedArrayAsString += el));
  return connectedArrayAsString;
}
/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return (
    Number(convertArrayToString(array1)) + Number(convertArrayToString(array2))
  );
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let numberAsArrayOfStrings = String(value).split("");
  return (
    String(numberAsArrayOfStrings) === String(numberAsArrayOfStrings.reverse())
  );
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  let errorMessage = "";
  if (!input) {
    errorMessage = "Required field";
  } else if (!Number(input)) {
    errorMessage = "Must be a number besides 0";
  }
  return errorMessage;
}
