$(function () {
    let t;
    function fn() {
        $(".list").children("li").eq(0).appendTo(".list");
    }
    function fn1() {
        $(".list").children("li").eq(3).prependTo(".list");
    }
    t=setInterval(function () {
        fn()
    },4000);
    $(".fazhan").hover(function () {
        clearInterval(t);
    },function () {
        clearInterval(t);
        t=setInterval(function () {
            fn()
        },4000);
    });
    $(".fazhan_right").click(fn);
    $(".fazhan_left").click(fn1);
});