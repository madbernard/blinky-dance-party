// a dancer that Horndogs each step

var HorndogDancer = function(top, left, timeBetweenSteps) {
  var distances = dancers.map(function(dancer){
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
  //if distances[i] < distances[minIndex] (first runthrough compares indexes 1 and 0)
    //minIndex = i= 2

  console.log(distances);
  console.log(partnerIndex);
  SpinDancer.call(this, top, left, timeBetweenSteps);
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
  SpinDancer.prototype.step.call(this);
};