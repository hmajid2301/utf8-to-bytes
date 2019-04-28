[![pipeline status](https://gitlab.com/hmajid2301/utf8-to-bytes/badges/master/pipeline.svg)](https://gitlab.com/hmajid2301/utf8-to-bytes/commits/master)

[![coverage report](https://gitlab.com/hmajid2301/utf8-to-bytes/badges/master/coverage.svg)](https://gitlab.com/hmajid2301/utf8-to-bytes/commits/master)

[![npm version](https://img.shields.io/npm/v/utf8-to-bytes.svg)](https://www.npmjs.com/package/utf8-to-bytes)

# Introduction

This is a simple npm package that is used to convert strings from utf-16, to utf-8 then, to a decimal (byte) array.
You can also used it to convert from a decimal (byte) array back to utf-16.

## Installation

Using npm:

```bash
npm i --save utf8-to-bytes
```

Using yarn:

```bash
yarn add utf8-to-bytes
```

## Usage

To convert a string into an array.

```javascript
import { stringToArray } from "utf8-to-bytes";

const arr = stringToArray("Hello World!"); // [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]
```

You can convert a string into an byte array.

```javascript
import { stringToArray } from "utf8-to-bytes";

const arr = stringToArray("He", true); // ["01001000", "01100101"]
```

You convert other UTF-8 characters like emojis.

```javascript
import { stringToArray } from "utf8-to-bytes";

const arr = stringToArray("🐍 With Emojis 🐳📜"); //  [ 240, 159, 144, 141, 32, 87, 105, ...],
```

To convert an array (byte or decimal) back into a string.

```javascript
import { arrayToString } from "utf8-to-bytes";

const bytes = ["01001000", "01100101"];
const strBin = arrayToString(bin); // "He"

const decs = [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33];
const strDec = arrayToString(decs); // "Hello World!"

const emojis = arrayToString([240, 159]); // "🐍"
```

## Changelog

[Link to Changelog](https://gitlab.com/hmajid2301/utf8-to-bytes/blob/master/CHANGELOG.md)

## License

[Apache 2.0](https://gitlab.com/hmajid2301/utf8-to-bytes/blob/master/LICENSE)

## Other

- Inspired by [convert-string](https://www.npmjs.com/package/convert-string)

### Credit

Logo images are a mix of the following two images:

- [Binary Image](https://www.flaticon.com/free-icon/binary_1715657#term=binary&page=1&position=24)
- [Converter Image](https://www.flaticon.com/free-icon/convert_1367012)
