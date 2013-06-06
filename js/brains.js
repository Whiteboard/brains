/*
	depends on:
		jQuery
*/
(function($,w,undefined){

}(jQuery, window));

var focus = $(".details");

    //Event trigger
  triggers.on("click", ".thumb", function(e) {
        var id = $(this).data("target");
        $('.thumb').siblings().removeClass("focus");
        $(".detail").eq("#"+id).addClass("focus").siblings().removeClass("focus");
    });
    //on click var id = $(this).data("target")
    //$("#"+id)




    /*Variables 'n stuff.*/
    //var focus = $(".details"),
      //  triggers = $(".thumbs");

        

    //Event trigger
    //triggers.on("click", ".thumb", function(e){
        // e refers to the browser event itself. Check out console.log(e) for more info.
      //  var i = $(this).addClass("focus").index();
    //    $(this).siblings().removeClass("focus");
  //      focus.find(".detail").eq(i).addClass("focus").siblings().removeClass("focus");
//    });

var focus = $(".details");

    //Event trigger
    triggers.on("click", "div", function(e) {
        var id = $(this).data("target");
        $('.thumb').siblings().removeClass("focus");
        focus.find(".detail").eq("#"+id).addClass("focus").siblings().removeClass("focus");
    });

triggers.on("click", ".thumb", function(e) {
    var id = $(this).data("target");
    $(this('.thumb')
});



/*This is the right one!*/
    var focus = $(".details");
    var triggers = $(".thumbs");
    //Event trigger
    triggers.on("click", ".thumb", function(e) {
        // get the id of the element you want to show
        // this refers to the element clicked; we can cache it for understanding's sake
        // the $ in front of trigger is just a convention to help us remember it's a jQuery object
        // Changes nothing about the variable.
        var $trigger = $(this);
        var id = $trigger.data("target");
        $trigger.addClass("focus")
            .siblings()
            .removeClass("focus");
        // .eq() takes an integer
        // .find() takes a css selector
        // if all else fails, follow your chain and check the api/docs at each level
        // id selectors happen to be very fast and refer only to one element, so we'll skip the "find" method for this.
        $("#"+id).addClass("focus").siblings().removeClass("focus");
    });


