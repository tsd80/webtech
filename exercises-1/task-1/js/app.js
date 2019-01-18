'use strict';

const doSomething = () =>{

  //catching value of parameter field and process it
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const result = document.getElementById('result');

  //catching BMI value
  const bmi=calcBMI(height,weight);

  //Checking if bmi is defined
  result.innerText = (bmi) ? 'Your BMI is: '+bmi.toFixed(2) : 'Can not calculate';
};

const calcBMI = (height, weight) =>{
  //returning undefined if input values are not fine
  if ((!height) || (!weight)) {return}
  return weight/(height*height);

};

const clearIt = () => {
  const result = document.getElementById('result');
  result.innerText="";
};

const button = document.getElementById('calculate');
button.addEventListener('click', doSomething);

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearIt);

