import {data} from "./object.js";

// первое практическое задание
class Worker {
    constructor (name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary () {
        return this.rate * this.days;
    }
}

// второе практическое задание

class Transport {
    constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }

    getInfo() {
        return `${this.type} ${this.brand}`
    }

    getPrice() {
        return this.price;
    }
}

class Car extends Transport {
    constructor(type, brand, price, doors) {
        super(type, brand, price);
        this.doors = doors;
    }

    getDoorsCount() {
        return this.doors;
    }
}

class Bike extends Transport {
    constructor(type, brand, price, maxSpeed) {
        super(type, brand, price);
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }
}

const transports = [];
for (let item of data) {
    if (item.type === 'car') {
        const car = new Car(item.type, item.brand, item.price, item.doors);
        transports.push(car);
    } else if (item.type === 'bike') {
        const bike = new Bike(item.type, item.brand, item.price, item.maxSpeed);
        transports.push(bike);
    }
}

for (let transport of transports) {
    console.log(transport.getInfo());
    console.log(transport.getPrice());
    if (transport instanceof Car) {
        console.log(transport.getDoorsCount());
    } else if (transport instanceof Bike) {
        console.log(transport.getMaxSpeed());
    }
}