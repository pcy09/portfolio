/* =============== 공통 적용 =============== */

// a태그 스크롤 스무스하게 움직이기
$('a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function (event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, "") ==
				this.pathname.replace(/^\//, "") &&
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$("html, body").animate(
					{
						scrollTop: target.offset().top,
					},
					1000,
					function () {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) {
							// Checking if the target was focused
							return false;
						} else {
							$target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						}
					},
				);
			}
		}
	});

/* =============== section#title =============== */
let titleText = $("#title h2");
let target = document.querySelector("#title h2");

// 커서 깜빡임 효과
function blink() {
	titleText.toggleClass("active");
}
setInterval(blink, 500);

// 타이핑 효과
let stringArr = ["포기하지 않는 개발자 박찬영입니다."];
let splitStringArr = stringArr[0].split("");

function typing(e) {
	if (e.length > 0) {
		// titleText.textContent += e.shift();  <<자바스크립트
		titleText.append(e.shift());
		setTimeout(function () {
			typing(e);
		}, 170);
	}
}
setTimeout(typing, 9000, splitStringArr);

/* =============== section#history =============== */
// 스크롤 위치에 따라 사진 변경
let height = window.innerHeight;
let history01Top = $(".history01").offset().top;
let history02Top = $(".history02").offset().top;
let history03Top = $(".history03").offset().top;

let history01Active = history01Top - height * 0.8;
let history02Active = history02Top - height * 0.8;
let history03Active = history03Top - height * 0.8;

let aboutTop01 = $("#about").offset().top - height * 0.8;
let aboutTop02 = $("#about").offset().top - height * 0.5;
let aboutTop03 = $("#about").offset().top - height * 0.2;

let titleWrapTop = $(".titleWrap").offset().top - height * 0.7;
let titleWrapTop2 = $(".titleWrap").offset().top + height * 0.7;

$(window).resize(function () {
	height = window.innerHeight;
	history01Top = $(".history01").offset().top;
	history02Top = $(".history02").offset().top;
	history03Top = $(".history03").offset().top;
	history01Active = history01Top - height * 0.8;
	history02Active = history02Top - height * 0.8;
	history03Active = history03Top - height * 0.8;
	aboutTop01 = $("#about").offset().top - height * 0.8;
	aboutTop02 = $("#about").offset().top - height * 0.5;
	aboutTop03 = $("#about").offset().top - height * 0.2;
	titleWrapTop = $(".titleWrap").offset().top - height * 0.7;
	titleWrapTop2 = $(".titleWrap").offset().top + height * 0.7;
});

$(window).scroll(function () {
	let scrollTop = $(window).scrollTop();
	console.log(aboutTop03);
	console.log(scrollTop);
	if (scrollTop >= titleWrapTop && scrollTop < titleWrapTop2) {
		$(".historyTitle").fadeIn(300);
		$(".historyTitle h2").addClass("active");
	} else {
		$(".historyTitle").fadeOut(300);
		$(".historyTitle h2").removeClass("active");
	}

	if (scrollTop < history01Active) {
		$(".history01 h3").removeClass("active");
		$(".history02 h3").removeClass("active");
		$(".history03 h3").removeClass("active");

		$(".historyImgContainer").fadeOut(300);
	} else if (scrollTop >= history01Active && scrollTop < history02Active) {
		$(".history01 h3").addClass("active");
		$(".history02 h3").removeClass("active");
		$(".history03 h3").removeClass("active");

		$(".historyImgContainer").fadeIn(300);
		if ($(".historyImgContainer img").attr("src") != "img/history01-1.gif") {
			$(".historyImgContainer img").attr("src", "img/history01-1.gif");
		}
	} else if (scrollTop >= history02Active && scrollTop < history03Active) {
		$(".history01 h3").removeClass("active");
		$(".history02 h3").addClass("active");
		$(".history03 h3").removeClass("active");

		if ($(".historyImgContainer img").attr("src") != "img/history02.gif") {
			$(".historyImgContainer img").attr("src", "img/history02.gif");
		}
	} else if (scrollTop >= history03Active && scrollTop < aboutTop01) {
		$(".history01 h3").removeClass("active");
		$(".history02 h3").removeClass("active");
		$(".history03 h3").addClass("active");
		$(".history h3").css({ color: "white" });
		$(".history li").css({ color: "white" });
		$("body").css({ "background-color": "black" });
		$(".historyImgContainer").fadeIn(300);

		if ($(".historyImgContainer img").attr("src") != "img/history03.gif") {
			$(".historyImgContainer img").attr("src", "img/history03.gif");
		}
	} else if (scrollTop >= aboutTop01 && scrollTop < aboutTop02) {
		$(".history01 h3").removeClass("active");
		$(".history02 h3").removeClass("active");
		$(".history03 h3").removeClass("active");

		$(".history h3").css({ color: "black" });
		$(".history li").css({ color: "black" });
		$(".historyImgContainer").fadeOut(300);

		$("body").css({ "background-color": "rgb(200, 200, 200)" });
	} else if (scrollTop >= aboutTop02 && scrollTop < aboutTop03) {
		$("body").css({ "background-color": "rgb(230, 230, 230)" });
	} else if (scrollTop >= aboutTop03) {
		$("body").css({ "background-color": "rgb(255, 255, 255)" });
	}
});
