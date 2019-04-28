/**
 * Converts a decimal/binary array into a UTF8 string.
 *
 * @param arr: An array (in decimal or binary) to convert into string.
 *
 * @return The string representation of the decimal/binary array.
 */
const arrayToString = (arr: number[] | string[]) => {
  let decimalArray = arr as number[];
  if (isStringArray(arr)) {
    decimalArray = (arr as string[]).map(binaryToDecimal);
  }

  const str = decimalArray.map(decimalToChar).join("");
  const utf8 = decodeURIComponent(escape(str));
  return utf8;
};

/**
 * Checks if an array is of type string[], i.e. every item is a string.
 *
 * @param arr: The array to check if it's of type string[].
 *
 * @return True if the array is of type string[].
 */
const isStringArray = (arr: any): boolean => {
  const isArray = Array.isArray(arr);
  const everyItemString = arr.every((item: any) => typeof item === "string");
  return isArray && everyItemString;
};

/**
 * Converts a binary string to decimal number.
 *
 * @param binary: A binary string.
 *
 * @return The binary string as a decimal integer.
 */
const binaryToDecimal = (binary: string) => {
  return parseInt(binary, 2);
};

/**
 * Converts a decimal value to its UTF8 string.
 *
 * @param num: An decimal number.
 *
 * @return The string representation of the decimal number.
 */
const decimalToChar = (num: number) => {
  return String.fromCharCode(num);
};
/**
 * Converts an string (UTF-16) into an array of decimal/binary.
 *
 * @param string: An UTF-16/UTF-8 string, to convert.
 *
 * @param binary: If set to true will return a binary array.
 *
 * @return An array of decimal/binary representation of the string.
 */
const stringToArray = (str: string, binary = false) => {
  const utf8 = unescape(encodeURIComponent(str));
  const characters = utf8.split("");
  const bytes = characters.map(charToDecimal);

  let array: number[] | string[] = bytes;
  if (binary) {
    array = bytes.map(decimalToBinary);
  }
  return array;
};

/**
 * Converts an decimal integer (0 - 255) into a byte (binary string).
 *
 * @param dec: The decimal integer to convert, between 0 - 255.
 *
 * @return The binary string padded to a byte.
 */
const decimalToBinary = (dec: number) => {
  return dec.toString(2).padStart(8, "0");
};

/**
 * Converts a character to its UTF8 decimal value.
 *
 * @param character: A character (unicode).
 *
 * @return The decimal value of the character.
 */
const charToDecimal = (character: string) => {
  return character.charCodeAt(0);
};

export { stringToArray, arrayToString };
