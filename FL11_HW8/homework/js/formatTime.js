function formatTime(num) { 
	var days = Math.floor(num/1440);
  var hours = Math.floor((num / 60)%60);  
  var minutes = num % 60;
  return days + ":" + hours + ":" + minutes;         
}

console.log(formatTime(59));