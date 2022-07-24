//휴대폰번호 정규식
function fn_submit() {
    var text = document.getElementById('text').value;

    var regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (regPhone.test(text) === true) {
        alert('입력된 값은 휴대전화번호입니다.');
    }
}

//이메일 정규식
function fn_submit() {
    var text = document.getElementById('text').value;

    var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (regEmail.test(text) === true) {
        alert('입력된 값은 이메일입니다.');
    }
}