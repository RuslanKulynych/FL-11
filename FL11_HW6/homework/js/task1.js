// Your code goes here
var a1 = prompt('enter a1', a1);
var a2 = prompt('enter a2', a2);
var b1 = prompt('enter b1', b1);
var b2 = prompt('enter b2', b2);
var c1 = prompt('enter c1', c1);
var c2 = prompt('enter c2', c2);

var ab_dis = Math.sqrt(Math.pow(b1-a1, 2)+Math.pow(a2-b2, 2));
var ab_dis_half = ab_dis/2;

var ac_dis = Math.sqrt(Math.pow(c1-a1, 2)+Math.pow(c2-a2, 2));
var bc_dis = Math.sqrt(Math.pow(c1-b1, 2)+Math.pow(c2-b2, 2));

var res = (ac_dis === ab_dis_half && bc_dis === ab_dis_half);

console.log(res);