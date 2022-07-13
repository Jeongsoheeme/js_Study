let names = ["steven","bill","mark","elon","jeff","warren","larry","tim","lloyd"]

for(let i = 0;i<names.lenght;i++){
    console.log(names[i])
}

// 첫번째 방법
// function printName(item){
//     console.log(item)
// }

// names.forEach(printName)

// 두번째 방법
// names.forEach(function printName(item){
// console.log(item)
// })

// 세번째 방법
// names.forEach((item)=>{console.log(item)})
// names.forEach((item,idex)=>{console.log(item,index)})

//map 함수
//forEach는 반환값이 없는데 map은 반환값이 있다
// let data = names.map((item,index)=>{
//     return item
// })
// console.log(data)

//map을 쓰는 이유 : 객체에서 원하는 값만 출력하고 싶을때
let ceolist = [
    {name:"Larry Page",age:23,ceo:true},
    {name:"Tim Cook",age:40,ceo:true},
    {name:"Elon Musk",age:55,ceo:false}
]

let data = ceolist.map((item)=>{
    return item.name
})
console.log(data)

//filter 함수
//fiter은 조건을 넣어줘서 값을 출력할 수 있다
let data = ceolist.filter((item)=>{
    return item.age==23
})
console.log("filter:",data)

//some 함수
let data = names.some((item)=>{
    return item.startWith("L")
})
console.log("some:",data)

//every 함수 : 배열 모두 해당 조건인가 알수 있다.
let data = names.every((item)=>{
    return item.startWith("L")
})
console.log("every:",data)

//find 함수 : filter과 find의 차이는 filter은 속하는 애들 다 반환하고 find는 첫번째 한개만 반환
let data = names.find((item)=>{
    return item=="Larry Page"
})
console.log("find:",data)

//findindex 함수 : index 값 알 수 있다
let data = names.findindex((item)=>{
    return item=="Larry Page"
})
console.log("findindex:",data)