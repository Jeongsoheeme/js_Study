//i=i+1 i++
//짝수
// for(let i = 0; i<=10;i++){
//   if(i%2==0){
//     console.log("Hello",i) 
//   }
// }

for(let i =0;i<=10;i+=2){
  console.log("Hello",i) 
}

//구구단 만들기
for(let i=2; i<10;i++){
  for(let z=1; z < 10; z++){
    console.log(i+'*'+z+'='+i*z)
  }
}

let i=2
while(i<10){
  console.log("while문 실행",i)
  i++;
}

let fruit = ["banana","apple","grappe","mango"]

for(let i =0;i<fruit.length;i++){
  console.log(fruit[i])
}