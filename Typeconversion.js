// converting string to number


document.write(
    Number("3.14") + " <br> " +
Number(Math.PI) + " <br> " +
Number("   ") + " <br> " +
Number("") + " <br> " +
Number("99 88") + " <br> " +
Number("Ritesh")+ " <br> " 
);

// The unary + operator can be used to convert a variable to a number:

let a = "5";
let b = + a;

document.write(typeof a + "<br>" + typeof b + "<br>");

let a1 = "Ritesh";
let b1 = + a1;
document.write(typeof a1 + "<br>" + typeof b1 + "<br>");


// converting string to number 
let x = 123;
document.write(
    String(x) + "<br>" +
    String(123) + "<br>" +
    String(100 + 23) + "<br>"
);

let y = 101;
document.write(
    y.toString() + "<br>" +
    (101).toString() + "<br>" +
    (100 + 1).toString()
)
