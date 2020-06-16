// variables
var test = 'test'; // used before ES6 specification
let name = 'test'; // best practise per ES6 specification

// constants
const pi = 3.14;

// primitive types
let firstName = 'testName'; // string literal
let age = 30; // number literal
let isTest = true; // boolean literal
let lastName; // undefined. value is undefined and type of this variable is also undefined.
let middleName = null; // null. vale is null but the type will be object.

// reference types
// object
let person = {
    name: 'TestName',
    age: 30
};
// dot notation
person.name = 'UpdatedName'; // concise, shorter and widely used
// bracket notation
person['name'] = 'SecondUpdatedName'; // if you don't know the target property until run time then this is preferred
// arrays
let selectedColors = ['red', 'blue', 'green'];
selectedColors[3] = 33;
console.log(selectedColors[0]) // red
console.log(selectedColors[3]) // 33
// functions
// performing a task
function greet(name) {
    console.log('This is greet function for ' + name);
}
greet('testname');
// calculating a value
function calculateSquare(number) {
    return number * number;
}
console.log(calculateSquare(2))

// operators
let x = 10; // assignment operator
let y = 3;
console.log(x + y); // x + y is called expression. Expression is something that produces value.
console.log(x ** y); // exponentiation. x to the power of y.
x += 3; // is equivalent to x = x + 3
console.log(x > 0); // relational
console.log(x === 1); // strict equality. value and datatype is equal.
console.log(x == 1); // loose equality. only value is equal.
console.log(x !== 1);
let type = x > 100 ? x : y; // ternary operator
let highIncome = true;
let goodScore = true;
let eligibleForLoan = highIncome && goodScore; // both should be true
eligibleForLoan = highIncome || goodScore; // either of is true
let loanRefused = !eligibleForLoan;
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor; // the first truthy will be returned. if user did not select a color then default will be returned.
console.log(currentColor);
// bit wise oeprators work on individual bits
// 1 = 00000001
// 2 = 00000010
// | = 00000011
// & = 00000000
console.log(1 | 2); // bit wise OR. 3 will be returned.
console.log(1 & 2); // bit wise AND. 0 will be returned.

// control flow
let hour = 10;
if (hour >= 6 && hour <= 12) {
    console.log('Good Morning')
} else if (hour >= 12 && hour < 18) {
    console.log('Good Afternoon')
}
else {
    console.log('Good Evening')
}

let role = 'guest';
switch (role) {
    case 'guest':
        console.log('guest user')
        break;
    case 'admin':
        console.log('admin user')
        break;
    default:
        console.log('unknown user');
}

for (let index = 0; index < 5; index++) {
    console.log(index);
}

let index = 0
while (index < 5) {
    console.log(index);
    index++;
}

index = 5;
do {
    console.log(index);
    index++;
} while (index < 5);

// for..in loop
person = {
    name: 'TestName',
    age: 30
};
for (let key in person) {
    console.log(key, person[key]);
}
let colors = ['red', 'blue', 'green'];
for (const index in colors) {
    console.log(colors[index]);
}

// for..of loop . added as part of ES6.
for (const color of colors) {
    console.log(color);
}

// objects
// using object literal {}.
const circle = {
    radius: 1, // properties
    location: { // another object
        x: 1,
        y: 1
    },
    draw: function () { // functions
        console.log('draw');
    },
    move: function () {
        console.log('move')
    }
};
circle.draw(); // this is called object oriented programming. if function is part of object then it is called method.

// using factory functions. Use camel casing for factory functions.
function createCircle(radius) {
    return {
        radius, // same as radius: radius
        draw() { // same as draw: funtion() {}
            console.log('draw');
        }
    };
};
const circle1 = createCircle(1);
console.log(circle1);
circle1.draw();
const circle2 = createCircle(2);
console.log(circle2);
circle2.draw();

// using constructor functions. Use pascal casing for constructor functions.
function Circle(radius) {
    this.radius = radius,
        this.draw = function () {
            console.log('draw');
        }
}
const circle3 = new Circle(3); // the new operator creates an empty object. 'this' statement sets the properties in the new object.
console.log(circle3);
circle3.draw();
const circle4 = new Circle(4);
console.log(circle4);
circle4.draw();
// dynamic nature of objects
circle4.color = 'yellow';
circle4.move = function () {
    console.log('move');
};
delete circle4.draw;
console.log(circle4);

