var term = require('@amperka/thermometer').connect(A4);
var disp = require('@amperka/quaddisplay').connect(P13);
var sum=0;
I2C1.setup({sda: SDA, scl: SCL, bitrate: 400000});
var bar = require('@amperka/barometer').connect({i2c: I2C1});
var but = require('@amperka/button').connect(P0);
disp.display('0000');
bar.init();
setInterval(function() {
  var cel = term.read('C');
  var mm = bar.read('mmHg');
  sum=sum+parseFloat(cel.toFixed(1));
  console.log(mm);
  
}, 1000);
setInterval(function(){
  sum=sum/30;
  disp.display(sum.toFixed(1));
  sum=0;
} ,30000);
