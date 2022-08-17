function scramble(str1, str2) {  const charList = str1.split('').reduce((acc, cur) =>
{acc[cur] = (!acc[cur]) ? 1 : acc[cur] + 1; return acc;},{}); return str2.split('').every((char) => --charList[char] >= 0);}
