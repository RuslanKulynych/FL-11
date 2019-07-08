// Your code goes here
var a = parseInt(prompt('enter a', a));
var b = parseInt(prompt('enter b', b));
var c = parseInt(prompt('enter c', c));

var res = '';

if(a > b + c || a < Math.abs(b - c) || (b > a + c || b < Math.abs(a - c))
	|| (c > b + a || c < Math.abs(b - a))){
	res = 'Triangle doesn’t exist';
} else if(a === b && b === c){
	res = 'Equivalent triangle';
} else if(a === b || b === c || c === a){
	res = 'Isosceles triangle';
} else {
	res = 'Normal triangle';
}

console.log(res);
