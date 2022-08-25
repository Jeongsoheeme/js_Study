const myArr = ['강아지', '고양이', '햄스터', '거북이', '이구아나'];

myArr.forEach((el, i) => {
    console.log(i);
    console.log(el);
    if(el === '고양이') {
    	myArr.shift();
    }
})

console.log(myArr); // ["고양이", "햄스터", "거북이", "이구아나"]