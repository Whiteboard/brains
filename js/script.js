/*
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
