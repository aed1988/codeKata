/*
You are given an array of positive ints where every element appears three times, except one that appears only once (let's call it x) and one that appears only twice (let's call it y).
Your task is to find x * x * y.
Example
For arr=[1, 1, 1, 2, 2, 3], the result should be 18
3 x 3 x 2 = 18
For arr=[6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200], the result should be 4000000
200 x 200 x 100 = 4000000
Input/Output
[input] integer array arr
an array contains positive integers.
[output] an integer
The value of x * x * y
*/

const missingValues = (arr) => {
  let obj = {};
  arr.map(elem => !obj[elem] ? obj[elem] = 1 : obj[elem] += 1);
  const newArr = Object.entries(obj).filter(elem => elem[1] <= 2);
  const calculatedNumber = newArr.reduce((acc, current) => {
    if (current[1] === 1) {
      return (current[0] * current[0]) * acc
    } else {
      return current[0] * acc
    }
  }, 1)
  return calculatedNumber;
};

test('Pass simple tests', () => {
  expect(missingValues([1, 1, 1, 2, 2, 3])).toBe(18);
  expect(missingValues([6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200])).toBe(4000000);
})



// Best method
function missingValuesBM(a) {
  const x = a.find( v => a.filter( w => v===w ).length===1 );
  const y = a.find( v => a.filter( w => v===w ).length===2 );
  return x*x*y;
}
