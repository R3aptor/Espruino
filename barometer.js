I2C1.setup({sda: SDA, scl: SCL, bitrate: 400000});
var baro = require('@amperka/barometer').connect({i2c: I2C1});
var disp = require('@amperka/quaddisplay').connect(P13);

setInterval(function(){
  disp.display(baro.read('Pa').toFixed(0));

},3000);