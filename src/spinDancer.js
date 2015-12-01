// a dancer that changes color each step

var SpinDancer = function(top, left, timeBetweenSteps) {
  RainbowDancer.call(this, top, left, timeBetweenSteps);
  //this.timeBetweenSteps is some other random number
};

SpinDancer.prototype = Object.create(RainbowDancer.prototype);
SpinDancer.prototype.constructor = SpinDancer;

SpinDancer.prototype.step = function() {
  // if (this.currentColorIndex === this.colorList.length - 1) {
  //   this.currentColorIndex = 0;
  // }
  // else {
  //   this.currentColorIndex++;
  // }

  // if (this.expanding) {
  //   this.$node.animate({'borderWidth': this.maxSize + 'px' }, this.timeBetweenSteps);
  //   this.expanding = false;
  // }
  // else {
  //   this.$node.animate({'borderWidth': '10px' }, this.timeBetweenSteps);
  //   this.expanding = true;
  // }
  // this.$node.animate({'borderColor' : this.colorList[this.currentColorIndex] }, this.timeBetweenSteps);
  RainbowDancer.prototype.step.call(this);
};

