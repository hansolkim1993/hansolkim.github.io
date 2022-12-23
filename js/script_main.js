//1.gnb 마우스오버, 포커스시 밑줄 => span.bar
$(function(){
    $('.gnb li a').on('mouseenter focus', function(){
        var bar = $(this).position().left;
        var widNum = $(this).width();
        $('span.bar').css({'left':bar + 'px', 'width':widNum + 'px', opacity:1});
    });
    $('.gnb li a').on('mouseleave', function(){
        $('span.bar').css({'left':0, 'width':0, 'opacity':0});
    });
});

//2.activities 사진 슬라이드
$(function(){
     $('.gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 200,
        arrows: false,  //화살표 비활성화
        dots: true, //인디케이트
        infinite: true, //무한 반봅 옵션
        fade: false,//페이드효과
        autoplay: true, //자동재생
        autoplaySpeed: 3000, //재생시간3초
        pauseOnHover: true,
        pauseOnFocus: false
    });
});

