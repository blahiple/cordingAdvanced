/* Header
-------------------------------------------------------------------*/
$(document).ready(function () {
  // スクロールによる、背景色とボタンの表示・非表示
  var header = $('.l-header');
  var topButton = $('.l-header__topButton');
  var headerTrigger = $('.js-headerTrigger');

  $(window).scroll(function () {
    var windowTop = $(window).scrollTop();
    var headerHeight = header.height();
    var headerTriggerTop = headerTrigger.offset().top;
    var headerThreshould = headerTriggerTop - headerHeight;

    if (windowTop > headerThreshould) { // スクロール位置を調整
      header.addClass('l-header--bg');
      topButton.removeClass('l-header__topButton--hide');
      if ($(window).width() >= 768) {
        header.addClass('l-header--pcScroll');
      }
    } else {
      header.removeClass('l-header--bg');
      topButton.addClass('l-header__topButton--hide');
      if ($(window).width() >= 768) {
        header.removeClass('l-header--pcScroll');
      }
    }
  });

  // トップボタン
  topButton.click(function () {
    // ページの一番上にスクロールする
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });

  // ハンバーガーメニュー
  $('.l-header__button').click(function () {
    $('.l-header__hamburgerMenu').fadeToggle();
  });
});

var hamburgerMenu = $('.l-header__hamburgerMenu');

function showContent() {
  hamburgerMenu.show();
}

// ウィンドウの幅をチェックしてコンテンツを表示または非表示にする
function checkWidth() {
  if ($(window).width() >= 768) {
    showContent();
  } else {
    hamburgerMenu.hide();
  }
}

// 初期チェック
checkWidth();

// ウィンドウのリサイズ時にチェック
$(window).on('resize', function () {
  checkWidth();
});

/* News
-------------------------------------------------------------------*/
// タブ
function openTab(tabId) {
  // すべてのコンテンツを非表示
  $('.p-news__list').removeClass('p-news__list--active');

  // 選択されたコンテンツを表示
  $('#' + tabId).addClass('p-news__list--active');

  // ボタンの選択状態を更新
  $('.p-news__pagerItem').removeClass('p-news__pagerItem--active');
  $('[onclick="openTab(\'' + tabId + '\')"]').addClass('p-news__pagerItem--active');
}
