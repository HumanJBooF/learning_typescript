// simple type examples
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothing: null = null;
let anotherNothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let truths: boolean[] = [true, false, true];

// Classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
}

// Function
const logNumber: (num: number) => void = (num: number) => {
    console.log(num)
}

// showing the type checking error
// apples = 'test'; throws an error, looking for a number type
apples = 10; // this is good because it is a number




