//loading
if ($('.loading').length) {
    window.onload = function () {
        $('.loading').delay(800).fadeOut();
    }
}

//線上誌hoever
$('.gallery a').hover(function () {
    $(this).find('.gallery-content .detail').show("fast");
}, function () {
    $(this).find('.gallery-content .detail').hide("fast");
});

//錨點滑動
$(function () {
    $("#scroll-college").click(function () {
        $("html,body").animate({
            scrollTop: $('.college').offset().top - 82
        }, 800);
        return false;
    });
});

//Title限制字數
$(function () {
    var len = 30; // 超過個字以"..."取代
    $(".JQellipsisTitle").each(function (i) {
        $(this).attr("title", $(this).text());
        if ($(this).text().length > len) {
            var text = $(this).text().trim().substring(0, len - 1) + "...";
            $(this).text(text);
        }
    });
});

//Content限制字數
$(function () {
    var len = 40; // 超過個字以"..."取代
    $(".JQellipsis").each(function (i) {
        $(this).attr("title", $(this).text());
        if ($(this).text().length > len) {
            var text = $(this).text().trim().substring(0, len - 1) + "...";
            $(this).text(text);
        }
    });
});

//Content限制字數
$(function () {
    var len = 18; // 超過個字以"..."取代
    $(".JQellipsisList").each(function (i) {
        $(this).attr("title", $(this).text());
        if ($(this).text().length > len) {
            var text = $(this).text().trim().substring(0, len - 1) + "...";
            $(this).text(text);
        }
    });
});

// menu選單
$(function () {
    // menu
    $('.navbar-menu-btn').click(function () {
        if ($(this).hasClass('closed')) {
            $('body').removeAttr('style');
            // 按鈕
            $(this).removeClass('closed');
            // 選單區塊
            $('.navbar-menu').removeClass('open');
        } else {
            $('body').css('overflow', 'hidden');
            // 按鈕
            $(this).addClass('closed');
            // 選單區塊
            $('.navbar-menu').addClass('open');
        }

        return false;
    });

    // menu resize
    $(window).resize(function () {
        resizeMenu();
    });

    // menu scroll
    scrollMenu();
    $(window).scroll(function () {
        scrollMenu();
    });
});

// menu縮放
function resizeMenu() {
    var windowWidth = 768;
    if ($(window).width() > 768) {
        $('.navbar-menu-btn').removeClass('closed');
        $('.navbar-menu').removeClass('open');
    }
}

// menu滑動
function scrollMenu() {
    if ($(window).scrollTop() > 50) {
        $('.bg-header').addClass('show');
    } else {
        $('.bg-header').removeClass('show');
    }
}