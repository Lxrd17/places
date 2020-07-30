AOS.init({
    easing: 'ease-in-out'
});


var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    delay: .9,
    transition: 'cubic-bezier(0,0,0,0)'
});


$(function () {
    var selectedClass = "";
    $(".filter").click(function () {
        selectedClass = $(this).attr("data-rel");
        $("#gallery").fadeTo(100, 0.1);
        $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('animation');
            $("#gallery").fadeTo(300, 1);
        }, 300);
    });
});

