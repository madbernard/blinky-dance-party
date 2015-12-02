// a dancer that shiftys each step

var ShiftyDancer = function(top, left, timeBetweenSteps) {
  SpinDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('shifty');
  // this.$node.mouseover(function(){
  //   console.log(this);
  //   this.css({top: this.top+60,
  //     left:this.left+60});
  // });
};

ShiftyDancer.prototype = Object.create(SpinDancer.prototype);
ShiftyDancer.prototype.constructor = ShiftyDancer;

ShiftyDancer.prototype.step = function() {
  SpinDancer.prototype.step.call(this);
};
