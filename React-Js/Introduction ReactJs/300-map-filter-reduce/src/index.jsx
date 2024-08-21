
/*Example*/
var numbers = [3, 56, 2, 48, 5];
//Map -Create a new array by doing something with each item in an array.

const double = numbers.map((num) => {
  return num * 2;
});
console.log(double);

const triple = [];
numbers.forEach((num) => {
  return triple.push(num * 3);
});
console.log(triple);
//Filter - Create a new array by keeping the items that return true.
const divideby2 = numbers.filter((num) => {
  return num % 2 == 0;
});
console.log(divideby2);

//Reduce - Accumulate a value by doing something to each item in an array.
const reducePractice = numbers.reduce((newArray, currentNumber) => {
  return newArray + currentNumber;
});
console.log(reducePractice);
//Find - find the first item that matches from an array.
const findMethod = numbers.find((num) => {
  return num > 10;
});
console.log(findMethod);
//FindIndex - find the index of the first item that matches.
const findIndexMethod = numbers.findIndex((index, value) => {
  return index > 10;
});
console.log(numbers[findIndexMethod]);


/*Challenge*/
import emojipedia from "./emojipedia";

const meaningEmojiWayF = [];

emojipedia.map((emoji) => {
  return meaningEmojiWayF.push(emoji.meaning.substring(0, 100));
});

console.log(meaningEmojiWayF);
