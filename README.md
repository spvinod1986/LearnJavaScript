# LearnJavaScript
- Javascript is one of the most popular and widely used programming language.
- For long time was used only in browsers to build web pages. But now we can build web/mobile apps, real time networking apps, command line tools and also games.
- Every browser has JavaScript engine which can execute JavaScript. The JavaScriptEngine in Firefox is called SpiderMonkey and the JavaScripEngine in Chrome is called V8. In 2009, an engineer took the open source JavaScriptEngine V8 and embedded in C++ program. This program is called Node. With Node, you can run JavaScript code outside the browser. Hence JavaScript code can be run outside the browser in mobile or system as well.
- Difference between JavaScript and ECMAScript: ECMAScript is just the specification. JavaScript is a programming language that confirms to this specification.

## Basics
- Variables: "var" was used widely in before ES6 but there are some issues with "var" and hence "let" keyword is the best practise as per ES6 specification.
- Variables cannot be reserved keyword. Variables cannot start with number and use meaningful names. Variables cannot contain space or hyphen. Use camel casing eg - firstName.
- Variables are case sensitive.
- Javascript has 2 kind of types. 1) Primitive or Value Types 2) Reference Types.
- Primitive Types: String, Number, Boolean, Undefined, null, Symbol(added in ES6).
- Dynamic Typed Language: JavaScript is a dynamic language. In static languages, type of a variable cannot be changed once set. In dynamic language, type of variable can change during runtime.
- Reference Types: Object, Array, Function. {} or curly braces is called object literal.
- In JavaScript, the length of array and type of elements in array are dynamic, which means they can change during runtime. Array is just another object in JavaScript. So the type of array will be an object.
- Functions are fundamental building block of javascript. Funcations are just collection of statements. Functions are also objects.
- Operators: Arithmetic, Assigment, Comparison, Logical, Bitwise.
- Falsy in Javascript: undefined, null, 0, false, '', NaN. Anything that is not falsy is truthy.
- 2 types of conditional statements: if..else and switch..case.
- 5 types of loop: while, do..while, for, for..in, for..of (added as part of ES6).

## Objects
- JavaScript Objects are collection of key value pairs. You can create object using 3 ways. 1) object literal 2) factory functions and 3) constructor functions. If you use object literals then you cannot creare objects on fly unless you duplicate code of the object. Both factory functions and constructor functions are equally good but the constructor function is familiar to developers from C# or Java.
- Objects are dynamic, hence you can add new properties or functions to it anytime.
- Every object has a property called constructor. That references the function that was used to construct or create that object.
- Objects are just another function. Internally constructor function call happens when you create object using object literal.
- Object attributes can be enumerated using for..in. for..of can also be used but need to get object properties in array using Object.Keys or Object.Entries method.
- Easy and elegant way to clone an object is to use spread operator which is represented using ...
- Javascript uses garbage collection to find variable, objects that are no longer used and deallocates memory.
- 2 kinds of String. 1) string primitive and 2) string object.
- Built in Javascript objects: Math, String, Date etc.

## Functions
- Functions are objects. Functions can be defined in 2 ways. 1) Function declaration and 2) Function expression.
- Hoisting: When Javascript engine executes a javascript code, it moves all function declarations to the top of the file automatically . Hence you can call the functions defined using function declarations even before they are declared. This is not possible in function expressions.
- The scope of variable decalred using var is limited within the scope function and outside block.
- var is one of the weirdest thing in JS we had for long time. Till ES6, var is the only way which is function scoped. From ES6 : let, const is introduced and it is block scoped.
- Global variable declared using var keyword is attached to window object where as global variable declared using let keyword is not attached to window object. The problem here is, there is only one instance of window object in apps and if some external framework uses a variable declared in same name like ours then that variable can overwrite our variable.
- "this" keyword- it references the object that is executing the current function. A function inside an object is called method. "this" inside method references the object. "this" inside function references global object (window in browser and global in node).
