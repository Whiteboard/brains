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


    

/*This bit is the slider on the homepage*/
    var delay = 4000, // delay in ms
        tO; // timeout
    
    function startSlider(){
        clearTimeout(tO);
        tO = setTimeout(goToSlide, delay);
    }
    
    function setupControls(){
        
        $(".slide-controls").on("click", ".slide-control", function(e){
            
            // e is the event. If these are links, do the next line.
            e.preventDefault();
            
            var theIndex = $(this).index();
            
            // You may want to do this as well, although you could do this in the actual goToSlide function for portability.
            // $(this).addClass("current").siblings().removeClass("current");

            goToSlide(theIndex);
        });
        
    }
    
    function goToSlide(i){
        var allslides = $(".slide"),
            currslide = allslides.filter(".current");        
        if (i){
            // if you pass in an i to goToSlide(), go to that slide. Useful for slide button controls.
            var nextslide = allslides.eq(i);
        } else {
            // let's go to the next slide by default
            var nextslideIndex = (function(){
            
                if (currslide.index() == allslides.length -1){
                    // we are at the last slide, so let's loop back around
                    return 0;
                } else {
                    return currslide.index()+1;
                }
            
            }()); // this is called a self invoking anonymous function (or siaf for a really hard acronym to remember)
            var nextslide = allslides.eq(nextslideIndex);
        }
        
        // now, go.
        $(".slider-control").eq(nextslideIndex).addClass("current").siblings().removeClass("current");
        nextslide.addClass("current").siblings().removeClass("current");

        animateSlides(nextslide);
        startSlider();
    }
    function animateSlides(toslide){
        // toslide is the slide we are animating to... of course
        var strip = $(".slidewrap-inner");
        // here is where you could do some Modernizr magic to see if CSS transitions are available, but eff that for now.
        strip.css({
            marginLeft : toslide.index() * -100 + "%"
        });
    }

    // let's kick this pig
    startSlider();




/*This bit runs the bio details section in trusts.html*/
    /*Variables 'n stuff.*/
    var focus = $(".details"),
        triggers = $(".thumbs");

        

    //Event trigger
    triggers.on("click", ".thumb", function(e){
        // e refers to the browser event itself. Check out console.log(e) for more info.
        var i = $(this).addClass("focus").index();
        $(this).siblings().removeClass("focus");
        focus.find(".detail").eq(i).addClass("focus").siblings().removeClass("focus");
    });



