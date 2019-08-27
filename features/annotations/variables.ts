// simple type annotations examples (not needed, we can let type inference do it's job for these)
// towards the bottom of the page there is examples of when to use annotations
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
let carr: Car = new Car();

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


// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // { x:10, y:20 };

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
// just an example, really foundWord should just be false at first
let foundWord: boolean;

words.forEach(word => {
    if (word === 'green') {
        return foundWord = true;
    }
});

// 3) When we have a variable to have a type that can't be inferred correctly
let numberss = [-10, -1, 12];
let positiveNumber: boolean | number = false;

numberss.forEach(num => {
    if (num > 0) {
        return positiveNumber = num;
    }
});