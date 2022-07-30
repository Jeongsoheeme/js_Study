//1개씩 증가하느 별찍기
for(var star=1; star <= 5; star +=1){
	console.log('*'.repeat(star));
}

//거꾸로 별찍기
for(var star=5; star >= 1; star -= 1){
	console.log('*'.repeat(star));
}

//두배씩 늘어나는 별찍기
for(var star = 1; star <= 10; star *= 2){
	console.log('*'.repeat(star));
}

//두개씩 작아지는 별찍기
for(var star=8; star >= 2; star-=2){
	console.log('*'.repeat(star));
}

//공백이 있는 작아지는 별찍기
for(var s=5; s >= 1; s -= 1){
	console.log(' '.repeat(5-s) + '*'.repeat(s));
}

//트리모양 별찍기
for(var s=1; s<=9; star+=2){
	console.log(' '.repeat((9-s)/2) + '*'.repeat(s));
}