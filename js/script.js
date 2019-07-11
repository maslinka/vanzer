
$(document).ready(function($) {
	! function () {
		var e;
		window.addEventListener("load", function () {
			e = new google.maps.Map(document.getElementById("map"), {
				center: {
					lat: -7.939706913006946,
					lng: 112.62542320944426
				},
				zoom: 14,
				disableDefaultUI: !0,
				styles: [{
					featureType: "administrative.land_parcel",
					elementType: "labels",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "administrative.locality",
					elementType: "geometry.fill",
					stylers: [{
						weight: 1
					}]
				}, {
					featureType: "road.local",
					elementType: "labels",
					stylers: [{
						visibility: "off"
					}]
				}]
			}), new google.maps.Marker({
				position: {
					lat: -7.9273615555,
					lng: 112.637344555
				},
				map: e,
				icon: "src/img/marker.png"
			})
		})
	}();
	//# sourceMappingURL=map-dist.js.map

// $('.autoplay-i').slick({
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	autoplay: true,
// 	autoplaySpeed: 5000,
// 	dots: true,
// 	pauseOnHover: true,
// 	arrows: false,
// });
// $('.autoplay-w').slick({
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	autoplay: true,
// 	autoplaySpeed: 5000,
// 	dots: true,
// 	pauseOnHover: true,
// 	arrows: false,
// });
$('.carousel').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	dots: true,
	pauseOnHover: true,
	arrows: false,
	// focusOnSelect: true,
	// centerMode: true
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		  }
		},
	
		{
		  breakpoint: 900,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
	
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
});

$("#fullpage").fullpage({
	scrollingSpeed: 700,
	verticalCentered: false,
	navigation: true,
	navigationPosition: 'left',
	// navigationTooltips: ['Header', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'],
	sectionsColor: ['#ccc', '#fff', '#ccc', '#ccc', '#ccc'],
	responsiveWidth:900,

	afterLoad: function(anchorLink, index) {
		var isAnimatedHeader = $('.header .is-animated');

		if(index == 1){
			isAnimatedHeader.eq(0).addClass('animated fadeInDown').css({'animation-delay': '.5s', 'animation-duration': '1s'}); // nav
			isAnimatedHeader.eq(1).addClass('animated fadeIn').css({'animation-delay': '1.5s', 'animation-duration': '1.5s'}); // title
			isAnimatedHeader.eq(2).addClass('animated fadeIn').css({'animation-delay': '1.5s', 'animation-duration': '1.5s'}); // subtitle
		}
	},

	onLeave: function(index, nextIndex, direction) {

		var isAnimatedAbout = $('.about .is-animated'),
		isAnimatedServices = $('.services .is-animated'),
		isAnimatedPortfolio = $('.portfolio .is-animated'),
		// isAnimatedBlog = $('.blog .is-animated'),
		isAnimatedContact = $('.contact .is-animated');
		// 'use strict';

		if(nextIndex == 2) {
			isAnimatedAbout.eq(0).addClass('animated fadeInDown').css({'animation-delay': '.5s', 'animation-duration': '1.5s'}); //title		
		}

		if(nextIndex == 3) {
			isAnimatedServices.eq(0).addClass('animated fadeInDown').css({'animation-delay': '.5s', 'animation-duration': '1.5s'}); // title

		}

		if(nextIndex == 4) {
			isAnimatedPortfolio.eq(0).addClass('animated fadeInDown').css({'animation-delay': '.5s', 'animation-duration': '1.5s'}); // title
			isAnimatedPortfolio.eq(1).addClass('animated fadeIn').css({'animation-delay': '1.5s', 'animation-duration': '1.5s'}); // slider
		}

		// if(nextIndex == 5) {
		// 	isAnimatedBlog.eq(0).addClass('animated fadeInDown').css({'animation-delay': '.5s', 'animation-duration': '1.5s'}); // title
		// }

		 if(nextIndex == 5) {
			isAnimatedContact.eq(0).addClass('animated fadeInDown').css({'animation-delay': '.5s', 'animation-duration': '1.5s'}); // title
		
		 }
	}
});




// $('#btnDisableFP').on( "click", destroyFP);

// function destroyFP() {
// $("#fullpage").fullpage.destroy();
// $('body').css("overflow-x","hidden");
//  }

 });

function initMap() {
var vanzerOffice = {lat: 51.523834, lng: -0.158443};
var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 16,
	center: {lat: 51.521367, lng: -0.1560130},
	styles: [
	{
		elementType: 'geometry',
		stylers: [{color: '#f5f5f5'}]
	},
	{
		elementType: 'labels.icon',
		stylers: [{visibility: 'off'}]
	},
	{
		elementType: 'labels.text.fill',
		stylers: [{color: '#616161'}]
	},
	{
		elementType: 'labels.text.stroke',
		stylers: [{color: '#f5f5f5'}]
	},
	{
		featureType: 'administrative.land_parcel',
		elementType: 'labels.text.fill',
		stylers: [{color: '#bdbdbd'}]
	},
	{
		featureType: 'poi',
		elementType: 'geometry',
		stylers: [{color: '#eeeeee'}]
	},
	{
		featureType: 'poi',
		elementType: 'labels.text.fill',
		stylers: [{color: '#757575'}]
	},
	{
		featureType: 'poi.park',
		elementType: 'geometry',
		stylers: [{color: '#e5e5e5'}]
	},
	{
		featureType: 'poi.park',
		elementType: 'labels.text.fill',
		stylers: [{color: '#9e9e9e'}]
	},
	{
		featureType: 'road',
		elementType: 'geometry',
		stylers: [{color: '#ffffff'}]
	},
	{
		featureType: 'road.arterial',
		elementType: 'labels.text.fill',
		stylers: [{color: '#757575'}]
	},
	{
		featureType: 'road.highway',
		elementType: 'geometry',
		stylers: [{color: '#dadada'}]
	},
	{
		featureType: 'road.highway',
		elementType: 'labels.text.fill',
		stylers: [{color: '#616161'}]
	},
	{
		featureType: 'road.local',
		elementType: 'labels.text.fill',
		stylers: [{color: '#9e9e9e'}]
	},
	{
		featureType: 'transit.line',
		elementType: 'geometry',
		stylers: [{color: '#e5e5e5'}]
	},
	{
		featureType: 'transit.station',
		elementType: 'geometry',
		stylers: [{color: '#eeeeee'}]
	},
	{
		featureType: 'water',
		elementType: 'geometry',
		stylers: [{color: '#c9c9c9'}]
	},
	{
		featureType: 'water',
		elementType: 'labels.text.fill',
		stylers: [{color: '#9e9e9e'}]
	}
	]
});
var markerIcon = "icons/map-marker.svg";
var marker = new google.maps.Marker({
icon: markerIcon,
position: vanzerOffice,
map: map
});
}

