// a dancer that shiftys each step

var ShiftyDancer = function(top, left, timeBetweenSteps) {
  HorndogDancer.call(this, top, left, timeBetweenSteps);
  // this.$node.addClass('shifty');
  this.$node.mouseover(function(){
    this.$node.css({top: this.top+60,
      left:this.left+60});
  });
};

ShiftyDancer.prototype = Object.create(HorndogDancer.prototype);
ShiftyDancer.prototype.constructor = ShiftyDancer;

ShiftyDancer.prototype.step = function() {
  HorndogDancer.prototype.step.call(this);
};
