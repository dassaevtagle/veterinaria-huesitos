document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#vip-slide', {
		perPage: 4,
		rewind: true,
		autoplay: true,
		interval: 3000,
		breakpoints : {
			'700': {
				perPage  : 2,
			}
		}
	} ).mount();
} );

var clientesSecondarySlider = new Splide( '#clientes-secondary-slider', {
	rewind      : true,
	fixedWidth  : 100,
	fixedHeight : 64,
	isNavigation: true,
	autoplay		: true,
	interval		: 3000,
	gap         : 10,
	focus       : 'center',
	pagination  : false,
	cover       : true,
	direction: 'ttb',
	heightRatio: 4.4,
	breakpoints : {
		'800': {
			fixedWidth  : 80,
			fixedHeight : 60,
		},
		'425': {
			arrows: false
		}
	}
} ).mount();

// Create the main slider.
var clientesSlider = new Splide( '#clientes-slider', {
	type       : 'fade',
	heightRatio: 1.3,
	fixedWidth: "25vw",
	pagination : false,
	arrows     : false,
	cover      : true,
	breakpoints : {
		'1100': {
			fixedWidth  : "30vw",
			heightRatio	: 1.6,
		},
		'800': {
			fixedWidth  : "50vw",
			heightRatio	: 1.6,
		},
		'425':{
			pagination: true,
			fixedWidth  : "60vw",
			heightRatio	: 1.7,
		}
	}
} );

// Set the thumbnails slider as a sync target and then call mount.
clientesSlider.sync( clientesSecondarySlider ).mount();