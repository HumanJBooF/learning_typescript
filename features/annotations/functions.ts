// returning a number example
const add = (a: number, b: number): number => a + b;

// no return makes typescript infere a void
// const subtract = (a: number, b: number) => {
//    a - b;
// }
// typescript will now now we return a number, but we can still add the :number after the function
const subtract = (a: number, b: number): number => a - b;

// same thing for other types of functions
function divide(a: number, b: number): number {
    return a / b;
};

const multiply = function (a: number, b: number): number {
    return a * b;
};
// a function that is not returning anything is void (can also return null or underfined)
const logger = (message: string): void => {
    console.log(message);
    // return null;
};

// use never if the function will NEVER return anything
const throwErrorOne = (message: string): never => {
    throw new Error(message);
};
// if you want to sometimes throw the error but eventually return something if it is there you can do so like this
const throwErrorString = (message: string): string => {
    if (!message) {
        throw new Error(message);
    }
    return message;
};
// if you are return nothing and there is a chance to never reach the end of the function use void
const throwErrorVoid = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }
};
// Destructoring arguments with typescript
const todaysWeather = {
    date: new Date(),
    weather: 'sunner'
};

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather)