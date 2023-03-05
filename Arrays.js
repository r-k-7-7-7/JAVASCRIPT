/*
// initialization of arrays :-

const cars = ["audi", "BMW", "RR"];
document.write(cars + " <br> ");

// -------- OR --------

const cars1 = [];
cars1[0] = "Jaguar";
cars1[1] = "Volvo";
cars1[2] = "Toyota"
document.write(cars1 + "<br>");

// -------- OR --------

const cars2 = new Array( "Audi1", "BMW1", "RR1");
let cars3 = cars2[cars2.length - 1];
document.write(cars2 + " <br> ");
document.write(cars2.length + " <br> ");
document.write(cars3);


//  Looping array element 

const fruits = ["Banana", "Mango", "Grapes", "Apple"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>"
}
text += "</ul>";

document.write(text);


// Array.forEach()

const fruits1 = ["Banana", "Mango", "Grapes", "Apple"];
// push
fruits1.push("Avacardo");
// pop
fruits1.pop("Apple");
// shifting
fruits1.shift("Banana");
// unshifting
fruits1.unshift("Carrot");

fruits1[fruits1.length] = "Lemon";
let text1 = "<ul>"
fruits1.forEach(myFunction);
text1 += "</ul>";

function myFunction(value){
    text1 += "<li>" + value + "</li>"
}

document.write(text1);


// concating Array

const myToy = ["Goku", "Vageta", "Gohan"];
const yourToy = ["Birus", "whis"];

const allToys = myToy.concat(yourToy);
const allToys1 = myToy.concat("Jiran");

document.write(allToys + "<br>");
document.write(allToys1 + "<br>");

// tostring

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits.toString() + "<br>");
// console.log(fruits5);

// The splice() method can be used to add new items to an array:

const fruits7 =  ["Banana", "Orange", "Apple", "Mango"];
fruits7.splice(1, 0, "orange", "lemon");
document.write(fruits7 + "<br>");


// The slice() method slices out a piece of an array into a new array.

const fruits8 =  ["Banana", "Orange", "Apple", "Mango"];
// const veg = fruits8.slice(2);
const veg = fruits8.slice(1,3);
document.write(fruits8 + "<br>" + veg + "<br>");

// sort
const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
// fruits9.sort();
// reverse
fruits9.reverse();
document.write(fruits9 + "<br>");


// Using Math.max() on an Array
// You can use Math.max.apply to find the highest number in an array:


const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo1").innerHTML = myArrayMax1(points);

function myArrayMax1(arr) {
  return Math.max.apply(null, arr);
}


// Using Math.min() on an Array
// You can use Math.min.apply to find the lowest number in an array:

const points1 = [40, 100, 1, 5, 25, 10];
document.getElementById("demo2").innerHTML = myArrayMin(points1);

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}


// Array iteration

const points2 = [1, 2, 3, 4, 5];
let txt = " ";

points2.forEach(myFunction2);

function myFunction2(value){
  txt += value + "<br>"
}

document.write(txt);


// Array map()

const num1 = [1, 2, 3, 4, 5];
const num2 = num1.map(myFunction3);

function myFunction3(array){
  // console.log(array)
  return array;
  // return index;
  // return value + 2;
}
document.write(num2 + "<br>");


// JavaScript Array filter()

const number = [1, 2, 3, 4, 5];
// const number2 = number.filter(myFunction4);

// every()
// const number2 = number.every(myFunction4);

// find()
// const number2 = number.find(myFunction4);

// findIndex()
const number2 = number.findIndex(myFunction4);

function myFunction4(value){

  // return value > 3;
  // return value < 6;
  return value > 2;
}
document.write(number2 + "<br>");


// JavaScript Array reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

const number3 = [1, 2, 3, 4, 5];
// const number4 = number3.reduce(myFunction5);
const number4 = number3.reduceRight(myFunction5);

function myFunction5(total,value,index,array){
  return total + value;
}
document.write(number4 + "<br>");


// indexof()

const fruits10 =  ["Banana", "Orange", "Apple", "Mango"];
const fruits11 = fruits10.indexOf("Orange");
document.write(fruits11 + "<br>");


// lastindexOf()

const fruits12 =  ["Banana", "Orange", "Apple", "Mango", "Orange"];
const fruits13 = fruits12.lastIndexOf("Orange");
document.write(fruits13 + "<br>");
*/

// Array.keys()

const fruits14 =  ["Banana", "Orange", "Apple", "Mango", "Orange"];
// const fruits15 = fruits14.keys();
const fruits15 = fruits14.entries();

let text2 = "";
for (let value of fruits15){
  text2 += value + "<br>"
}

document.write(text2)


