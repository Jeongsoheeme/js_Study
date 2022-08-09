//마방진 구하기 : 가로의 합, 세로의 합, 대각선의 합이 모두 같은 배열

function magicSquare(){
    // 5*5 2차원 배열을 생성
    var arr = new Array(5);
    for (let i=0; i<5; i++) arr[i] = new Array(5).fill(0);

    //배열의 인덱스
    var i = 0;

    //첫번째 행의 중앙이 시작점
    var middle = parseInt(5/2);

    //k는 배열에 들어갈 숫자
    for (let k=1; k<=25; k++){
        arr[i][middle] = k;
        if(k%5 == 0){
            i++;
            continue;
        }
        else{
            i--; middle++;
            if(i < 0) i=4;
            if(middle > 4) middle = 0;
        }
    }
    return arr;
}

console.log(magicSquare());