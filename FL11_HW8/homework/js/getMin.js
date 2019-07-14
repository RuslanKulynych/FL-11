function getMin() {
	var smallestNumber = [0];
	for (var i = 1; i < arguments.length; i++) {
		if (arguments[i] < smallestNumber) {
			smallestNumber = arguments[i];
		}
	}
	return smallestNumber;
}

console.log(getMin([22,4,8]));