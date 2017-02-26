var term = require('@amperka/thermometer').connect(A4);
var disp = require('@amperka/quaddisplay').connect(P13);
var sum=0;
disp.display('0000');
setInterval(function() {
  var cel = term.read('C');
  sum=sum+parseFloat(cel.toFixed(1));
  
}, 1000);
setInterval(function(){
  sum=sum/30;
  disp.display(sum.toFixed(1));
  sum=0;
} ,30000);
