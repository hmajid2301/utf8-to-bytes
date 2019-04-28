const data = [
  {
    bytes: [
      "01001000",
      "01100101",
      "01101100",
      "01101100",
      "01101111",
      "00100000",
      "01010111",
      "01101111",
      "01110010",
      "01101100",
      "01100100",
      "00100001"
    ],
    decimal: [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33],
    str: "Hello World!"
  },
  {
    bytes: [
      "01010100",
      "01100101",
      "01110011",
      "01110100",
      "00100000",
      "01001101",
      "01100101",
      "01110011",
      "01110011",
      "01100001",
      "01100111",
      "01100101"
    ],
    decimal: [84, 101, 115, 116, 32, 77, 101, 115, 115, 97, 103, 101],
    str: "Test Message"
  },
  {
    bytes: [
      "11110000",
      "10011111",
      "10010000",
      "10001101",
      "00100000",
      "01010111",
      "01101001",
      "01110100",
      "01101000",
      "00100000",
      "01000101",
      "01101101",
      "01101111",
      "01101010",
      "01101001",
      "01110011",
      "00100000",
      "11110000",
      "10011111",
      "10010000",
      "10110011",
      "11110000",
      "10011111",
      "10010011",
      "10011100"
    ],
    decimal: [
      240,
      159,
      144,
      141,
      32,
      87,
      105,
      116,
      104,
      32,
      69,
      109,
      111,
      106,
      105,
      115,
      32,
      240,
      159,
      144,
      179,
      240,
      159,
      147,
      156
    ],
    str: "🐍 With Emojis 🐳📜"
  }
];
import { arrayToString, stringToArray } from "../src";

test.each(data)("Convert String to Array", ({ str, decimal, bytes }) => {
  const decArray = stringToArray(str, false);
  const binaryArray = stringToArray(str, true);

  expect(decArray).toEqual(decimal);
  expect(binaryArray).toEqual(bytes);
});

test.each(data)("Convert Array to String", ({ str, decimal, bytes }) => {
  const strDec = arrayToString(decimal);
  const strBin = arrayToString(bytes);

  expect(strDec).toEqual(str);
  expect(strBin).toEqual(str);
});
