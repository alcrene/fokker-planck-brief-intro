// Based on https://stackoverflow.com/questions/34845435/make-content-sticky-on-scroll-to-a-point-in-jquery

$(document).ready(function() {
    var stickyTops = {}
    $.each($(".sticky"), function(idx, el) {
        stickyTops[idx] = $(el).offset().top;
    });

    $(window).scroll(function() {
        var windowTop = $(window).scrollTop();
        var contentTop = $("#main-content").offset().top;
        var stickyobjs = $(".sticky")
        var marginLeft = stickyobjs.offset().left;


        marginOffset = 0
        for (let i=0; i<stickyobjs.length; i++) {
            obj = $(stickyobjs[i])
            if (stickyTops[i] < windowTop+marginOffset) {
                obj.css({"position": "fixed",
                         "left": marginLeft,
                         "top": contentTop + marginOffset})
                marginOffset += obj.height()
            } else {
                obj.css({"position": "relative",
                         "left": "",
                         "top": ""});
            }

        }
    });
});
