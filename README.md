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

## Prototypes
- 2 types of inheritance. 1) Classical and 2) Prototypical.
- Javascript has no classes but objects. It uses prototypical inheritance to share common behaviour between objects.
- A prototype is essentially a parent of another object.
- Every object in JavaScript (except "object" base) has a prototype or parent which is the "object" base.
- Prototypical Inheritance: When we access property or method of an object, JavaScript engine will look for the property or method in that object, if it cant find it then it will look for that member in the prototype of that object, if it cant find it then it will look for that member in its prototype and repeats it all the way up till the root object.
- Objects created by given constructor will have same prototype.
- 2 types of properties/methods. 1) Instance properties/methods and 2) Prototype properties/methods.
- You can call Instance members from prototype members and vice versa.
- object.keys returns only instance members.
- for..in loop returns all members(instance and prototype). instance is called 'own' in javascript world. object.hasownProperty('testproperty') returns true if it is instance or own member of the object.
- Avoid extending built in objects. It will create confusion and difficult to debug.
- Using prototypical inheritance, you can have child objects share base object methods. The child objects can also override implementation of base object method, can call the base method from overridden method, can also call constructor of base object from child constructor.
- Favor composition over inheritance: In Javascript we can do composition using Mixins.

## Classes(ES6)
- In ES6, there is a new way to create objects and implement inheritance. That is done by using classes. These classes are not similar to the classes we have in languages like C# or Java.
- Classes here are just syntactical sugar over prototypical inheritance.
- Babel: Babel is a Javascript compiler which gets the modern javascript code and it compiles it down to ES5 code which all browsers understand.
- Hoisting: Function can be defined in 2 ways. 1) Function declaration and 2) Function expression. Function declarations are hoisted which means they are raised to the top of code. As it is hoisted, you can call the function even before it is declared in the code and the code will work fine. Function expressions are not hoisted.
- Classes can be defined in 2 ways. 1) Class declaration and 2) Class Expression. Unlike functions, class declaration and expressions are not hoisted.
- 2 types of method. 1) Instance method and 2) Static method. Instance method is available in instance of the class. Static methods are available on the class itself. Static methods are decorated with static keyword.
- Private properties and methods can be defined using 2 approaches. 1) Symbols(ES6) and 2) WeakMaps(ES6).
- Symbol is new primitive type added in ES6. A symbol is just a unique identifier. Symbol() === Symbol() is false. This is because each symbol creates unique identifier.
- WeakMaps is also introduced in ES6. WeakMap is a dictionary where keys can be objects and values can be anything. If there are no references to the keys then they will be garbage collected.
- 'get' and 'set' keyword added in ES6 helps to define getter and setter properties in ES6.
- You can use 'extends' to inherit from base class. The constructor of child class should call base class constructor using 'super' method call.