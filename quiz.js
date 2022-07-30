// 정수 1~100사이의 짝수의 합과 홀수의 합을 구하시오

var sum1 = 0;
var sum2 = 0;

for(var i=1; i<=100; i++){
    if(i%2==0)
    sum1=sum1+i;
    if(i%2==1)
    sum2=sum2+i;
}
document.write("1~100까지의 짝수합:"+sum1,"<br>");
document.write("1~100까지의 홀수합:"+sum2,"<br>");