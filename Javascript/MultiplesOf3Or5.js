/* 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
*/


// INITIAL SOLUTION
const solution = (number) => {
  let arr = [];
  for ( i = 1; i < number; i++ ) {
    if (i % 3 === 0 ) {
      arr.push(i)
    } else if (i % 5 === 0) {
      arr.push(i)
    }
  }
  return arr.length > 0 ? arr.reduce((curr, acc) => curr + acc) : 0
}


// REFACTORED SOLUTION
const solutionRF = (number) => {
  let arr = [];
  for ( i = 1; i < number; i++ ) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i)
    }
  }
  return arr.length > 0 ? arr.reduce((curr, acc) => curr + acc) : 0
}


// FAVOURITE SOLUTION
function solutionFav(number){
    let sum = 0;
    
    for(let i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
}

console.log(solutionF(10));