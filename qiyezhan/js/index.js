$(function () {
    let num=0;
    let t;
    let flag=true;
	function fn() {
	    num++;
	    if(num==$(".lis").length){
	        num=0;
        }
        $(".lis").fadeOut(1000);
	    $(".anniu").children("li").css("background","#FFF");
        $(".lis").eq(num).fadeIn(1000,function () {
            flag=true;
        });
        $(".anniu").children("li").eq(num).css("background","#F66165");
    }
    $(".banner").hover(function () {
        clearInterval(t);
    },function () {
        clearInterval(t);
        t=setInterval(function () {
            flag=false;
            fn();
        },4000);
    });
    $(".anniu").children("li").click(function () {
        if(!flag){
            return;
        }
        flag=false;
        let index=$(".anniu").children("li").index(this);
        if(index==num){
            flag=true;
            return;
        }
        $(".lis").fadeOut(1000);
        $(".anniu").children("li").css("background","#FFF");
        $(".lis").eq(index).fadeIn(1000,function () {
            flag=true;
        });
        $(".anniu").children("li").eq(index).css("background","#F66165");
        num=index;
    });
    t=setInterval(function () {
        flag=false;
        fn();
    },4000);
    $({num: 0}).animate({num: 218}, {
        duration: 3000,
        step: function (val) {
            $(".shuju1 b").eq(0).text(parseInt(val).toLocaleString());
        }
    });
    $({num: 0}).animate({num: 16}, {
        duration: 3000,
        step: function (val) {
            $(".shuju1 b").eq(1).text(parseInt(val).toLocaleString());
        }
    });
    $({num: 0}).animate({num: 4224122}, {
        duration: 3000,
        step: function (val) {
            $(".shuju1 b").eq(2).html(parseInt(val).toLocaleString());
        }
    });
    $({num: 0}).animate({num: 16123}, {
        duration: 3000,
        step: function (val) {
            $(".shuju1 b").eq(3).text(parseInt(val).toLocaleString());
        }
    });
});