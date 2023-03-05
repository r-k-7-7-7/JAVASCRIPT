var a;
document.write(a + " <br> ");
a = 5;

var b;
b = 3;
document.write(b + " <br> ");

// scope
myfunction();

function myfunction(){
    var carName = 'Audi';
    document.getElementById('demo1').innerHTML = typeof carName + " " + carName;
}

    document.getElementById('demo2').innerHTML = typeof carName;

    