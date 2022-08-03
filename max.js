//Math.max()는 입력받은 값 중 가장 큰 수를 반환한다.

Math.max(1,3);

Math.max(1,9,6,11);

//숫자가 아닌 배열을 사용하면 제대로 동작하지 않는다
Math.max([1, 9, 6, 11]);

//배열에서 사용하기 위해서는 apply()메서드를 같이 사용해야한다.
let array = [100, 40, 80, 120, 50, 90, 10, 20];
let result = Math.max.apply(null,array);
console.log(result);

//스프레드 연산자로 배열을 풀어서 구하는 방법 (ES6부터 사용가능)
let array = [100, 40, 80, 120, 50, 90, 10, 20];
let result2 = Math.max(...array);
console.log(result2);

//반복문을 사용하여 해결하는 방식
let array = [100, 40, 80, 120, 50, 90, 10, 20];
let highNumber = 0;
array.forEach(function(item, index){
    let result = highNumber < item ? highNumber = item : highNumber;
    return result;
})
console.log(highNumber);