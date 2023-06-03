
$(function () {
    var timeout; // 定時器

    function handleScroll() {
        if ($(this).scrollTop() > 100) {//top出現時機
            $('#toTop').fadeIn(222);
        } else {
            $('#toTop').fadeOut(222);
        }
    }

    function throttle(fn, delay) {
        clearTimeout(timeout);
        timeout = setTimeout(fn, delay);
    }

    $(window).scroll(function () {
        throttle(handleScroll, 200); // 設定延遲200毫秒
    }).scroll();
});

$(function () {
    $('#toTop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 333);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  // top出現的時機
            $('#toTop').fadeIn(222);
        } else {
            $('#toTop').stop().fadeOut(222);
        }
    }).scroll();
});

function openLoginScreen() {
    var overlay = document.getElementById("overlay");
    var loginPopup = document.getElementById("loginPopup");
    overlay.style.display = "block";
    // 控制背景
    loginPopup.style.display = "block";
    // 登入視窗
}

function closeLoginScreen() {
    var overlay = document.getElementById("overlay");
    var loginPopup = document.getElementById("loginPopup");
    overlay.style.display = "none";
    loginPopup.style.display = "none";
}
function login() {
    // 登入
}

