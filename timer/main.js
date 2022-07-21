const nums = timer.querySelector('#num-container');

let left = 15;
let right = 45;

for (let i=0; i<6; i++) {
  const numBox = document.createElement('div');
  numBox.classList.add('num-box');
  numBox.style.transform = `rotate(${i*30}deg)`;

  const spanLeft = document.createElement('span');
  const spanRight = document.createElement('span');

  const leftText = left - 5*i;
  spanLeft.textContent = leftText<0 ? 60+ leftText : leftText;
  spanRight.textContent = right - (5 * i);

  spanLeft.style.transform = `rotate(${-30*i}deg)`;
  spanRight.style.transform = `rotate(${-30*i}deg)`;

  numBox.append(spanLeft,spanRight);
  nums.append(