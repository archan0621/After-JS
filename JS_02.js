// var a = 10;

// console.log(window.a);

// this.b = 11;

// console.log(window.b);

// var sample = {
//     name : "abc"
// }

// const server_info = {
//     ip:'12.1.1.1',
//     port : 80
// }

// var name = "xyz"

// function print(){
//     console.log(this.ip)
// }

//print();

// print.call(server_info);

// bind vs call /apply

var tmp= {
    name:"abc",
    func:function () {
        alert(this.name)
    }
}

var tmp2 = {
    name: "xyz",
}

var func2 = tmp.func.bind(tmp2);

func2();

tmp.func();