console.log ("######################################### Let #########################################");


let x = 1;

console.log ("Let x is: " + x);

console.log ("################################### String literals ###################################");

const y = 2;

console.log (`Const y is ${y}`);


console.log ("################################### Arrow functions ###################################");

var people = [
	{name: "George", age: 22},
	{name: "Ivan", age: 33},
	{name: "Maria", age: 44},
];

people.forEach( v=> v.age++);
people.forEach((v, i) => console.log (v, i) );

people.forEach( v => {
	if (v.age == 23) {
		console.log("Age is 23 ", v);
	}
});

console.log ("###################################### For cycle ######################################");

const abcArray = ['a', 'b', 'c'];

for (let elem of abcArray) {
    console.log(elem);
}

//Getting also index of elements
for (const [index, elem] of abcArray.entries()) {
	console.log(`On index ${index} value is: ${elem}`);
}

console.log ("###################################### Functions ######################################");

console.log ("     #########################      Default values      ##########################     ");
function foo(x=1, y=1) {
	console.log(`X = ${x}, Y = ${y}`)
}

foo();
foo(2);
foo(3, 4);

console.log ("     #########################      Rest parameters      ##########################     ");

function sortArgs (...args) {
	console.log (args.sort());
}

sortArgs(2, 3);
sortArgs(1, 2, 4, 3);


function returnParams (pattern, ...params) {
    return params;
}
function returnPattern (pattern, ...params) {
    return pattern;
}

console.log(returnParams('a', 'b', 'c')); // ['b', 'c']
console.log(returnPattern('a', 'b', 'c')); // a


console.log ("     #########################      Spread operator      ##########################     ");

const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

console.log([...arr1, ...arr2, ...arr3]);


console.log ("     ########################    Object destructuring    #########################     ");

const obj = { first: 'Jane', last: 'Doe' };
const {first: f, last: l} = obj;
    // f = 'Jane'; l = 'Doe'

console.log(f, l);

// {prop} is short for {prop: prop}
const {first, last} = obj;
// first = 'Jane'; last = 'Doe'

const iterable = ['a', 'b'];
const [x1, y1] = iterable;
console.log(x1, y1);