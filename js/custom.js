$(function () {

    $(window).bind("resize", function () {
        console.log($(this).width())
        if ($(this).width() <= 767) {
            $('#footer-collapsible-menu').removeClass('row').addClass('accordion')
            $('.footer-acc').removeClass('col').addClass('accordion-item')
            $('.footer-acc .accordion-collapse').addClass('collapse')
        } else {
            $('#footer-collapsible-menu').removeClass('accordion').addClass('row')
            $('.footer-acc').removeClass('accordion-item').addClass('col')
            $('.footer-acc .accordion-collapse').removeClass('collapse')
        }
    }).resize();
})