const ex1 = 'The quick brown fox jumped over the lazy dog';
const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
const ex3 = 'The salad costs $9.99';
const ex4 = 'Contact customer support on 0800 300 500';
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';

// Exercise 01
// Using a regex pattern, get the 3 letter words in the ex1 string.
console.log(ex1.match(/^... | ... |...$/ig))



// Exercise 02
// Using a regex pattern, remove all of the numbers from the ex2 string.

console.log(ex2.replace(/[0-9]/g, ''))



// Exercise 03
// Using a regex pattern, find the monetary value contained within the ex3 string.

console.log(ex3.match(/\$[0-9]{1,}\.[0-9]{2}/ig))

// Exercise 04
// Using a regex pattern, find the telephone number contained within the ex4 string.


console.log(ex4.match(/\d{3,4}\s\d{3}\s\d{3}/g))



// Exercise 05
// Using a regex pattern, find the email address contained within the ex5 string.


console.log(ex5.match(/[a-z0-9]{2,}\@[a-z0-9]{2,}\.[a-z]{2,}(\.[a-z]{2,})?/ig))


const ex6 = 'Grade 1Grade 2Grade 3Grade 4Grade 5'
const ex7 = 'The pheasant has no agenda'
const ex8 = '75, 50 : 123 / 900 - 321 + 900 = 55'
const ex9 = 'My name is: James'
const ex10 = `Did you find any droids? No, sir. If there were any on board, they must also have jettisoned. Send a scanning crew on board. I want every part of this ship checked. Yes, sir. I sense something...a presence I haven't felt since... Get me a scanning crew in here on the double. I want every part of this ship checked! Boy, it's lucky you've these compartments. I use them for smuggling. I never thought I'd be smuggling myself in them. This is ridiculous. Even if I could take off, I'd never get past the tractor beam.`

// Exercise 01
// Using a regex, get an array of the grade values e.g. Grade 1, Grade 2 ...

const gradeArray = ex6.match(/Grade \d{1,}/ig)
console.log(gradeArray)


// Exercise 02
// Using a regex, determine whether the string contains the substring 'agenda' or 'age'


console.log(/agenda/.test(ex7))


// Exercise 03
// Using a regex, get an array of numbers that are contained in the string (removing any symbols)


console.log(ex8.match(/\d{1,}/ig))


// Exercise 04
// Using a regex, find out the name contained in the string (after the semicolon :)


console.log(ex9.match(/\:\s\S+/ig))


// Exercise 05
// Using a regex, find the number of contractions used in the string.


console.log(ex10.match(/\'/ig).length)

