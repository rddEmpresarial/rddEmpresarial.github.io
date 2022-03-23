function loadApp() {

	// Create the flipbook

	var anchoContenido = $(".contenido").innerWidth();
	var ancho = anchoContenido * .98;
	var altoContenido = $(".contenido").innerHeight();
	var alto = altoContenido * .95;

	$('.flipbook').turn({
			// Width

			width:ancho,
			
			// Height

			height:alto,

			// Elevation

			elevation: 50,
			
			// Enable gradients

			gradients: true,
			
			// Auto center this flipbook

			autoCenter: true

	});

	$(".flipbook-viewport .flipbook").css("left", -parseInt(ancho / 2));
	$(".flipbook-viewport .flipbook").css("top", -parseInt(alto / 2));

	window.addEventListener("resize", function() {
		var anchoContenido = $(".contenido").innerWidth();
		var ancho = anchoContenido * .98;
		var altoContenido = $(".contenido").innerHeight();
		var alto = altoContenido * .95;

		$('.flipbook').turn('size', ancho, alto);
		$(".flipbook-viewport .flipbook").css("left", -parseInt(ancho / 2));
		$(".flipbook-viewport .flipbook").css("top", -parseInt(alto / 2));

	});

}

// Load the HTML4 version if there's not CSS transform

yepnope({
	test : Modernizr.csstransforms,
	yep: ['../../'],
	nope: ['turn.html4.min.js'],
	both: ['css/basic.css'],
	complete: loadApp
});