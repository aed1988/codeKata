// Count the divisors of a number

const getDivisorsCount = (num) => {
  const arr = [];
  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      arr.push(i);
      if (num / i !== i) {
        arr.push(num/i)
      }
    }
  }
  console.log(arr.sort((a,b) => a - b))
  return arr.sort((a,b) => a - b).length
}

getDivisorsCount(12, "[1,2,3,4,6,12]")