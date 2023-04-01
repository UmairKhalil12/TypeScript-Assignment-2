// ------------ Abstract Class of Vehicle ------------------------- // 

abstract class Vehicle{
    make: string;
    model: string;
    year: number;
    rented: boolean;

    constructor(make:string , model:string , year:number){
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = false; 
    }

    getMake() : string{
        return this.make;
    }

    getModel() : string{
        return this.model;
    }

    getYear() : number{
        return this.year;
    }

    getRented() : boolean{
        return this.rented;
    }

    setRented (rented: boolean) : void{
        this.rented = rented; 
    }

    abstract rentalRate(numberOfDays:number) : number; 

    rent() : void {
        if (this.rented === true){
            console.log("Sorry, this vehicle is already rented ");
        }
        else{
            this.rented = true; 
            console.log("You have rented this vehicle");
        }
    }

    return() : void{
        if(this.rented === true){
            this.rented = false; 
            console.log("The vehicle has been returned");
        }
        else{
            console.log("This vehicle has not been rented ");
        }

    }

}

// ------------ Class of Car ------------------------- // 

class Car extends Vehicle {
    numberOfDoors: number;
    Auto : boolean;

    constructor(make:string , model:string , year:number  , numberOfDoors: number, Auto:boolean){

        super(make , model , year);
        this.numberOfDoors = numberOfDoors
        this.Auto = Auto;
    }

    getAuto():boolean{
        return this.Auto;

    }

    getNumberOfDoors() : number{
        return this.numberOfDoors;
    }

    rentalRate(numberOfDays:number): number {
        return 3500 * numberOfDays; 
    }
}

// ------------ Class of Truck ------------------------- // 


class Truck extends Vehicle {
   
    payLoadCapacity : number; 

    constructor(make:string , model:string , year:number , payLoadCapacity: number){

        super(make , model , year);
        this.payLoadCapacity = payLoadCapacity;
    }

    getPayLoadCapacity():number{
        return this.payLoadCapacity;
    }

    rentalRate(numberOfDays:number): number {
        return 5000 * numberOfDays; 
    }
}

// ------------ Class of Motorcycle ------------------------- // 


class MotorCycle extends Vehicle {
   
    
    fuelTankCapacity: number; 

    constructor(make:string , model:string , year:number  , fuelTankCapacity:number){

        super(make , model , year);
        this.fuelTankCapacity = fuelTankCapacity;
    }

    getFuelTankCapacity() : number{
        return this.fuelTankCapacity;
    }

    rentalRate(numberOfDays : number): number {
        return 1000 * numberOfDays; 
    }
}

// ------------- Testing ---------------------------------- //

const car = new Car("Honda" ,"Civic", 2021, 4, true);
const bike = new MotorCycle("Unqiue","Cd-70",2018,8);
const truck = new Truck("Toyota","Revo",2020,150);

console.log("--------------------CAR----------------")
console.log(car.getMake() , car.getModel() , car.getYear() , car.getNumberOfDoors() );
console.log(car.rentalRate(4));
car.rent();
console.log(car.getRented());


console.log("--------------------BIKE----------------")
console.log(bike.getMake() , bike.getModel() , bike.getYear() , bike.getFuelTankCapacity());
console.log(bike.rentalRate(10) );
bike.rent();
console.log(bike.getRented());


console.log("--------------------TRUCK----------------")
console.log(truck.getMake() , truck.getModel() , truck.getYear() ,truck.getPayLoadCapacity());
console.log(truck.rentalRate(2));
truck.setRented(true);
truck.return();
console.log(truck.getRented());



 


