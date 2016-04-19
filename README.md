### Bit converter
[![Build Status](https://travis-ci.org/sweetim/bit-converter.svg?branch=master)](https://travis-ci.org/sweetim/bit-converter)
[![codecov.io](https://codecov.io/github/sweetim/bit-converter/coverage.svg?branch=master)](https://codecov.io/github/sweetim/bit-converter?branch=master)
[![devDependency Status](https://david-dm.org/sweetim/bit-converter/dev-status.svg)](https://david-dm.org/sweetim/bit-converter#info=devDependencies)

This module is inspired by C# `BitConverter` class to convert byte array to `byte`, `short` and `int`.

The conversion to signed number is based on double complement.

This module is used often for `serialport` development which requires a lot of byte array manipulation

#### Example

```javascript
'use strict';

const BitConverter = require('bit-converter');

const a = BitConverter.toShort([0xFF, 0xFF]);

console.log(a) // -1

//Starting index for the array = 1
const b = BitConverter.toShort([0, 0xFF, 0xFF], 1);

console.log(b) // -1

```


#### API

##### toByte(array[, startIndex])

`array` the source array to be converted

`startIndex` is the start index of the array

##### toShort(array[, startIndex])

`array` the source array to be converted

`startIndex` is the start index of the array

##### toInt(array[, startIndex])

`array` the source array to be converted

`startIndex` is the start index of the array
