// Pre Req

$(document).ready(function () {
	$("#navham").on("click", function () {
		$(".navmobile").toggleClass("navmobile-show");
	});

	// Navlink
	// $("#navlink").on("click", function () {
	// 	if ($("#navlink .black")) {
	// 		$("#a-navlink").removeClass("black");
	// 		$("#a-navlink").addClass("white");
	// 	} else if ($("#navlink .white")) {
	// 		$("#a-navlink").removeClass("white");
	// 		$("#a-navlink").addClass("black");
	// 	}
	// });
});

$(window).scroll(function () {
	var wScroll = $(this).scrollTop();

	// Navbar Bg Color
	if (wScroll >= 1) {
		$("#navbar").addClass("shadow bg-yellow");
	}
	if (wScroll <= 0.75) {
		$("#navbar").removeClass("shadow bg-yellow");
		$(".home").removeClass("navlink-active");
		$(".about").removeClass("navlink-active");
		$(".galery").removeClass("navlink-active");
		$(".featured").removeClass("navlink-active");
	}

	// Navbar Link
	if (wScroll >= $("#home").offset().top + 1) {
		$(".home").addClass("navlink-active");
		$(".about").removeClass("navlink-active");
		$(".galery").removeClass("navlink-active");
		$(".featured").removeClass("navlink-active");
	}
	if (wScroll > $("#about").offset().top - 120) {
		$(".home").removeClass("navlink-active");
		$(".about").addClass("navlink-active");
		$(".galery").removeClass("navlink-active");
		$(".featured").removeClass("navlink-active");
	}
	if (wScroll > $("#galery").offset().top - 120) {
		$(".home").removeClass("navlink-active");
		$(".about").removeClass("navlink-active");
		$(".galery").addClass("navlink-active");
		$(".featured").removeClass("navlink-active");
	}
	if (wScroll > $("#featured").offset().top - 120) {
		$(".home").removeClass("navlink-active");
		$(".about").removeClass("navlink-active");
		$(".galery").removeClass("navlink-active");
		$(".featured").addClass("navlink-active");
	}
});
