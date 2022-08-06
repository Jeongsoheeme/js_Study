//원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 문자열로 연결한 문자열 반환한다.

let arr = [1,2,3,4];

let myVar1 = arr.join(); //1,2,3,4 기본구분자로연결
let myVar2 = arr.join(','); //1,2,3,4
let myVar3 = arr.join('+'); //1+2+3+4
let myVar4 = arr.join(''); // 1234