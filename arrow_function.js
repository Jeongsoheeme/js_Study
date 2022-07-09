// 화살표 함수 기본 구조
const numberSum = (a, b, c) => {
	const result = a + b + c;
    return result;
};

// 함수의 실행 방식은 일반 함수와 동일
numberSum(1, 2, 3); // 결과: 6

// 화살표 함수는 일반 함수와 달리 파라미터가 하나인 경우는 () 생략 가능
// 파라미터가 없거나 2개 이상인 경우는 () 생략 불가능
const ianFunction1 = (a) => {
	return a + 1;
};
const ianFunction2 = a => {
	return a + 1;
};

// 화살표 함수의 정의가 한 줄인 경우 {}와 return 생략 가능
const ianFunction3 = (a) => a + 2;