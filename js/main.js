/* do not modify this directly!
Modify plugins.js and script.js, then use the Makefile, please. */
/* plugins.js *//*
	depends on:
		jQuery
*/
(function($,w,undefined){

}(jQuery, window));




function homeNews(){
        $('h2.light').click(function(){
            if (!$(this).hasClass('open')) {
                $('.expandograph.open').removeClass('open');
                $(this).addClass('open');
            }
        });
    }