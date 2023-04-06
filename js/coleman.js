$(document).ready(function(){    
    visibToggle();
    customizeSlider(".rollingBanner", "vertical",false,false,true,0,0,1,1,0,null);
    customizeSlider(".head.slider", "horizontal",true,true,false,0,0,1,1,0,null);
    customizeSlider(".rec.slider", "horizontal",true,false,false,416,35,5,1,0,null);
    customizeSlider(".detail.slider", "vertical",false,true,false,0,0,1,1,0,".detailThumbPager");
    customizeSlider(".also.slider", "horizontal",true,false,false,416.25,35,2,1,0,null);
    popupControl("[data-popname='writePopup']","#writePopup"); 
    popupControl("[data-popname='forgotPopup']","#forgotPopup");
    popupControl("[value='share']","#sharePopup");
    popupControl("[data-popname='innerpopup']","#innerPopup");
    popupControl("[data-popname='htrLogoPopup']",".historyLogo");
    popupControl("[data-popname='trackingPopup']","#trackingPopup");
    popupControl("[value='buy now']","#cartPopup");    
    popupControl("[data-popname='returnAddPopup']",".returnAdd");   
    popupControl("[data-popname='searchPanel']","#searchPanel");            
    popupControl("[data-panelName='muIPanel']","header > nav"); 
    popupControl("[data-panelName='signUpPanel']","#signUpPanel");
    popupControl("[data-panelName='signInPanel']","#signInPanel");
    popupControl("[data-panelName='signInPanel']","#signInPanel");
    justToggle("[data-box='sortOption']");
    justToggle(".toggleAction");
    tabControl(".faqNavi ol li",".faqContainer div[id^='tab']");
    tabControl(".tabUI li",".checkoutContainer div ul[id^='method']");
    gnbControl();
    imgSwap("[class$='List'] li div ol li");
    imgSwap(".detailCO");
    imgSwap(".rec.slider li div ol li");
    orderPanel(".order.List div .btn",".closePanel");   
    closeAct('#mpx');
    // editAccount();
    inputSwap();
});
function visibToggle(){
    var $toggleTarget = $(".material-symbols-outlined.toggleVisible");
    var toggleStatus = false;

    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            $toggleTarget.text("visibility");
            $("input[type=password]").attr("type","text")
        }else{
            $toggleTarget.text("visibility_off");
            $("input[type=text]").attr("type","password")
        }
    });
}
function customizeSlider(target,mod,contVal,pagerVal,atVal,slideW,slideM,maxSlide,minSlide,startSlide,csPager){
    $(target).bxSlider({
        mode: mod,
        controls: contVal,
        pager: pagerVal,
        auto: atVal,
        slideWidth:slideW,
        slideMargin:slideM,
        maxSlides:maxSlide,
        minSlides:minSlide,
        startSlide:startSlide,
        pagerCustom: csPager,
        // touchEnabled: false
    });
}
function popupControl(btn,popup){
    $(btn).click(function(){
        $(popup).addClass("active");
        if(popup == "#writePopup"){
            var reconTopPos = $(".viewRevi" && ".noRevi").offset().top;
            $(popup).css({
                top: reconTopPos
            });
        }
    });
    $("[value='close']").click(function(){
        $(popup).removeClass("active");
    });
    $(".close").click(function(){
        $(popup).removeClass("active");
    });
}
function justToggle(target){
    $(target).click(function(){
        $(this).toggleClass("active");
    });
}
function tabControl(btn,tabPage){
    var currentTabName = '';
    $(btn).click(function(){
        if(btn == '.faqNavi ol li'){
            currentTabName = "#" + $(this).attr('data-tabname');
        }else if(btn == '.tabUI li'){
            currentTabName = "#" + $(this).attr('data-tabNumb');
        }
        $(btn).removeClass('active');
        $(this).addClass('active');
        $(tabPage).removeClass('active');
        $(currentTabName).addClass('active');
    });
}
function gnbControl(){
    var currentTabMenu = '';
    $("nav ul > li").click(function(){
        currentTabMenu = $(this);
        if (window.matchMedia("(max-width: 1279px)").matches) {
            $(this).toggleClass("active");
        } 
        if(window.matchMedia("(min-width:1280px").matches){
            $("nav ul > li").removeClass("active");
            $(this).addClass("active");
            $("nav input[value='close']").addClass("active");
        }
    });
    $("nav input[value='close']").click(function(){
        $(currentTabMenu).removeClass("active");
        $(this).removeClass("active");
    });
}
function imgSwap(colorBtn){
    var path ='images/';
    var ext = '.png';
    var swapSrc = '';
    $(colorBtn).click(function(){
        $(colorBtn).removeClass("active");
        $(this).addClass("active");
        swapSrc = $(this).attr('data-src');
        $(this).parents('div').siblings('img').attr("src",path+swapSrc+ext);
    }); 
}
function orderPanel(btn,closeBtn){
    let currentPanel = null; 
    $(btn).click(function(){
        currentPanel = "#" + $(this).attr("data-panel");
        $(currentPanel).addClass("active");
    });
    $(closeBtn).click(function(){
        $(this).parents(".viewBox").removeClass("active");
    });
}
function closeAct(btn){
    $(btn).click(function(){
        $(this).parent("div").css('display','none');
    });
}
function inputSwap(){
    var editStatus = true;
    $("#updateMyPage").click(function(){
        editStatus = !editStatus;
        if(editStatus == false){            
            $('#updateMyPage').prop('value', 'Save Account');
            $(".inputList input:not([type='email'])").removeAttr('disabled');
        }else if(editStatus == true){            
            $('#updateMyPage').prop('value', 'Edit Account');
            $(".inputList input:not([type='email'])").attr('disabled','disabled'); 
        }
    });
}
