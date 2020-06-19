import { StringifyOptions } from "querystring";

// types in typescript
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[];
let f: number[] = [1, 2, 3];
let g: any[] = [1, true, 'a', false];
enum Color { Red = 0, Green = 1, Blue = 2 };
let h = Color.Green;

// type assertions
let message; // this is of any type
message = 'abc';
// you will not get intellisense in message without type assertions
// type assertions does not change type of variable. It is just for intellisense.
let endsWithC = (<string>message).endsWith('c');
let alternateOption = (message as string).endsWith('c');

// arrow functions
let doLog = (message) => console.log(message);

// interfaces
interface Point {
    x: number,
    y: number
}

let drawPoint = (point: Point) => {

}
drawPoint({ x: 1, y: 2 })

// class and constructor
class Invoice {
    private amount: number; // this field cannot be accessed from outside due to access modifier
    count: number;

    // note: you cannot have multiple constructors in typescript
    // if required to create multiple constructor then make the paramters optional '?'
    constructor(amount: number, count?: number) {
        this.amount = amount;
        this.count = count;
    }
    generate() {
        console.log('Generating Invoice')
        // logic to generate invoice
    }
}

let invoice = new Invoice(100, 10);
invoice.generate();

// another example
class Cart {
    constructor(private _count: number, private _total: number) {

    }

    get count() {
        return this._count;
    }

    set count(value) {
        if (value < 0) {
            throw new Error('value cannot be less than 0.');
        }
        this._count = value;
    }

    get total() {
        return this._total;
    }

    // Total is a readonly property so no set method
    // Property looks like a field from outside but it is combination of getter/setter methods

    checkout() {
        console.log("Checking out");
    }
}
let cart = new Cart(10, 100);
cart.count = 12;
cart.checkout();

// modules
import { Plot } from './plot';

let plot = new Plot(1, 2);
plot.draw();