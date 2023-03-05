// Variables are containers for storing data.
/*
Variables:-
var
let
const
using nothing
*/

// var

var a = 5;
var b = 8;
var c = a + b;

document.write(c + " <br> ");

// use of variable const

const price1 = 30;
const price2 = 40;
let total = price1 + price2;
document.write(total);

// " = " is a assignment operator


// let variable is a block scope variable u simply cannot change the value or reassign the value inside the block


// {

//     let a1 = 5;
//     let b1 = 7;
// }

//     let c1 = b1 + a1;
//     document.write(c1);


    // const is a block scope variable. cannot reassigned, cannot rename, cannot be redeclared.
    // we can change the constant array and object.

    // constant array

    const cars = [" BMW ", " RR ", " Volvo "];
    cars[0] = " Toyota ";
    cars.push("Audi");
    document.write(cars + " <br> ");
    
    
    // constant object
    
    const car = { type: "Audi", color: "white", model: "A6"}
    car.color = "red";
    car.owner = "Ritesh";
    document.write(car.type + " <br> ");
    document.write(car.model + " <br> ");
    document.write(car.color + " <br> ");
    document.write(car.owner + " <br> ");









    

