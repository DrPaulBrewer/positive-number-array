positive-number-array
----------
[![Build Status](https://travis-ci.org/DrPaulBrewer/positive-number-array.svg?branch=master)](https://travis-ci.org/DrPaulBrewer/positive-number-array)
[![Coverage Status](https://coveralls.io/repos/github/DrPaulBrewer/positive-number-array/badge.svg?branch=master)](https://coveralls.io/github/DrPaulBrewer/positive-number-array?branch=master)



Parses input (string | array), returning an array of positive numbers.  Zero or negative numbers are ignored.

## Installation

`npm i positive-number-array -S`

## Dependencies

None.  Suitable for usage on nodejs or on the browser, via browserify.

## Initialization

`const positiveNumberArray = require('positive-number-array');`

## Usage

Pass a string or an array as input, returns a new array of positive numbers.

```
positiveNumberArray("1,2,3,4,5")
positiveNumberArray("1 2 3 4 5")
positiveNumberArray("1  2  3  4  5 ")
positiveNumberArray("1,2 3 4 5 ")
positiveNumberArray([1,2,3,0,0,4,-1,5])
--> [1,2,3,4,5]
```

## Tests

Use mocha framework.

### Copyright

Copyright 2016 Paul Brewer, Economic and Financial Technology Consulting LLC

### License

MIT

