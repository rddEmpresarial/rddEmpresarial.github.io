function loadApp() {

	// Create the flipbook

	var anchoContenido = $(".contenido").innerWidth();
	var ancho = anchoContenido * .98;
	var altoContenido = $(".contenido").innerHeight();
	var alto = altoContenido * .95;

	$('.flipbook').turn({
			//Centrar el libro automáticamente si solamente se ve una hoja: true: centrar, false: no centrar
			autoCenter: true,
			//Cuántas hojas se ven al mismo tiempo: single: 1, double: 2
			display: "double",
			//Duración en milisegundos de la animación al dar click para cambiar hoja
			duration: 600,
			//Mostrar gradiantes y sombras durante la animación de cambio de hoja: true: mostrar, false: no mostrar
			gradients: true,
			//Altura en pixeles del libro
			height:alto,
			// Ancho en pixeles del libro
			width:ancho,
			when: {
				turned: function(event, page, pageObj) {
					var botonesNavegacion = $(".cuadro-temas li");
					for(let i=0; i<botonesNavegacion.length; i++) {
						$(botonesNavegacion[i]).removeClass("seleccionado");
					}
					if(page >= 2) {
						var aux = page;
						if(page == 2) {
							var aux = 3;
						}
						var pagina = "p" + aux;
						var existe = document.getElementById(pagina);
						while(existe == null){
							aux--;
							pagina = "p" + aux;
							existe = document.getElementById(pagina);
						}
						$("#" + pagina).addClass("seleccionado");
					}
				}
			}
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

	var botonesNavegacion = $(".cuadro-temas li");
	for(let i=0; i<botonesNavegacion.length; i++) {
		$(botonesNavegacion[i]).click(function(){
			var id = parseInt(botonesNavegacion[i].id.replace("p", ""));
			$('.flipbook').turn("page", id);
			for(let j=0; j<botonesNavegacion.length; j++) {
				$(botonesNavegacion[j]).removeClass("seleccionado");	
			}
			$(botonesNavegacion[i]).addClass("seleccionado");
		});
	}

	var botonesUnidades = $(".unidades li");
	for(let i=0; i<botonesUnidades.length; i++) {
		$(botonesUnidades[i]).click(function(){
			for(let j=0; j<botonesUnidades.length; j++) {
				$(botonesUnidades[j]).removeClass("seleccionado");	
			}
			$(botonesUnidades[i]).addClass("seleccionado");
		});
	}

}

function destruir() {
	$('.flipbook').turn("destroy");
}
// Load the HTML4 version if there's not CSS transform

yepnope({
	test : Modernizr.csstransforms,
	yep: ['../../'],
	nope: ['turn.html4.min.js'],
	both: ['css/basic.css'],
	complete: loadApp
});