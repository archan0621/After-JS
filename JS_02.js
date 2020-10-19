// var a = 10;

// console.log(window.a);

// this.b = 11;

// console.log(window.b);

var sample = {
    name : "abc"
}

var name = "xyz"

function print(){
    console.log(this.name)
}

print();

print.call();