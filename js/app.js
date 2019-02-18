jQuery(function ($) {

    // Function which adds the 'animated' class to any '.animatable' in view
    var animar = function () {

        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height();
        var animable = $('.animable');

        // Unbind scroll handler if we have no animatables
        if (animable.length === 0) {
            $(window).off('scroll', animar);
        }

        // Check all animatables and animate them if necessary
        animable.each(function () {
            var animado = $(this);
            if ((animado.offset().top + animado.height() - 20) < offset) {
                animado.removeClass('animable').addClass('animado');
            }
        });
    };

    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', animar);
    $(window).trigger('scroll');

});