/**
 * 숫자값이 정수인지 여부를 반환하는 함수
 * @param { Number } value : 숫자 값
 * @return { Boolean } : 정수(true), 정수 아닐 경우(false)
 */
 function isInt(value) {
    let parse = parseFloat(value);
    return !isNaN(value) && (parse | 0) === parse;
  }
  /**
   * 정수부에 3자리 마다 ',' 를 체크해주는 함수
   * @param { Integer } value : 정수 또는 실수 값
   * @return { String } : ',' 가 적용된 실수 또는 정수 문자열 값
   */
  function addComma(value) {
    if (!isInt(value)) {
      let integer = value | 0;
      let floater = (value - integer).toFixed(2).toString().substring(1);
      return addComma(integer) + floater;
    } else {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }
  /**