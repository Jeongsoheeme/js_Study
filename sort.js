//숫자요소를 정렬할 때는 sort메소드에 정렬순서를 정의하는 비교함수를 인수로 전달한다

const points = [40, 100, 1, 5, 2, 25, 10];

//숫자 배열의 오름차순 정렬 : 비교함수의 반환값이 0보다 작으면 a를 우선하여 정렬
points.sort((a, b) => a - b);

//숫자 배열의 내림차순 정렬 : 비교함수의 반환값이 0보다 작으면 b를 우선하여 정렬
points.sort((a, b) => b - a);

//숫자 배열에서 최소값 취득
//숫자 배열에서 최대값 취득.