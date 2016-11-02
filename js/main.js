function moveWidget(e) {
    var t = $("#wechat-widget");
    t.css({
        //left: e.pageX - 200,
        //left: 2000,
        //top: e.pageY + t.height() + 0
        //top: e.pageY  + 10
    })
}
$("a#wechat-link").hover(function(e) {
    var t = $("#wechat-widget");
    t.css({
        display: "block"
    }),
    moveWidget(e)
}, function() {
    $("#wechat-widget").css({
        display: "none"
    })
}),
$("a#wechat-link").mousemove(moveWidget);
