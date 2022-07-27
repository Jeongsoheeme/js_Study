//특정 길이가 넘어가면 길이를 잘라 처리하는 자바스크립트
function cutByMaxStr(str,maxLength){
    if(str == undefined || str == null){
        return '';
    }
    if (str.length > maxLength){
        str = str.substring(0, maxLength) + '.....';
        // str을 maxLength 길이만큼 자르고 '.....'을 뒤에 붙인다
        }
        return str;
}