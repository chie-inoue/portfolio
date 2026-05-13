console.log("script.js 読み込みOK");

/* =========================
   フェードイン
========================= */
function fadeIn() {
  $(".fade-up").each(function () {
    let elemPos = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();

    if (scroll > elemPos - windowHeight + 120) {
      $(this).addClass("show");
    }
  });
}

$(window).on("load scroll", function () {
  fadeIn();
});


/* =========================
   ハンバーガーメニュー
========================= */
// ハンバーガーメニュー
$(".hamburger").on("click", function () {
  $(".sp-nav").toggleClass("open");
  $(".hamburger").toggleClass("active");
});

// メニューリンク押したら閉じる
$(".sp-nav a").on("click", function () {
  $(".sp-nav").removeClass("open");
  $(".hamburger").removeClass("active");
});


/* =========================
   ヘッダー スクロール時
========================= */
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $("header").addClass("scrolled");
  } else {
    $("header").removeClass("scrolled");
  }
});


/* =========================
   ABOUT 数字カウントアップ
========================= */
function countUp() {
  $(".count-up").each(function () {
    const elem = $(this);

    if (elem.hasClass("done")) {
      return;
    }

    const target = Number(elem.attr("data-target"));
    const suffix = elem.attr("data-suffix") || "";

    elem.addClass("done");

    let count = 0;
    const speed = target / 100;

    const timer = setInterval(function () {
      count += speed;

      if (count >= target) {
        elem.text(target.toLocaleString() + suffix);
        clearInterval(timer);
      } else {
        elem.text(Math.floor(count).toLocaleString() + suffix);
      }
    }, 30);
  });
}

$(window).on("load", function () {
  countUp();
});