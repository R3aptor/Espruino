var pot = require('@amperka/pot').connect(A0);
var led = require('@amperka/led').connect(P1).turnOn();
var but = require('@amperka/button').connect(P0);
function upB(){
  var val = pot.read();
  led.brightness(val);
}
function tog(){
  led.toggle();
}
but.on('press',tog);
setInterval(upB,10);