// constructor property
const another = new Circle(5);
console.log(another.constructor);
console.log(circle.constructor); // object uses base object constructor

// Call, Apply
// Object is just another function.
// internally below constructor function call happens when you create object using object literal.
const Circle1 = new Function('radius', `
this.radius = radius,
this.draw = function () {
    console.log('draw');
}
`);
console.log(Circle1);
Circle.call({}, 6); // is equivalent to const circle = new Circle(6). First argument specifies target of 'this'
Circle.apply({}, [6]); // is equivalent to const circle = new Circle(6). But instead you can pass arguments as array

// value vs reference types
let a = 10; // primitives
let b = a; // primitives
a = 20;
console.log(a, b) // a and b are independent primitives or value types.

let c = { value: 10 };
let d = c;
c.value = 20;
console.log(c, d); // c and d are reference typed. They are pointing to same object in memory.

// enumerating properties of object
for (const key in circle) {
    if (circle.hasOwnProperty(key)) {
        console.log(key, circle[key]);

    }
}
// for..of cannot be used to iterate objects because they are not iterable.
// if you want to use for..of then you can use Object.keys method which returns array which is iterable.
for (const key of Object.keys(circle)) {
    console.log(key);
}
// another option is to use Object.entries method
for (const entry of Object.entries(circle)) {
    console.log(entry);
}

if ('radius' in circle) {
    console.log('yes');
}

// cloning an object
// old way
const clonedCircle = {};
for (const key in circle) {
    if (circle.hasOwnProperty(key)) {
        clonedCircle[key] = circle[key];
    }
}
console.log(clonedCircle);
// using object.assign
clonedCircle2 = Object.assign({}, circle);
console.log(clonedCircle2);
// using spread operator (...)
const clonedCircle3 = { ...circle };
console.log(clonedCircle3);

// template literals. added in ES6.
let userName = 'TestName';
const template = `This is my
'first' message for ${userName}`;
console.log(template);

// arrays
const numbers = [3, 4]; // you cannot do this numbers = [] if it is a constant. But constant won't stop us from modifying an array.
numbers.push(5, 6); // add to end of array
numbers.unshift(1, 2); // add to negin of array
numbers.splice(2, 0, 'a', 'b'); // add to middle of array
console.log(numbers)
numbers.push(1);
// find for value types
console.log(numbers.indexOf(1));
console.log(numbers.lastIndexOf(1));
console.log(numbers.includes(1));
// find for reference types
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
]
const course = courses.find(function (course) {
    return course.name == 'a'
});
console.log(course);
// arrow functions added in ES6
const courseUsingArrow = courses.find(course => course.name == 'a'); // you can remove curly braces if there is only one expression
console.log(courseUsingArrow);
numbers.pop(); // remove from end of array
numbers.shift(); // remove from beginning of array
numbers.splice(2, 1); // remove from middle of array
console.log(numbers);
// emptying an array
let numbersToEmpty = [1, 2, 3, 4, 5];
numbersToEmpty = []; //solution 1. This solution works if there are no references to original array.
numbersToEmpty.length = 0; // solution 2.
numbersToEmpty.splice(0, numbersToEmpty.length); // solution 3.
while (numbersToEmpty.length > 0) { // solution 4. Not recommended if array is large
    numbersToEmpty.pop();
}
// combining and slicing array
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
const combinedUsingSpread = [...first, 'a', ...second]; // using spread operator(added in ES6)
const sliced = combined.slice(2, 4);
console.log(combined);
console.log(sliced);
console.log(combinedUsingSpread);
// iterating array
for (const number of combined) {
    console.log(number);
}
numbers.forEach(number => console.log(number));
const joined = numbers.join(',');
console.log(joined);
// sorting array
const tobeSorted = [4, 2, 5, 8, 6, 7];
tobeSorted.sort();
console.log(tobeSorted);
tobeSorted.reverse();
console.log(tobeSorted);
const coursesToSort = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' }
]
coursesToSort.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
});
console.log(coursesToSort);
// testing elements of array
const numbersToTest = [-1, 2, 3];
const allPositive = numbersToTest.every((value) => value >= 0); // new methods. may not be supported in older browsers.
const somePositive = numbersToTest.some((value) => value >= 0); // new methods. may not be supported in older browsers.
console.log(allPositive);
console.log(somePositive);
// filtering an array
const numbersToFilter = [-1, 1, 2, 3];
const filtered = numbersToFilter.filter((value) => value >= 0);
console.log(filtered);
// mapping an array. map method can be chained with filtered method.
var mappedItems = filtered.map(n => '<li>' + n + '</li>');
const htmlItems = '<ul>' + mappedItems.join('') + '</ul>';
console.log(htmlItems);
// reducing an array
const numbersToReduce = [-1, 2, 3];
const sum = numbersToReduce.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);

