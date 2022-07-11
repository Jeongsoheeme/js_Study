let bts ={
    name:"방탄소년단",
    num:7
}

// let name = bts.name
// let num = bts.num

//같은 키값이여야 작동한다
let {name, num} = bts

let array = [1,2,3]

// let a = array[0]
// let b = array[1]
// let c = array[2]

// console.log(a,b,c)

let[a,b,c] = array

console.log(a,b,c);

//배열 중 a 뺀 나머지 선택 시
let array02 = [1,2,3]

let [a,...rest] = array02

console.log(rest);


let person02 = {
    name: "sohee",
    age:19,
    cute:true
}

// let {name,age,cute} = person02

let {name,...restinfo}=person02
console.log(name, restinfo)

//배열 이어붙이기
let a=[1,2]
let b=[3,4]
let c=[5,6]

// let result = a.concat(b,c)
// console.log(result)

let result = [...a,...b,...c]
console.log(result)

//ES6 부터 달라진 함수 선언방식 (화살표 함수)
function foo (){
    console.log(hello)
}

let foo = ()=>{
    console.log("hello")
}

function easy (){
    return "haha"
}
//함수가 한줄이고 리턴만 있으면 {} 생략 가능
let easy = ()=>"haha"

//this 설명
let age = 17
let person = {
    name:"hehe",
    age:20,
    getinfo:function(){
        console.log(this.age) //화살표 함수선언은 this 함수 사용불가
    }
}
person.getinfo();
