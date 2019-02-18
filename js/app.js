jQuery(function ($) {

    var animar = function () {
        var rango = $(window).scrollTop() + $(window).height();
        var animable = $('.animable');

        if (animable.length === 0) {
            $(window).off('scroll', animar);
        }

        animable.each(function () {
            var animado = $(this);
            if ((animado.offset().top + animado.height() - 20) < rango) {
                animado.removeClass('animable').addClass('animado');
            }
        });
    };

    $(window).on('scroll', animar);
    $(window).trigger('scroll');

});
