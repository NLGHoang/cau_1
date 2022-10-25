const findMaxNumber = (arr) => {
  return arr
    .map((x) => x.toString())
    .sort((a, b) => {
      return (b + a) * 1 - (a + b) * 1;
    })
    .join('');
};

console.log(findMaxNumber([1, 10, 11]));
console.log(findMaxNumber([99, 19, 29, 39, 11, 21, 32, 33, 35, 50, 60, 90]));
console.log(findMaxNumber([1, 10, 19, 11, 13, 16, 19]));
