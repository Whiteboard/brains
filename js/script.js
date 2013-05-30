/*
	depends on:
		jQuery
*/
(function($,w,undefined){

}(jQuery, window));



/*This bit runs the "We <ACTION> this thing" section in index.html*/
//Hi. We're here to set some variables.
    var expando = $(".expandographs"),
        triggers = $(".header-triggers");
    
    //Event trigger
    triggers.on("click", "h2", function(e){
        // e refers to the browser event itself. Check out console.log(e) for more info.
        var i = $(this).addClass("focus").index();
        $(this).siblings().removeClass("focus");
        expando.find(".expandograph").eq(i).addClass("open").siblings().removeClass("open");
    });

    //Arrow to cycle through actions
    $(".forward.circle").on("click", function(){
       // go to next section
       var i = $(".expandograph.open").index();
       if (i == $(".expandograph").length - 1) {
           // we are at the last item
           return false;
       } else {
            triggers.find("h2").eq(i+1).trigger("click");
       }
    });
