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
    //     $(this).addClass('fixed')
    // })

    // 윈도우 스크롤 이벤트
    $(window).scroll(function () {
        let scroll = $(window).scrollTop()
        console.log(scroll)

        // 스크롤 값이 100px 이상이면
        if (scroll > 100) {
            // 조건이 참일 때 실행할 코드
            $('header').addClass('fixed')
        } else {
            // 조건이 거짓일 때 실행할 코드
            $('header').removeClass('fixed')
        }
        // 'header'에게 'fixed' 클래스 추가
        // 그렇지 않으면 'fixed' 클래스 제거

        // $('header').addClass('fixed')
    })

    // 메뉴 클릭시 해당 섹션으로 이동
    $(".navbar a, footer a[href='#wrap']").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== '') {
            // Prevent default anchor click behavior
            event.preventDefault()

            // Store hash
            var hash = this.hash

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                900,
                function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash
                },
            )
        } // End if
    })
})
