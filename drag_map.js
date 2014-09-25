// Funcion initialize()
function initialize() 
{
	// Variable con la posición inicial del puntero
	var latlng = new google.maps.LatLng(39.577446,2.656265);
	
	// Configuración de las opciones del mapa
	var myOptions = {
		zoom: 15,  //Nivel del zoom inicial del mapa
		center: latlng, //Centrar puntero al desplazar
		panControl: true, //Joystick para deslpazarse por el mapa; true/false
		zoomControl: true, // Barra de Zoom; true/false
		scaleControl: true, // Muestra la barra de la escala en la parte inferior; true/false
		mapTypeId: google.maps.MapTypeId.ROADMAP //Tipo de mapa: Cambiar ROADMAP por SATELLITE, HYBRID, TERRAIN o ROADMAP PARA LOS TIPOS DE MAPAS
	}
	
	// Mostrar el objeto mapa con las opciones anteriores
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	
	// Crear el Puntero
	marker = new google.maps.Marker({
		map: map,
		draggable:true,	//Se puede arrastrar el puntero (necesario)
		position: latlng //Mostramos las coordenadas del pointer inicial
	});
	
	// Añadimos un listener que esté atento a cuando arrastramos el puntero para que nos recoja las nuevas coordenadas
	google.maps.event.addListener(marker, 'dragend', function() {
		
		
		var point = marker.getPosition(); //obtenemos la posición
		
		map.panTo(point); //centramos el mapa en la nueva posición
		
		var lat=point.lat(); //Obtenemos la latitud
		var lng=point.lng(); //Obtenemos la longitud
		document.getElementById('coorGPS').value=lat.toFixed(6)+","+lng.toFixed(6); //incrustamos las coordenadas en el input
	});
}

google.maps.event.addDomListener(window, 'load', initialize);