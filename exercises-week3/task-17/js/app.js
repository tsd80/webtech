'use strict';
class Marker {
   /**
   * Marker maker.
   * @param {number} ink - An amount of ink in marker.
   */
  constructor (ink) {
    // stateOfCap: true = on, false = off
    this.stateOfCap = true;
    this.ink = ink;
  }
  /**
   * Put cap back on the marker.
   * @return {boolean} If there is action, return true.
   */
  putCapOn() {

    if (!this.stateOfCap) {this.stateOfCap=true; return true}
    else {return false}
  }
  /**
   * Take the cap off the marker
   * @return {boolean} If there is action, return true.
   */
  takeCapOff () {
    if (this.stateOfCap) {this.stateOfCap = false; return true}
    else {return false}
  }
  /**
   * Refill the ink by 1
   */
  refill () {
    this.ink++;
  }
  /**
   * * @return {number} The amount of ink left.
   */
  checkInk (){
    return this.ink;
  }
  /**
   * Check cap state
   * * @return {text} Return state of cap.
   */
  checkCap () {
    return this.stateOfCap?"Cap is on":"Cap is off";
  }
  /**
   * Draw if cap is off and amount of ink is >= 1.
   * @return {boolean} Was it possible to draw.
   */
  draw () {
    if ((!this.stateOfCap)&&(this.ink>=1)) {
      this.ink--;
      return true;
    }
    else {
      return false;
    }
  }
}
const removeIt = (what) => {
  return what.takeCapOff()?"Cap has been removed":"You already removed it!";
};
const putItOn = (what) => {
  return what.putCapOn()?"Cap has been added to marker":"The cap is already on!";
};
const drawIt = (what) => {
  const isIt = what.draw();
  return isIt?'You drawn':'You CAN NOT draw';
};
const addInk = (what) => {
  what.refill();
  return "Ink added";
};

const marker = new Marker(2);
const remove = document.getElementById('remove');
const putOn = document.getElementById('putOn');
const draw = document.getElementById('draw');
const refill = document.getElementById('refill');
const textOut=document.getElementById('result');
const fill=document.getElementById('fill');
const capState = document.getElementById('capState');

fill.innerText = "your fill is: "+marker.checkInk();
capState.innerText = marker.checkCap();
textOut.innerText ="Let's draw!";


remove.addEventListener('click', function () {textOut.innerText=removeIt(marker);capState.innerText = marker.checkCap();});
putOn.addEventListener('click', function () {textOut.innerText=putItOn(marker);capState.innerText = marker.checkCap();});
draw.addEventListener('click', function () {textOut.innerText = drawIt(marker);fill.innerText = "your fill is: "+marker.checkInk();});
refill.addEventListener('click', function () {textOut.innerText = addInk(marker);fill.innerText = "your fill is: "+marker.checkInk();});
