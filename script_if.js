// if(조건문){
//   조건이 충족하면 할일들
// }

// let age = 18

// if(age > 20){
//   console.log("운전이 가능합니다")
// } else if(age >= 18) {
//   console.log("오토바이 운전이 가능합니다")
// }
// else{
//   console.log("운전 불가능합니다")
// }
//범위를 작은것부터 큰걸로 순서를 세워줘야한다 

// let age = 21

// if(18<= age && age < 20){
//   console.log("오토바이 운전이 가능합니다")
// } else if(age >20) {
//   console.log("운전이 가능합니다")
// }
// else{
//   console.log("운전 불가능합니다")
// }

let age = 21
let licence = true

if(age>20){
  if(licence == true){
    console.log("운전이 가능 합니다")
  }else {
    console.log("면허를 따세용")
  }
}else{
  console.log("운전 불가능합니다")
}