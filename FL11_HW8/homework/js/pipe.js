function pipe(x) {

var y = x;

for (var i = 1; i < arguments.length; i++) {
y = arguments[i](y);
}
return y;
}

console.log(pipe(2));