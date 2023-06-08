$(function () {
    //function의 사용이유:script는 아래쪽에 있는건 인식하지 못하기 때문에 폼이 생성되고 난 이후에 실행 되어라는 의미
    //$('h1').hide(); test
    $('.main_slide').slick({
        vertical: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
    })

});