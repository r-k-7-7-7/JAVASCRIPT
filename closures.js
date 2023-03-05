// // initiat counter

// let counter = 0;

// function add(){
//     counter += 1; 
// }

// add();
// add();
// add();

// console.log(counter);


// let counter1 = 0;

// function add1(){
//     let counter1 = 0;
//     counter1 += 1; 
// }

// add1();
// add1();
// add1();

// console.log(counter1);




// function add2(){
//     let counter2 = 0;
//     counter2 += 1;
//     return counter2; 
// }

// function myfunction(){
//     document.write(add2());
// }


// // document.getElementById('demo').innerHTML = add3();
// function add3() {
//     let counter3 = 0;
//     function plus(){ counter3 += 1 }
//     plus();
//     return counter3;
// }
// console.log(add3());


const add4 = ( function(){
    let counter4 = 0;
    return function() {counter4 += 1; return counter4;}
})();

function myfunction1(){
    document.getElementById('demo1').innerHTML = add4();
}

