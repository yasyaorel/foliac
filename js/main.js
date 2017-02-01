$(function() {

    function change() {
        var current = $('.showing'),
            next = current.next();
        if (!next.length) next = $('.slides__img:first');
        next.addClass('showing');
        current.removeClass('showing');
    }

    setInterval(change, 3000);

});
