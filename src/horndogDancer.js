// a dancer that Horndogs each step

var HorndogDancer = function(top, left, timeBetweenSteps) {
  SpinDancer.call(this, top, left, timeBetweenSteps);

  var distances = dancers.map(function(dancer) {
    return (dancer.left - left) * (dancer.left - left) + (dancer.top - top) * (dancer.top - top);
  });
  // var partnerIndex = distances.reduce(function(min, curr, index) {
  //   if(distances[index] < min) {
  //     return index;
  //   } else {
  //     return index;
  //   }
  // });

  //var minIndex (holds the index of the minimum distance)
  //loop through distances (from index 1 to end)
  var minIndex = 0;
  for (var i = 1; i < distances.length - 1; i++) {
    if (distances[i] < distances[minIndex]) {
      minIndex = i;
    }
  }
  this.partner = dancers[minIndex];
  //if distances[i] < distances[minIndex] (first runthrough compares indexes 1 and 0)
  //minIndex = i= 2

  //  this.$node.addClass('Horndog');
  //this.$node = $('<span class="dancer Horndog"></span>');
  //this.timeBetweenSteps is some other random number
};

// starts with a position
// runs through dancer array -2
// reduce to get dancer with closest position, return

// animate/move function
// takes closest top, left
// moves horndog to like that top -50 that left -50?
//    consider screen edges?

HorndogDancer.prototype = Object.create(SpinDancer.prototype);
HorndogDancer.prototype.constructor = HorndogDancer;

HorndogDancer.prototype.step = function() {
  //check partner's relative position -(50,50)
  //if its to the left, -50
  var newTop;
  var newLeft;
  if (this.top < this.partner.top) {
    //horndog below partner, move horndog half the distance
    //horndog.top = 100; partner.top = 500; -> 300
    //(500-100)/2 + 100 === 300
    newTop = (this.partner.top - this.top) / 2 + this.top;
  }
  //otherwise, +50
 else {
    //horndog above partner, move horndog half the distance
    //horndog.top = 500; partner.top = 100; -> 300
    //500 - (500 - 100)/2 = -300
    newTop = this.top - (this.top - this.partner.top) / 2;
  }
  //same with y-coord
   if (this.left < this.partner.left) {
     //horndog below partner, move horndog half the distance
     //horndog.top = 100; partner.top = 500; -> 300
     //(500-100)/2 + 100 === 300
     newLeft = (this.partner.left - this.left) / 2 + this.left;
   }
   //otherwise, +50
  else {
     //horndog above partner, move horndog half the distance
     //horndog.top = 500; partner.top = 100; -> 300
     //500 - (500 - 100)/2 = -300
     newLeft = this.left - (this.left - this.partner.left) / 2;
   }
  //hornDog.top = 100, hornDog.left =100
  //animating to (150, 150)
  this.$node.animate({
    top: newTop,
    left: newLeft
  }, this.timeBetweenSteps);
  //update horndog's new position
  this.top = newTop;
  this.left = newLeft;
  //this.$node.whatever
  SpinDancer.prototype.step.call(this);
};
