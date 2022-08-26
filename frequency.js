const validAnagram = (str1, str2) => {
  const freq1 = {};
  const freq2 = {};
  for (const value of str1) {
    freq1[value] = (freq1[value] || 0) + 1;
  }
  for (const value of str2) {
    freq2[value] = (freq2[value] || 0) + 1;
  }
 
  for (const key in freq1) {
    if (!(key in freq2)) return false;
    if (freq1[key] !== freq2[key]) return false;
  }
  return true;
};