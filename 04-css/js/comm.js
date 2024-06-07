// 준비 이벤트
// html이 로드되면 실행
$(function () {
    // 코드 작성
    // modal 띄우기
    // #logo 클릭시 액션 발생
    $('#logo').click(function () {
        // action 값
        $('#layerPop').fadeIn(5000)
    })

    // '#layerPop button' 클릭시
    $('#layerPop button').click(function () {
        // action 값
        $('#layerPop').fadeOut(3000)
    })

    // 'header' 클릭시
    // $('header').click(function () {
    //     // 'header'에게 'fixed' 클래스 추가
    //     $('header').addClass('fixed')
    // })

    // 스크롤 시 'header'에게 'fixed' 클래스 추가
    $(window).scroll(function () {
        // 스크롤 값
        var scroll = $(window).scrollTop()
        // console.log(scroll)
        // 'header'에게 'fixed' 클래스 추가
        if (scroll > 100) {
            $('header').addClass('fixed')
        } else {
            $('header').removeClass('fixed')
        }
    })
})
