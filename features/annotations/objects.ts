const profile = {
    name: 'Joshua',
    age: 29,
    coords: {
        lat: 0,
        lng: 20
    },
    setAge(age: number): void {
        this.age = age;
    }
};

// destructoring objects
const { age }: { age: number } = profile;
// nested object destructoring
const { coords: { lat, lng } }: { coords: { lat: number; lng: number } } = profile;