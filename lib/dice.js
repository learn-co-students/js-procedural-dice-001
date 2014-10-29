'use strict';


function Dice() {
}

Dice.prototype.roll = function(){
  return ( 1 + Math.floor( Math.random() * 6 ) );
};
