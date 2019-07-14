function isInteger(num) {  
   if (typeof num !== 'number') {
 return false; 
}   
  return !isNaN(num) && 
         parseInt(Number(num)) === num && 
         !isNaN(parseInt(num, 10));
}
console.log(isInteger(23));