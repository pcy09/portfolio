// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 0,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		850: {
			slidesPerView: 2,
			spaceBetween: 30,
			slidesPerGroup: 2,
		},
		1250: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
	},
});
