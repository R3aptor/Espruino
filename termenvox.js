var buz = require('@amperka/buzzer').connect(P0).turnOn();
var sen = require('@amperka/light-sensor').connect(A0);
var but = require('@amperka/button').connect(P7);
function sint(){
  var freq = 10 * sen.read('lx');
  buz.frequency(freq);
}
function tog(){
  buz.toggle();
}
but.on('press',tog);
setInterval(sint,10);