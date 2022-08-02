//평균 구하기

const value = [1, 2, 3, 4, 5, 6];

const average = values.reduce((acc, cur, i { length }) => {
    return i === length -1 ? (acc +cur) / length : acc + cur;
}, 0)

//마지막 순회이면 누적값으로 편균을 구해서 반환, 마지막순회 아니면 누적값을 반환
//계속 돌면서 누적을 했다가 마지막에 평균을 구하는 방식