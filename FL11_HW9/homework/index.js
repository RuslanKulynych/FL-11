// Your code goes here
/* 0. */
const getNumbers = (string) => {
	let arr = [];
	for (const item of string.split('')) {
		parseInt(item) ? arr = [ ...arr, parseInt(item)] : arr
	}
	return arr;
}

console.log(getNumbers('string'));
console.log(getNumbers('n1um3ber95'));


/* 1. */
const findTypes = (...restArgs) => {
	return restArgs.reduce(function(obj, item) {
		if (!obj[typeof item]) {
			obj[typeof item] = 0;
		}
		obj[typeof item]++;
		return obj;
	}, {})
}

console.log(findTypes(null, 5, 'hello', 'hi', true));
console.log(findTypes());


/* 2. */
const executeforEach = (arr, fn) => {
	const str =`log ${arr.join(' ')}`;
	fn(str);
}

executeforEach([1,2,3], function(el) {
 console.log(el) 
}) 

/* 3 */
const mapArray = (arr, fn) => {
	let newArr = [];
	for (const item of arr) {
		newArr = [ ...newArr, fn(item) ] 
	}
	return newArr;
}

console.log(mapArray([2, 5, 8], function(el) {
 return el + 3 
}))

/* 5  */
function showFormattedDate(date) {
  let monthNames = [
  'Jan', 'Feb', 'Mar',
  'Apr', 'May', 'Jun', 'Jul',
  'Aug', 'Sep', 'Oct',
  'Nov', 'Dec'
  ];

  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();
  return 'Date: ' + year + ' ' + monthNames[monthIndex] + ' ' + day;
}

console.log(showFormattedDate(new Date()));

/* 6 */
console.log(!isNaN(new Date('2016-13-18T00:00:00').getTime()));
console.log(!isNaN(new Date('2016-12-18T00:00:00').getTime()));



/* 7 */
let data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    ' birthday ': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    ' birthday ': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    ' birthday ': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];

console.log(
  Math.floor(
    (new Date('2016-04-19T00:00:00') - new Date('2016-03-19T00:00:00')) / (3600 * 24 * 1000)
    )
  );


/*9*/
const data1 = {
  '_id': '5b5e3168c6bf40f2c1235cd6',
  'index': 0,
  'birthday ': '2016-03-18T00:00:00',
  'eyeColor': 'green',
  'name': 'Stein',
  'favoriteFruit': 'apple'
};
Object.keys(data1).forEach(item => {
  console.log(item);
});
/* 10 */
const data2 = {
  '_id': '5b5e3168c6bf40f2c1235cd6',
  'index': 0,
  'birthday ': '2016-03-18T00:00:00',
  'eyeColor': 'green',
  'name': 'Stein',
  'favoriteFruit': 'apple'
};
Object.values(data2).forEach(item => {
  console.log(item);
});