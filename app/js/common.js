$(function () {

// slick slider

    $(document).ready(function () {
        $(".slideshow").slick({
            dots: false,
            arrows: false
        });
        $(".menu-slider a").click(function (e) {
            e.preventDefault();
            slideIndex = $(this).index();
            $('.slideshow').slickGoTo(parseInt(slideIndex));
        });
    });

// counter

    function catalogItemCounter(field) {
        var fieldCount = function (el) {
            var min = el.data('min') || false,
                max = el.data('max') || false,
                dec = el.next('.dec'),
                inc = el.prev('.inc');

            function init(el) {
                if (!el.attr('disabled')) {
                    dec.on('click', decrement);
                    inc.on('click', increment);
                }

                function decrement() {
                    var value = parseInt(el[0].value);
                    value--;

                    if (!min || value >= min) {
                        el[0].value = value;
                    }
                }

                function increment() {
                    var value = parseInt(el[0].value);
                    value++;
                    if (!max || value <= max) {
                        el[0].value = value++;
                    }
                }
            }

            el.each(function () {
                init($(this));
            });
        };

        $(field).each(function () {
            fieldCount($(this));
        });
    }

    catalogItemCounter('.fieldCount');

// menuToggle

    $('.menuToggle').on('click', function () {
        $('.menu').slideToggle(300, function () {
            if ($(this).css('display') === "none") {
                $(this).removeAttr('style');
            }
        });
    });
});

//Tabs

$('.tabs a').click(function () {
    $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
    $(this).parent().siblings().removeClass('active');
    var id = $(this).attr('href');
    $(id).removeClass('hide');
    $(this).parent().addClass('active');
    return false
});



//sort in work

// var nodelist = document.querySelectorAll('.portfolio-list__item');
// var arr = Array.from(nodelist);
//
// console.log( arr );
//
// arr.reverse();
// console.log( arr );
//
//
// document.getElementsByClassName('portfolio-list')[0].innerHTML = arr;
// var content = document.getElementsByClassName('portfolio-list').innerHTML;