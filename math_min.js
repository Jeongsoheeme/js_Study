function solution(arr){
    let min = Math.min(...arr);

    return min;
}

let arr = [5, 3, 7, 11, 22, 15, 17];
console.log(solution(arr));