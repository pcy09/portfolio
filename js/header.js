// 스크롤시 헤더 높이 조절
$(window).scroll(function () {
	let scrollTop = $(window).scrollTop();
	if (scrollTop > 90) {
		$("header").addClass("scroll");
	} else {
		$("header").removeClass("scroll");
	}
});

// 햄버거버튼 클릭하면 메뉴 나오기
$(".trigger").click(function () {
	$(this).toggleClass("active");
	$("nav").toggleClass("moveLeft");
});

// 사이즈 변경되면 메뉴 초기화
$(window).resize(function () {
	$(".trigger").removeClass("active");
	$("nav").removeClass("moveLeft");
});

//메뉴항목 클릭하면 메뉴 초기화
$("nav a").click(function () {
	$(".trigger").removeClass("active");
	$("nav").removeClass("moveLeft");
});
