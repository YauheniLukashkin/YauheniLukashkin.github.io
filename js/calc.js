function sub(a, b) {
	return a - b;
}

function add(a, b) {
	return a + b;
}

function mul(a, b) {
	return a * b;
}

function div(a, b) {
	return a / b;
}

function intdiv(a, b) {
	return a / b | 0;
}

function calc(a, b) {
	console.log("res calc:",a,b);
	console.log(sub(a, b));
	console.log(add(a, b));
	console.log(mul(a, b));
	console.log(div(a, b));
	console.log(intdiv(a, b));
}

var a = 2;
var n = null;
var u = undefined;
var s = "hello";
var obj = { name: "test" };
var b = true;
	
function comb(param) {
	calc(param, a);
	calc(param, u);
	calc(param, s);
	calc(param, b);
	calc(param, obj);
	calc(param, n);
}

function test() {
	var d = 3;
	var c = 5;
	calc();
	calc(a);
	calc(c, d);
	calc(a, d, c);
	comb(a);
	comb(n);
	comb(u);
	comb(s);
	comb(b);
	comb(obj);
	comb(function func_param() {
		console.log('param');
	});
}

test();
