// Write a function that combines two arrays by alternatingly taking elements from each array in turn.


const mergeArrays = (a, b) => {
  const arr = []
  const maxLength = Math.max(a.length, b.length);
  for (let i = 0; i <= maxLength; i++) {
    a[i] && arr.push(a[i]);
    b[i] && arr.push(b[i]);
  };
  return arr;
}



console.log((mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e'])))