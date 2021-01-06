/* 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/


// INITIAL SOLUTION
const getCount = (str) => {
  let vowelsCount = 0;
  // enter your majic here
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let arr = str.split('');
  arr.map(letter => { if(vowels.includes(letter)) { vowelsCount += 1 } });
  return vowelsCount;
}


// REFACTORED SOLUTION
const getCount = (str) => {
  let vowelsCount = 0;
  // enter your majic here
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  str.split('').map(letter => { if(vowels.includes(letter)) { vowelsCount += 1 } });
  return vowelsCount;
}

// FAVOURITE SOLUTION
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}


console.log(getCount('abracadabra'))