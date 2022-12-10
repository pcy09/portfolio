/* 공통 적용 */

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

/* section#title */
let titleText = $("#title h2");
let target = document.querySelector("#title h2");

console.log(titleText);
console.log(target);
// 커서 깜빡임 효과
function blink() {
	titleText.toggleClass("active");
}
setInterval(blink, 500);

// 타이핑 효과
let stringArr = ["안녕하세요 박찬영입니다"];
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
setTimeout(typing, 9500, splitStringArr);

let height = window.innerHeight;
$(window).resize(function () {
	height = window.innerHeight;
});
console.log(height);

/* 스크롤 위치에따라 위치 움직이기 */
$(window).scroll(function () {
	let scrollTop = $(window).scrollTop();
	if (scrollTop >= 0 && scrollTop <= 2900) {
		$("body").css({ "background-color": "#000" });
	} else if (scrollTop > 2900) {
		$("body").css({ "background-color": "rgb(255, 255, 255)" });
	}
});
