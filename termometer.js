var term = require('@amperka/thermometer').connect(A4);
var disp = require('@amperka/quaddisplay').connect(P13);
var sum=0;
setInterval(function() {
  var cel = term.read('C');
  
  sum=sum+parseFloat(cel.toFixed(1));
  console.log(sum);
}, 1000);
setInterval(function(){
  sum=sum/30;
  console.log(sum.toFixed(1));
  sum=0;
} ,30000);
