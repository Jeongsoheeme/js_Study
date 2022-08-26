function toWeirdCase(string){
    var arr = string.split(' ')
    var fullName = ''
    arr.forEach(function(v, i){
        var spl = arr[i].split('');
        var newSpl = spl.map(function(al, j){
            if(j % 2 == 0) {
            // 짝수번째 인덱스 -> 대문자
            return al.toUpperCase()
            } else {
            return al.toLowerCase()
        }})
        fullName += ' ' + newSpl.join('')
    })
        return fullName.trim()
    }