/*********************************************
loading
*********************************************/
$(function () {
    $("header,main,div.pickup,div.reservation,footer").hide();

    setTimeout(function () {
        $("header,main,div.pickup,div.reservation,footer").fadeIn(2000);
        $("div.loading").css("overflow-y", "visible");
    }, 2000);

    setTimeout(function () {
        $("div.loading").hide();
    }, 4000)

});

/*********************************************
btn
*********************************************/
$(function () {
    $(".btn").click(function () {
        $(this).toggleClass("change");
        $("header nav").toggleClass("click");
    });
});

/*********************************************
img fadein
*********************************************/
$(function () {
    $(window).scroll(function(){
        var offset = $(window).scrollTop() + 400;
        var about = $("#about").offset().top;
        var service = $("#service").offset().top;
        var menu = $("#menu").offset().top;
        var wedding = $("#wedding").offset().top;

        if (offset > about) {
            $("#about").animate({
                top: '-50px',
                opacity: '1'
            },600);
        }

        if (offset > service) {
            $("#service").animate({
                top: '-50px',
                opacity: '1'
            },600);
        }

        if (offset > menu) {
            $("#menu").animate({
                top: '-50px',
                opacity: '1'
            },600);
        }

        if (offset > wedding) {
            $("#wedding").animate({
                top: '-50px',
                opacity: '1'
            },600);
        }
    });
    
    
})
