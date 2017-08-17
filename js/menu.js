/**
 * Created by Dell on 2017/8/17.
 */
$(document).ready(function() {
//缁戝畾鍏冪礌鐐瑰嚮浜嬩欢
    $(".menu_list ul li").click(function() {
        //鍒ゆ柇瀵硅薄鏄樉绀鸿繕鏄殣钘�
        if($(this).children(".div1").is(":hidden")){
            //琛ㄧず闅愯棌
            if(!$(this).children(".div1").is(":animated")) {
                //涓嬫媺绠ご鏃嬭浆
                //鍒ゆ柇鏄惁鏄疘E娴忚鍣�
                if(myBrowser()=="IE"){
                    //IE娴忚鍣ㄤ笉鍏煎transform灞炴€э紝浣跨敤filter灞炴€�
                    $(this).children(".xiala").css({'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation:1)'});
                }else{
                    $(this).children(".xiala").css({'transform':'rotate(90deg)'});
                }
                //濡傛灉褰撳墠娌℃湁杩涜鍔ㄧ敾锛屽垯娣诲姞鏂板姩鐢�
                $(this).children(".div1").animate({
                    height: 'show'
                }, 1000)
                //siblings閬嶅巻div1鐨勫厓绱�
                    .end().siblings().find(".div1").hide(1000);
            }
        } else {
            //琛ㄧず鏄剧ず
            if(!$(this).children(".div1").is(":animated")) {
                //涓嬫媺绠ご鏃嬭浆鎭㈠
                //鍒ゆ柇鏄惁鏄疘E娴忚鍣�
                if(myBrowser()=="IE"){
                    //IE娴忚鍣ㄤ笉鍏煎transform灞炴€э紝浣跨敤filter灞炴€�
                    $(this).children(".xiala").css({'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation:0)'});
                }else{
                    $(this).children(".xiala").css({'transform':'rotate(0deg)'});
                }

                $(this).children(".div1").animate({
                    height: 'hide'
                }, 1000)
                    .end().siblings().find(".div1").hide(1000);
            }
        }
    });

//闃绘浜嬩欢鍐掓场锛屽瓙鍏冪礌涓嶅啀缁ф壙鐖跺厓绱犵殑鐐瑰嚮浜嬩欢
    $('.div1').click(function(e){
        e.stopPropagation();
    });

//鐐瑰嚮瀛愯彍鍗曚负瀛愯彍鍗曟坊鍔犳牱寮忥紝骞剁Щ闄ゆ墍鏈夊叾浠栧瓙鑿滃崟鏍峰紡
    $(".menu_list ul li .div1 .zcd").click(function() {
        //璁剧疆褰撳墠鑿滃崟涓洪€変腑鐘舵€佺殑鏍峰紡锛屽苟绉婚櫎鍚岀被鍚岀骇鍒殑鍏朵粬鍏冪礌鐨勬牱寮�
        $(this).addClass("removes").siblings().removeClass("removes");
        //閬嶅巻鑾峰彇鎵€鏈夌埗鑿滃崟鍏冪礌
        $(".div1").each(function(){
            //鍒ゆ柇褰撳墠鐨勭埗鑿滃崟鏄惁鏄殣钘忕姸鎬�
            if($(this).is(":hidden")){
                //濡傛灉鏄殣钘忕姸鎬佸垯绉婚櫎鍏舵牱寮�
                $(this).children(".zcd").removeClass("removes");
            }
        });
    });

    //寰幆鎵€鏈塪iv1鍏冪礌锛屼笅鎷夌澶村湪
    $(".lis>.fuMenu").click(function() {
        $(".div1").each(function(){
            //鍒ゆ柇褰撳墠鐨勭埗鑿滃崟鏄惁鏄殣钘忕姸鎬�
            if(!$(this).is(":hidden")){
                //濡傛灉褰撳墠鐐瑰嚮鏃朵笉鏄殣钘忕姸鎬佸垯灏嗗叾绠ご鏄剧ず涓哄師濮嬬姸鎬�
                if(myBrowser()=="IE"){
                    //鍒ゆ柇鏄惁鏄疘E娴忚鍣�
                    //IE娴忚鍣ㄤ笉鍏煎transform灞炴€э紝浣跨敤filter灞炴€�
                    $(this).parent().children("img").css({'filter':'progid:DXImageTransform.Microsoft.BasicImage(rotation:0)'});
                }else{
                    $(this).parent().children("img").css({'transform':'rotate(0deg)'});
                }
            }
        });
    });
    //鐐瑰嚮鏀剁缉鑿滃崟
    $("#hidIcon").click(function(){
        //闅愯棌鑿滃崟骞舵樉绀洪殣钘忓悗鐨勫乏渚ц彍鍗�
        $(".leftMenu").animate({"margin-left":"-220px"},"slow",function(){
            $(".hidLeftMenu").css("display","block");
            $(".leftMenu").css("display","none")
        })
    })
    //鐐瑰嚮鍥炬爣灞曞紑鑿滃崟鏄剧ず
    $(".openMenu").click(function(){
        $(".hidLeftMenu").css("display","none");
        $(".leftMenu").css("display","block")
            .animate({"margin-left":"0px"},"slow");
    })

});

//鍒ゆ柇娴忚鍣ㄧ被鍨�
function myBrowser(){
    var userAgent = navigator.userAgent; //鍙栧緱娴忚鍣ㄧ殑userAgent瀛楃涓�
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //鍒ゆ柇鏄惁Opera娴忚鍣�
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //鍒ゆ柇鏄惁Firefox娴忚鍣�
    if (userAgent.indexOf("Chrome") > -1){
        return "Chrome";
    }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //鍒ゆ柇鏄惁Safari娴忚鍣�
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //鍒ゆ柇鏄惁IE娴忚鍣�
    if (userAgent.indexOf("Trident") > -1) {
        return "Edge";
    } //鍒ゆ柇鏄惁Edge娴忚鍣�
}