//공백 유무 검사
var reg = /\s/g;
var checkStr = '안 녕 하 세 요';

if (checkStr.match(reg))
{
    alert("공백이 있습니다");
}
else
{
    alert("공백이 없습니다");
}

//공백 제거하기
checkStr = checkStr.replace(/\s/g,"");
alert(checkStr);