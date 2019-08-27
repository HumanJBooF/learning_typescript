const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const coke: Drink = ['brown', true, 50];
const sprite: Drink = ['clear', true, 30];
// pepsi[0] = 40; // err: should be a string