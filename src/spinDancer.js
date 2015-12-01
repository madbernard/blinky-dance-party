// a dancer that spins each step

var SpinDancer = function(top, left, timeBetweenSteps) {
  RainbowDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spin');
  //this.$node = $('<span class="dancer spin"></span>');
  //this.timeBetweenSteps is some other random number
};

SpinDancer.prototype = Object.create(RainbowDancer.prototype);
SpinDancer.prototype.constructor = SpinDancer;

SpinDancer.prototype.step = function() {
  RainbowDancer.prototype.step.call(this);
};

