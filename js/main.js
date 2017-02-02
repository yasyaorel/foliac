$(function() {

    function change() {
        var current = $('.showing'),
            next = current.next();
        if (!next.length) next = $('.slides__img:first');
        next.addClass('showing');
        current.removeClass('showing');
    }

    setInterval(change, 3000);

    $('.isotope').isotope({
        itemSelector: '.isotope__img',
        layoutMode: 'masonry'
    });

    $('.filtres__item').click(function() {
        $('.filtres__item').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.isotope').isotope({
            filter: selector
        });
    });

});
