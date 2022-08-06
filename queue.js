//new 생성자로 배열을 만든다.
let queue = new Array(queueSize);
let queueSize = 5;

//큐 배열 안에 요소를 넣어준다
for (let i = 0; i < queueSize; i++){
    queue[i] = i + 1;
} // [1, 2, 3, 4]

queue.push(5);
console.log(queue); // [1,2,3,4,5]

queue.shift();
console.log(queue); //[2,3,4,5]

queue.unshift(1);
console.log(queue); //[1,2,3,4,5]

queue.pop();
console.log(queue); //[1,2,3,4]