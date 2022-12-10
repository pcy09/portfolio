$(window).scroll(function () {
	let scrollTop = $(window).scrollTop();
	if (scrollTop > 400) {
		$("header").addClass("scroll");
	} else {
		$("header").removeClass("scroll");
	}
});
