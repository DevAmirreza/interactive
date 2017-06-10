/**
 * Created by Amirreza on 07-Jun-2017.
 */
function move_right(clsElement) {
}


move_right(".move-right") ;



/*
$(window).on("scroll",function () {
    console.log($(window).scrollTop())

});
*/

/*move right*/
$(window).on("scroll",function(){
    var currentHeight = $(window).scrollTop() ;
    $(".move-right").css({
        "position" : "fixed" ,
        "top" : "0" ,
        "margin-left": currentHeight+"px" ,
    });
});

$(window).on("scroll",function(){
    var currentHeight = $(window).scrollTop()  ;
    $(".move-up").css({
        "position" : "fixed" ,
        "margin-bottom": currentHeight+"px" ,
    });
});

$(window).on("scroll",function(){
    var currentHeight = $(window).scrollTop()  ;
    $(".move-down").css({
        "position" : "fixed" ,
        "margin-top": currentHeight+"px" ,
    });
});

$(window).on("scroll",function(){
    var currentHeight = $(window).scrollTop()  ;
    $(".move-left").css({
        "position" : "fixed" ,
        "margin-right": currentHeight+"px" ,
    });
});

$(window).on("scroll",function(){
    var currentPosition = $(window).scrollTop()  ;
    $(".rotate-360").css({
        "position" : "fixed" ,
        "-ms-transform": "rotate("+currentPosition+"deg)",
    "-webkit-transform": "rotate("+currentPosition+"deg)" ,
    "transform": "rotate("+currentPosition+"deg)"
    });
});

$(window).on("scroll",function(){
    var currentPosition = $(window).scrollTop()  ;
    $(".3d-rotate").css({
        "position" : "fixed" ,
        "transform": "rotateY("+currentPosition+"deg)"
    });
});







