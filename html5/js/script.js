$( function() {
    /* ABRE E FECHA MENU */
    $('.nav-toggle, .nav-close').click(function(e) { 
        e.preventDefault();
        $('.nav').toggleClass('active');
    });
});