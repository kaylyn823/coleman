$(document).ready(function(){
    // ? $("부모공간").fitVids();

    $(".slider").bxSlider({
        mode: "horizontal", //? 'horizontal', 'vertical', 'fade' 3가지의 mode 가능 , default : horizontal(수평방향전환), vertical(수직방향전환), fade(사라지고나타나고) 
        speed: 750, //? default : 500. 전환속도 제어, 0.75s정도가 빠르지도 느리지도 않음

        //* 티커세트 : 미사용시 꺼둠 충돌 남        
        ticker: false, //? default :  false. slider를 controler통하지 않은 상태로 흘러가기. speed,mode 영향받음.
        tickerHover: false, //? default : false. ticker 상태일 때 onMouseOver로 중지시키기.

        //* startSlide, randomStart 충돌.  
        // startSlide: 0, //? 시작 슬라이드를 고정. randome과는 동시사용불가 충돌남, default: 0. 시작시에 우선 노출될 slide index 설정.
        randomStart: false, //? 노출 순서를 random으로 전환, default: false. slide.
        
        //* infiniteLoop(무한반복), hideControlOnEnd : 첫장엔 prev버튼 없고 막장엔 next 버튼 없음.
        infiniteLoop: false, //? default : true, slide간 전환 무한반복
        hideControlOnEnd: false, //? default : false. 0번 slide = prevBtn 삭제. last slide = nextBtn 삭제.

        //* adaptiveHeight : desktop또는 tablet mobile에서 이미지 높이값에따른 적응성 
        adaptiveHeight: true, //?이미지의 높낮이 다르게 쓰지 않는게 가장 안정적이고 좋다. frame 자체가 유동적, 그에 따라 적용되는 것이다.  
        adaptiveHeightSpeed: 750, //? 프레임 높낮이 조절 속도 조절 슬라이드 넘겨가는 속도와 동일하게 맞춰줘야한다. 
        //? 위의 스피드와 동일하게 붙혀쓰라는 의미,default : 500. adaptiveHeight 작동속도. 특이사항없으면 speed와 동기화
        easing: 'ease-in-out', //? default : null. slide간 전환 가속도 설정. CSS timing-function option 사용가능.
        captions: true, //? 이미지 하단에 문구 사용을 하기 위해선 이미지에 title 속성을 넣어줘야한다. : 시각장애인들에게 접근성을 높혀준다.
        //? default: false. img's에 title attr을 부여하면 그 부분을 이미지 위로 보여준다.
        video: true, //? default: false. video 활성화.(slide에 video가 있을 시만) fitvids.js를 연결해두면 iframe,video등의 width,height 자동설정 가능. 

        // * pager - indicator : 웬만하면 사용: 사용하지 않으면 접근성이 많이 떨어진다.
        pager: true, //? //? default: true. pager 켜기/끄기
        pagerType: 'full', //? default: 'full'.(circle) . short: count로 변경
        //? pagerShortSeparator: ' - '  pagerType: 'short' 일때만 사용 가능 default: / -> . 식별자변경.
        //? pagerSelector: '.newPager' 커스터마이징 사용자가 해야함 default: ''. 공간 생성 및 class 부여 하면 pager 뼈대제공.

        pagerCustom: '.customPager' //? 내가 스스로 구조를 만들어 사용 call-back 함수로 돌아가는 방식
        //* 내가 짜둔 구조는 bx와 상관없기때문에 해당 call-back함수를 매개변수로 사용 


    }); 
    //? 옵션 추가 git 참조 : plugin을 커스터마이징하는 것은 새로만드는 것보다 어렵다.
    //* 슬라이드가 10개여도 함수 하나로 해결, 매개변수 사용
    //? 참고: https://github.com/stevenwanderski/bxslider-4#readme
    //* 옵션이 풍부하면 풍부할 수록 좋은 plugin, 관리가 중요, 대단하다고 봄.
});