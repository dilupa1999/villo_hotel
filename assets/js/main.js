/*-----------------------------------------------------------------

Project:        Helex Luxury Hotel
Author URI:     https://themeforest.net/user/namespace-it
Version:        1.1
File:           Js File
Last change:    23/12/2024
Assigned to:    Villo Hotel
Primary use:    Hotel 

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. header
02. animated text with swiper slider
03. magnificPopup
04. counter up
05. wow animation
06. nice select
07. swiper slider
08. search popup
09. mousecursor 
09. preloader 


------------------------------------------------------------------*/

(function ($) {
	("use strict");

	$(document).ready(function () {
		//>> Mobile Menu Js Start <<//
		$("#mobile-menu").meanmenu({
			meanMenuContainer: ".mobile-menu",
			meanScreenWidth: "1199",
			meanExpand: ['<i class="far fa-plus"></i>'],
		});

		//>> Sidebar Toggle Js Start <<//
		$(".offcanvas__close,.offcanvas__overlay").on("click", function () {
			$(".offcanvas__info").removeClass("info-open");
			$(".offcanvas__overlay").removeClass("overlay-open");
		});
		$(".sidebar__toggle").on("click", function () {
			$(".offcanvas__info").addClass("info-open");
			$(".offcanvas__overlay").addClass("overlay-open");
		});

		//>> Body Overlay Js Start <<//
		$(".body-overlay").on("click", function () {
			$(".offcanvas__area").removeClass("offcanvas-opened");
			$(".df-search-area").removeClass("opened");
			$(".body-overlay").removeClass("opened");
		});

		//>> Sticky Header Js Start <<//

		$(window).scroll(function () {
			if ($(this).scrollTop() > 250) {
				$("#header-sticky").addClass("sticky");
			} else {
				$("#header-sticky").removeClass("sticky");
			}
		});

		//>> Video Popup Start <<//
		$(".img-popup").magnificPopup({
			type: "image",
			gallery: {
				enabled: true,
			},
		});

		$(".video-popup").magnificPopup({
			type: "iframe",
			callbacks: {},
		});

		//>> Counterup Start <<//
		$(".count").counterUp({
			delay: 15,
			time: 4000,
		});

		//>> Wow Animation Start <<//
		new WOW().init();

		//>> Nice Select Start <<//
		$("select").niceSelect();

		//>> Testimonial Slider Start <<//
		if ($(".testimonial-slider").length > 0) {
			const testimonialSlider = new Swiper(".testimonial-slider", {
				spaceBetween: 30,
				speed: 2000,
				loop: true,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: ".array-prev",
					prevEl: ".array-next",
				},
				breakpoints: {
					991: {
						slidesPerView: 1,
					},
					767: {
						slidesPerView: 1,
					},
					575: {
						slidesPerView: 1,
					},
					400: {
						slidesPerView: 1,
					},
					0: {
						slidesPerView: 1,
					},
				},
			});
		}
		//Banner Slider1
		const heroSLider = new Swiper(".hero-slider", {
			// Optional parameters
			speed: 4500,
			loop: true,
			slidesPerView: 1,
			simulateTouch: false,
			autoplay: true,
			effect: "fade",
			breakpoints: {
				1600: {
					slidesPerView: 1,
				},
				1400: {
					slidesPerView: 1,
				},
				1200: {
					slidesPerView: 1,
				},
				992: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				0: {
					slidesPerView: 1,
				},

				a11y: false,
			},
			pagination: {
				el: ".dots",
				clickable: true,
			},

			navigation: {
				prevEl: ".array-next",
				nextEl: ".array-prev",
			},
		});

		//>> Apartment Slider Start <<//
		const apartmentSlider = new Swiper(".apartment-slider", {
			spaceBetween: 24,
			speed: 2000,
			loop: true,
			centeredSlides: true,
			autoplay: {
				delay: 2000,
				// disableOnInteraction: false,
			},
			pagination: {
				el: ".swiper-pagination-cus",
				type: "fraction",
			},
			navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
			breakpoints: {
				1199: {
					slidesPerView: 1.5,
				},
				991: {
					slidesPerView: 1.2,
				},
				767: {
					slidesPerView: 1,
				},
				575: {
					slidesPerView: 1,
				},
				400: {
					slidesPerView: 1,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});

		//>> Offinfo Slider Start <<//
		const offinformationSlider = new Swiper(".offinformation-slider", {
			spaceBetween: 24,
			speed: 2000,
			loop: true,
			centeredSlides: true,
			autoplay: {
				delay: 2000,
				// disableOnInteraction: false,
			},
			pagination: {
				el: ".swiper-pagination-cus",
				type: "fraction",
			},
			navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
			breakpoints: {
				1199: {
					slidesPerView: 3.8,
				},
				991: {
					slidesPerView: 2.2,
				},
				767: {
					slidesPerView: 1.5,
				},
				575: {
					slidesPerView: 1.4,
				},
				400: {
					slidesPerView: 1.2,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});

		//>> city-slider-wrap Start <<//
		const citySliderWrap = new Swiper(".city-slider-wrap", {
			spaceBetween: 0,
			speed: 2000,
			loop: true,
			autoplay: {
				delay: 2000,
			},
			navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
			breakpoints: {
				1199: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 3,
				},
				575: {
					slidesPerView: 2,
				},
				400: {
					slidesPerView: 2,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});

		//>> city-slider-wrap2 Start <<//
		const citySliderWrap2 = new Swiper(".city-slider-wrap2", {
			spaceBetween: 24,
			speed: 2000,
			loop: true,
			centeredSlides: true,
			autoplay: {
				delay: 2000,
			},
			navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
			breakpoints: {
				1199: {
					slidesPerView: 2.8,
				},
				991: {
					slidesPerView: 3,
					spaceBetween: 14,
				},
				767: {
					slidesPerView: 3,
					spaceBetween: 14,
				},
				575: {
					slidesPerView: 2,
					spaceBetween: 14,
				},
				400: {
					slidesPerView: 2,
					spaceBetween: 14,
				},
				0: {
					slidesPerView: 1,
					spaceBetween: 14,
				},
			},
		});

		//>> Brand Slider Start <<//
		if ($(".brand-slider").length > 0) {
			const brandSlider = new Swiper(".brand-slider", {
				spaceBetween: 30,
				speed: 2000,
				loop: true,
				centeredSlides: true,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
				},
				breakpoints: {
					1199: {
						slidesPerView: 7,
					},
					991: {
						slidesPerView: 6,
					},
					767: {
						slidesPerView: 5,
					},
					575: {
						slidesPerView: 4,
					},
					400: {
						slidesPerView: 3,
					},
					0: {
						slidesPerView: 2,
					},
				},
			});
		}
		//NOt use Bottom Code

		//>> Project Slider Start <<//
		if ($(".project-slider").length > 0) {
			const projectSlider = new Swiper(".project-slider", {
				spaceBetween: 30,
				speed: 2000,
				loop: true,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: ".array-prev",
					prevEl: ".array-next",
				},
				breakpoints: {
					1199: {
						slidesPerView: 3,
					},
					991: {
						slidesPerView: 3,
					},
					767: {
						slidesPerView: 3,
					},
					575: {
						slidesPerView: 2,
					},
					400: {
						slidesPerView: 1,
					},
					0: {
						slidesPerView: 1,
					},
				},
			});
		}

		//>> Project Slider Start <<//
		if ($(".project-slider-2").length > 0) {
			const projectSlider2 = new Swiper(".project-slider-2", {
				spaceBetween: 30,
				speed: 2000,
				loop: true,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: ".array-prev",
					prevEl: ".array-next",
				},
				breakpoints: {
					1199: {
						slidesPerView: 4,
					},
					991: {
						slidesPerView: 3,
					},
					767: {
						slidesPerView: 2,
					},
					575: {
						slidesPerView: 1,
					},
					400: {
						slidesPerView: 1,
					},
					0: {
						slidesPerView: 1,
					},
				},
			});
		}

		//>> Testimonial Slider Start <<//
		if ($(".testimonial-slider-2").length > 0) {
			const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
				spaceBetween: 30,
				speed: 1000,
				loop: true,
				autoplay: {
					delay: 1000,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: ".array-prev",
					prevEl: ".array-next",
				},
				breakpoints: {
					991: {
						slidesPerView: 2,
					},
					767: {
						slidesPerView: 2,
					},
					575: {
						slidesPerView: 1,
					},
					400: {
						slidesPerView: 1,
					},
					0: {
						slidesPerView: 1,
					},
				},
			});
		}

		//>> Progress Bar Js Start <<//
		$(".progress-bar").waypoint(
			function () {
				$(".progress-bar").css({
					animation: "animate-positive 2.6s",
					opacity: "1",
				});
			},
			{ offset: "75%" }
		);

		//>> Back To Top Slider Start <<//
		$(window).scroll(function () {
			if ($(this).scrollTop() > 20) {
				$("#back-top").addClass("show");
			} else {
				$("#back-top").removeClass("show");
			}
		});
		$("#back-top").on("click", function () {
			$("html, body").animate({ scrollTop: 0 }, 800);
			return false;
		});
	}); // End Document Ready Function

	//Price Range Slideer
	document.addEventListener("DOMContentLoaded", function () {
		const minSlider = document.getElementById("min-slider");
		const maxSlider = document.getElementById("max-slider");
		const amount = document.getElementById("amount");

		function updateAmount() {
			const minValue = parseInt(minSlider.value, 10);
			const maxValue = parseInt(maxSlider.value, 10);

			// Ensure the minimum value is always lower than the maximum value
			if (minValue > maxValue) {
				minSlider.value = maxValue;
			}

			// Update the displayed price range
			amount.value = "$" + minSlider.value + " - $" + maxSlider.value;

			// Calculate the percentage positions of the sliders
			const minPercent =
				((minSlider.value - minSlider.min) /
					(minSlider.max - minSlider.min)) *
				100;
			const maxPercent =
				((maxSlider.value - maxSlider.min) /
					(maxSlider.max - maxSlider.min)) *
				100;

			// Update the background gradient to show the active track color
			minSlider.style.background = `linear-gradient(to right, #000 ${minPercent}%, #ff5722 ${minPercent}%, #ff5722 ${maxPercent}%, #000 ${maxPercent}%)`;
			maxSlider.style.background = `linear-gradient(to right, #000 ${minPercent}%, #ff5722 ${minPercent}%, #ff5722 ${maxPercent}%, #000 ${maxPercent}%)`;
		}

		// Initialize the sliders and track with default values
		amount && updateAmount();

		// if (minSlider && maxSlider) {

		// Add event listeners for both sliders
		minSlider && minSlider.addEventListener("input", updateAmount);
		maxSlider && maxSlider.addEventListener("input", updateAmount);
		// }
	});

	document.addEventListener("DOMContentLoaded", function () {
		const bookingForm = document.querySelector("#booking-form");

		if (bookingForm) {
			bookingForm.addEventListener("submit", function (e) {
				e.preventDefault();

				const checkIn = bookingForm.querySelector("#check-in").value;
				const checkOut = bookingForm.querySelector("#check-out").value;
				const adults = bookingForm.querySelector("#adults").value;
				const children = bookingForm.querySelector("#children").value;

				// Validate dates
				if (!checkIn || !checkOut) {
					alert("Please select both check-in and check-out dates.");
					return;
				}

				// Ensure check-out is after check-in
				if (new Date(checkOut) <= new Date(checkIn)) {
					alert("Check-out date must be after check-in date.");
					return;
				}

				alert(`Booking Details:
                Check-in: ${checkIn}
                Check-out: ${checkOut}
                Adults: ${adults}
                Children: ${children}`);
			});
		}
	});

	//Cart Increment Decriemnt

	// quntity increment and decrement
	$(document).on("click", ".quantityIncrement", function () {
		const input = $(this).siblings("input");
		input.val(parseInt(input.val(), 10) + 1);
	});
	$(document).on("click", ".quantityDecrement", function () {
		const input = $(this).siblings("input");
		const currentVal = parseInt(input.val(), 10);
		if (currentVal > 1) input.val(currentVal - 1);
	});

	function loader() {
		$(window).on("load", function () {
			// Animate loader off screen
			$(".preloader").addClass("loaded");
			$(".preloader").delay(600).fadeOut();
		});
	}

	loader();
})(jQuery); // End jQuery
