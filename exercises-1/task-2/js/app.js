'use strict';

const doSomething = () =>{

  //catching value of parameter field and process it
  const b = document.getElementById('a').value;
  const a = document.getElementById('b').value;
  const result = document.getElementById('result');

  //catching BMI value
  const gcd=calcGCD(a,b);

  result.innerHTML = (gcd) ? 'Your GCD is: '+gcd : 'Can not calculate';
  result.innerHTML +="<br /> so "+b+"/"+a+" = "+b/gcd+"/"+a/gcd+".";
};

const calcGCD = (a, b) =>{
  //when a%b=0, returning b
  if (a%b===0) {return b}
  //recursively entering function with ex. 10%15=
  return calcGCD(b, a%b);

};

const clearIt = () => {
  const result = document.getElementById('result');
  result.innerText="";
};

const button = document.getElementById('calculate');
button.addEventListener('click', doSomething);

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearIt);

