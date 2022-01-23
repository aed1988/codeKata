/* 
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
*/


// INITIAL SOLUTION
const digital_root = (n) => {
  const arr = n.toString().split('');
  if (arr.length === 1) return n;
  if (arr.length > 1) {
    return digital_root(arr.reduce((acc,curr) => parseInt(acc) + parseInt(curr)))
  }
}

// REFACTORED SOLUTION
const digital_rootRF = (n) => {
  if (n < 10) return n;
  if (n >= 10) {
    return digital_root(n.toString().split('').reduce((acc,curr) => acc + +curr, 0))
  }
}

// FAVOURITE SOLUTION
function digital_rootF(n) {
  return--n%9+1;
}

console.log(digital_rootRF(7))
console.log(digital_rootRF(17))
console.log(digital_rootRF(456))