// functions
// function declaration
walk(); // In function declaration, you can call the function even before it is declared. This is called Hoisting.
function walk() {
    console.log('walk');
}

// anonymous function expression
let run = function () {
    console.log('run')
};
run(); // hoisting is not possible in function expressions.
let jump = function () {
    console.log('jump')
};
let move = jump;
move();
jump();

// Nan
function testSum(a, b) {
    return a + b;
}
console.log(testSum(1)); // this will return 1 + undefined => NaN
console.log(testSum(1, 2, 3, 4, 5));

// arguments (It is an object)
function testSumWithArguments() {
    let total = 0;
    for (let value of arguments) {
        total += value;
    }
    return total
}
console.log(testSumWithArguments(1, 2, 3, 4, 5));

// rest operator. This is not same as spread operator.
// args is an array
function testSumWithRestOperator(...args) {
    return args.reduce((a, b) => a + b);
}
console.log(testSumWithRestOperator(1, 2, 3, 4, 5));

// default parameters.
// make sure default parameters are last or make sure all parameters after default parameters are also default parameters.
function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}
console.log(interest(10000));

// getters and setters
const personSample = {
    firstName: 'FirstName',
    lastName: 'LastName',
    get fullName() { // this kind of function declaration is possible in ES6
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        if (typeof value !== 'string') {
            throw new Error('Value is not a string');
        }

        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
console.log(personSample.fullName);
personSample.fullName = 'UpdatedFirst UpdatedSecond';
console.log(personSample.fullName);

// error handling
try {
    personSample.fullName = null;
} catch (error) {
    console.log('caught in catch');
}

// local vs global scope
let messageColor = 'yellow'; // global scope
function start() {
    const message = 'hi'; // local scope
    messageColor = 'red';
    console.log(messageColor);
}

function stop() {
    const message = 'bye';// local scope
    console.log(messageColor);
}
console.log(messageColor);
start();
stop();
console.log(messageColor);

// let vs var
var age1 = 30; // 'this' global variable is attached to window object.
let age2 = 30; // 'this' global variable is not attached to window object.
function problemWithVar() { // functions declared like this are still attached to window object.
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i); // the scope of i is outside for block because of var. 
    // This is not possible if you use let.
    // The scope of variable decalred using var is limited within the function but not within block.
    // var is one of the weirdest thing in JS we had for long time
    // till ES6, var is the only way => function scoped
    // from ES6 : let, const => block scoped
}
problemWithVar();

// this keyword
const video = {
    title: 'a',
    play() {
        console.log(this); // 'this' references to the object video
    }
}
video.play();
function playVideo() {
    console.log(this); // 'this' references to the global object in node, window object in browser
}
playVideo();

// this in constructor function
function Video(title) {
    this.title = title;
    console.log(this); // 'this' references new object created
}
const v = new Video('testVideo');

// confusing and problematic stuff with 'this'
const videoProblem = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag); // 'this' will be global object(for node) here because it is inside a function
        })
    },
    displayTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag); // 'this' will be video problem object here because we are passing reference of 'this' to the function
        }, this) // passing 'this' like this in function is ugly
    },
    // alternate option. but not recommended
    viewTags() {
        const self = this;
        this.tags.forEach(function (tag) {
            console.log(self.title, tag); // 'self' will be video problem object here because it references to this' outside the function
        })
    },
    // newer way to do this. Use arrow function introduced in ES6
    seeTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag); // arrow function inherit 'this' from containing function
        })
    },
}
videoProblem.showTags();
videoProblem.displayTags();
videoProblem.viewTags();
videoProblem.seeTags();

// Changing 'this' using call, apply, bind
function playVideo(a, b) {
    console.log(this);
}

playVideo.call({ name: 'TestName' }, 1, 2);
playVideo.apply({ name: 'TestName' }, [1, 2]);
var fn = playVideo.bind({ name: 'TestName' });
fn();
playVideo.bind({ name: 'IIFEName' })(); // Immediately Invoked Function Expression