// Instruction
/*
For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/

// Solution

const sortByLength = (a) => a.sort((a, b) => a.length - b.length);;

console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]))