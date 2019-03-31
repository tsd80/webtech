'use strict';

const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');

const clicks = {
  red:0,
  yellow:0,
  green:0
};

red.addEventListener('click', () => {
  let x = window.getComputedStyle(red,null).getPropertyValue('background-color');
  showThem('red', x);
});
yellow.addEventListener('click', () => {
  let x = window.getComputedStyle(yellow,null).getPropertyValue('background-color');
  showThem('yellow', x);
});
green.addEventListener('click', () => {
  let x = window.getComputedStyle(green,null).getPropertyValue('background-color');
  showThem('green', x);
});



const showThem = (what, color) => {
  clicks[what] +=1;
  const whatIs = document.getElementById('what');
  const countNum = document.getElementById('count');
  const colour = document.getElementById('colour');

  whatIs.innerText = what;
  countNum.innerText = clicks[what];
  colour.innerText = color;
};