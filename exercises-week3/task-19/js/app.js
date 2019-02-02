'use strict';

class CoffeeMaker {
  constructor (waterSize, beansSize) {
    this._isOn = false;
    this.water = new WaterContainer(waterSize);
    this.beans = new BeansContainer(beansSize);
  }
  isOn() {
    return this._isOn;
  }
  pressOnOffSwitch() {
    this._isOn=!this._isOn;
  }
  fillBeansContainer(amount) {
    this.beans.fill(amount);
  }
  fillWaterContainer(amount) {
    this.water.fill(amount);
  }
  brew () {
    if (this._isOn&&this.water.amount>=1&&this.beans.amount>=1) {
      this.water.amount--;
      this.beans.amount--;
      return true;
    } else {
      return false;
    }
  }
}

class Container {
  constructor (size, unit) {
    this._size = size;
    this._unit = unit;
    this._amount = 0;
  }
  fill (amount) {
    this._amount+=amount<this._size?this._amount+=amount:this._amount=this._size;
  }
  get amount () {
    return this._amount;
  }
  set amount (input) {
    this._amount=input;
  }
}

class WaterContainer extends Container {
  constructor (_size) {
    super(_size);
    this._unit="l";
  }
}

class BeansContainer extends Container {
  constructor (_size) {
    super(_size);
    this._unit="g";
  }
}

const isItOn = (inp) => {
  let x = inp.isOn()?"The machine is on":"It is turned off";
  console.log(x);
};

const logBrew = (inp) => {
  let x=inp?"Coffee is done":"Can not make you coffee";
  console.log(x);
};

const coffeeMachine = new CoffeeMaker(2,2);

coffeeMachine.fillBeansContainer(5); //feeding over the limit
coffeeMachine.fillWaterContainer(5); //feeding over the limit

isItOn(coffeeMachine); //checking status of the power switch
logBrew(coffeeMachine.brew()); //trying to brew with switch turned off
coffeeMachine.pressOnOffSwitch(); // toggling power switch
isItOn(coffeeMachine); //checking status of the power switch

logBrew(coffeeMachine.brew()); //trying to brew first time
logBrew(coffeeMachine.brew()); //trying to brew second time
logBrew(coffeeMachine.brew()); //trying to brew third time, should not work as we only have 2 beans and two water liters

