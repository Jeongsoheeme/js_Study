// let menu =1

// if(menu == 1){
//   console.log("물건 사기")
// }else if(menu==2){
//   console.log("잔고확인")
// }else if(menu == 3){
//   console.log("히스토리확인")
// }else{
//   console.log("홈으로 돌아가기")
// }

//switch문
// switch(menu){
//   case 1:
//     console.log("물건사기")
//     break;
//   case 2:
//     console.log("물건사기")
//     break;
//   case 3:
//     console.log("히스토리확인")
//     break;
//   case 4:
//     console.log("홈으로 돌아가기")
//     break;
// }
//if와 switch의 차이 : if는 조건 범위 지정(ex: 1<menu && menu<5)이 가능하나 switch는 불가능

let menu = 2

// if(menu <=3){
//   console.log("범위안에 숫자입니다")
// }else{
//   console.log("범위 밖의 숫자입니다")
// }

//삼항연산식 조건?true 일때 : false 일때
let answer = menu <=3?"범위안에 숫자입니다" : "범위 밖의 숫자입니다"

console.log(answer)