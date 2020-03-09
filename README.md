# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jsexton/lotide`

**Require it:**

`const _ = require('@jsexton/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element of an array
* `tail(array)`: Returns the tail (all elements after head) of an array
* `middle(array)`: Returns the middle element of an array with an odd number of elements or the two middle elements for an even number
* `countLetters(string)`: Returns an object with keys for each letter in the input string and values for the number of occurrence for each letter 
* `countOnly(allItems, itemsToCount)`: allItems: an array of strings that we need to look through; itemsToCount: an object specifying what to count; Returns an object with the items specified in the itemsToCount parameter with occurance values
* `eqArrays(array1, array2)`: Returns true if both array arguments contain the same values; false otherwise
* `eqObjects(object1, object2)`: Returns true if both object arguments contain the same key: value pairs
* `findKey(object, callback)`: Higher-order function that accepts an object and a callback function. Will call callback function on each object value and return the key of the first value which is true via the callback function.
* `findKeyByValue(object, searchValue`: Will return the key of the object property that has a value matching the searchValue parameter.
* `flatten(array)`: Takes in an array with nested arrays as an argument and returns a flattened array composed of every individual element in each array.
* `letterPositions(string)`: Takes in a string as an argument and returns an object with a key for every letter present in the string paired with an array listing the various index positions of each particular letter in the string.
* `map(array, callback)`: Takes in an array and a callback function and returns a new array with the results of passing every array item through the function.
* `takeUntil(array, callback)`: Takes in an array and a callback function as arguments and returns a new array with all the elements of the first array that return true in the callback.
* `without(array, itemsToRemove)`: Takes in two arrays as arguments and returns a new array with all the elements of the first array that are not present in the second array.
