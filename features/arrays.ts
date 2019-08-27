const carMakers = ['ford', 'nissan', 'chevy'];
const dates = [new Date(), new Date()];
// inference will take care of the annotation unless the array is empty
const carsByMake = [
    ['f150'],
    ['skyline'],
    ['camaro']
];
// in that case we would do
// const carsByMake: string[][] = [];

// Help with inference when extracting values
// TS knows these will be strings
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(20); // TS gives us a warning when you try to push a different type

// map/reduce/filter/forEach type methods
carMakers.map((car: string): string => {
    return car;
});

// Arrays with different types of elements
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2020-10-10');
// importantDates.push(20); // TS error
// importantDates.push({ test: 1 }); // TS error
