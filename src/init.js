$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    //<a href="#" class="addDancerButton" data-dancer-maker-function-name="BlinkyDancer">add a blinky dancer</a>    </div>
    //dancerMakerFunctionName = 'BlinkyDancer'

    // get the maker function for the kind of dancer we're supposed to make
    // dancerMakerFunction = window.BlinkyDancer (the function)
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    //var dancer = BlinkyDancer(x,y,timeout)
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      500 + Math.random() * 500
    );

    dancer.step();

    $('.shifty').mouseover(function() {
        $(this).animate({top: Math.random() * 1000, left: Math.random() * 1000}, 500);
    });

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

});
