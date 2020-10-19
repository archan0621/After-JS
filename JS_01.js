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
    객체를 넘기면 해당 함수가 주어진 객체의 메서드인것처럼 사용한다,
    apply : 매개변수를 배열형태로 받는다,
    bind : 매개변수를 넘길경우, 항상 매개변수를 받으면서 호출되는 형태가 된다.
*/


/*
const a = {name:"sdh"}
const b = {name:"high"}
const c = {name:"school"}

function exam(){
    return `${this.name} hello`     //call 개념 잡기 this가ㅏ 무엇을 가르치는지 이해를 하거라
}

exam.call()

console.log(exam.call(a) //this에서 변수 a를 넣어줬기ㅣ 대문에 sdh이 출력이 됨
*/



