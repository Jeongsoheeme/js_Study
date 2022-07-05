// "안녕 내 이름은 제시카야"라는 문장을 프린트하는 함수 'greet’를 만드시오
// 이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오 예) “안녕 내 이름은 에밀리야”, “안녕 내 이름은 할리야”
// 매개변수로 전달받은 이름을 반환하게 함수를 수정하시오
//  meetAt 함수를 만들어주세요.
//      인자를 세개 받습니다.
//  첫번째 인자는 년도에 해당하는 숫자입니다.
//  두번째 인자는 월에 해당하는 숫자입니다.
//  세번째 인자는 일에 해당하는 숫자입니다.
//  년도 인자만 받았을 경우 → "1234년" 과 같은 형식의 문자열을 리턴 해주세요.
//  년도,월 인자를 받았을 경우 → 년도와 월을 조합해서 "1234년 5월" 과 같은 형식의 문자열을
//  리턴 해주세요.
//  년도,월,일 인자를 전부 받았을 경우 → 년도,월,일을 조합해서 "1234/5/6" 과 같은 형식의 문자열을
//  리턴 해주세요.

 function greet(name){
   console.log("안녕 내 이름은",name,"이야")
   return name
 }
const name = greet("지영")

function meetat(year,month,day){
  let todayyear = year;
  let todaymonth = month;
  let todayday = day;

  if (todayday){
    return `${todayyear}/${todaymonth}/${todayday}`;
  }
  if (todaymonth){
    return `${todaymonth}월 ${todayday}일`;
  }
  if (todayday){
    return `${todayyear}년`;
  }
}

console.log(meetat(22,07,05))

