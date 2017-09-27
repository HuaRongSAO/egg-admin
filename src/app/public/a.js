const print = (function () {
        function print () {
            console.log('print module')
        }
        return {print:print}
    })()
;(function ($) {
    $.extend(print);
    $.fn.extend({
        say: function say () {
            console.log('hello')
            return this
        }
    })
})(jQuery);

$.print()
$('body').say()
