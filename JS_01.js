// var a = function (msg){
//     return msg
// }

// function a(){
//     return "1"
// }

// var a = (msg) => {return msg}

// var a = () => "hello"

// const b = "hi"

// let a = "js" //let은 재할당 가능

// a = "javascript"

 // b = "hello"


// console.log(a);

/*  call: 함수를 호출하면서 call을 사용하고 this로 사용할 
    객체를 넘기면 해당 함수가 주어진 객체의 메서드인것처럼 사용한다,.
    apply
    bind
*/

const a = {name:"sdh"}
const b = {name:"high"}
const c = {name:"school"}

function exam(){
    return `${this.name} hello`
}

exam.call()

console.log(exam.call(a))

