// a dancer that changes color each step and pulses into a squarish shape

var RainbowDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.colorList = ['aqua', 'lime', 'fuchsia'];
  this.currentColorIndex = 0; //possibly change to random
  this.expanding = true;
  this.maxSize = 10 + Math.random() * 30;
  //this.timeBetweenSteps is some other random number
};

RainbowDancer.prototype = Object.create(Dancer.prototype);
RainbowDancer.prototype.constructor = RainbowDancer;

RainbowDancer.prototype.step = function() {
  if (this.currentColorIndex === this.colorList.length - 1) {
    this.currentColorIndex = 0;
  }
  else {
    this.currentColorIndex++;
  }

  if (this.expanding) {
    this.$node.animate({'borderWidth': this.maxSize + 'px' }, this.timeBetweenSteps);
    this.expanding = false;
  }
  else {
    this.$node.animate({'borderWidth': '10px' }, this.timeBetweenSteps);
    this.expanding = true;
  }

  this.$node.animate({'borderColor' : this.colorList[this.currentColorIndex] }, this.timeBetweenSteps);
  Dancer.prototype.step.call(this);
};

