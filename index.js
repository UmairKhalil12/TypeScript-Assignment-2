// ------------ Abstract Class of Vehicle ------------------------- // 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = false;
    }
    Vehicle.prototype.getMake = function () {
        return this.make;
    };
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.getRented = function () {
        return this.rented;
    };
    Vehicle.prototype.setRented = function (rented) {
        this.rented = rented;
    };
    Vehicle.prototype.rent = function () {
        if (this.rented === true) {
            console.log("Sorry, this vehicle is already rented ");
        }
        else {
            this.rented = true;
            console.log("You have rented this vehicle");
        }
    };
    Vehicle.prototype.return = function () {
        if (this.rented === true) {
            this.rented = false;
            console.log("The vehicle has been returned");
        }
        else {
            console.log("This vehicle has not been rented ");
        }
    };
    return Vehicle;
}());
// ------------ Class of Car ------------------------- // 
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, numberOfDoors, Auto) {
        var _this = _super.call(this, make, model, year) || this;
        _this.numberOfDoors = numberOfDoors;
        _this.Auto = Auto;
        return _this;
    }
    Car.prototype.getAuto = function () {
        return this.Auto;
    };
    Car.prototype.getNumberOfDoors = function () {
        return this.numberOfDoors;
    };
    Car.prototype.rentalRate = function (numberOfDays) {
        return 3500 * numberOfDays;
    };
    return Car;
}(Vehicle));
// ------------ Class of Truck ------------------------- // 
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(make, model, year, payLoadCapacity) {
        var _this = _super.call(this, make, model, year) || this;
        _this.payLoadCapacity = payLoadCapacity;
        return _this;
    }
    Truck.prototype.getPayLoadCapacity = function () {
        return this.payLoadCapacity;
    };
    Truck.prototype.rentalRate = function (numberOfDays) {
        return 5000 * numberOfDays;
    };
    return Truck;
}(Vehicle));
// ------------ Class of Motorcycle ------------------------- // 
var MotorCycle = /** @class */ (function (_super) {
    __extends(MotorCycle, _super);
    function MotorCycle(make, model, year, fuelTankCapacity) {
        var _this = _super.call(this, make, model, year) || this;
        _this.fuelTankCapacity = fuelTankCapacity;
        return _this;
    }
    MotorCycle.prototype.getFuelTankCapacity = function () {
        return this.fuelTankCapacity;
    };
    MotorCycle.prototype.rentalRate = function (numberOfDays) {
        return 1000 * numberOfDays;
    };
    return MotorCycle;
}(Vehicle));
// ------------- Testing ---------------------------------- //
var car = new Car("Honda", "Civic", 2021, 4, true);
var bike = new MotorCycle("Unqiue", "Cd-70", 2018, 8);
var truck = new Truck("Toyota", "Revo", 2020, 150);
console.log("--------------------CAR----------------");
console.log(car.getMake(), car.getModel(), car.getYear(), car.getNumberOfDoors());
console.log(car.rentalRate(4));
car.rent();
console.log(car.getRented());
console.log("--------------------BIKE----------------");
console.log(bike.getMake(), bike.getModel(), bike.getYear(), bike.getFuelTankCapacity());
console.log(bike.rentalRate(10));
bike.rent();
console.log(bike.getRented());
console.log("--------------------TRUCK----------------");
console.log(truck.getMake(), truck.getModel(), truck.getYear(), truck.getPayLoadCapacity());
console.log(truck.rentalRate(2));
truck.setRented(true);
truck.return();
console.log(truck.getRented());
