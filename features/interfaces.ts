interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
    test?: string;
    summary?(): string;
};

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return this.name;
    }
};

const testObj = {
    name: 'civic',
    year: 2100,
    broken: false,
    test: 'test'
}

const printVehicle = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
    console.log(`Test: ${vehicle.test ? vehicle.test : 'no test'}`);
    console.log(vehicle.summary ? vehicle.summary() : "no summary");
}

printVehicle(oldCivic);
printVehicle(testObj);