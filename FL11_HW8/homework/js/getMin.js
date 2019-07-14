function getMin(numbers) {
 var smallestNumber = numbers[0];
  for (var i = 0; i < numbers.length; i++) {
       if (numbers[i] < smallestNumber) {
         smallestNumber = numbers[i];
       }
  }
    return smallestNumber;
}

console.log(getMin([22,4,8]));