


'use strict';
$(document).ready(function() {

    // Accordion
    var all_panels = $('.templatemo-accordion1 > li > ul').hide();

    $('.templatemo-accordion1 > li > a').click(function() {
        console.log('Hello world!');
        var target =  $(this).next();
        if(!target.hasClass('active')){
            all_panels.removeClass('active').slideUp();
            target.addClass('active').slideDown();
        }
      return false;
    });
    // End accordion  
});
