//빈값 여부 체크하여 리턴하는 함수
var commonuntil = {
isEmpty : function (str)
    {
    return (str == '' || str == undefined || str == null || str == 'null');
    },
    isNotEmpty : function(str){
    return ! this.isEmpty(str);
    }
}
