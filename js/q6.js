var projection = ol.proj.get('EPSG:4326');

var tifA5 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'GeoServer'
		}),
		params: {'LAYERS':'ws_tperez:tp_35106-A5'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ws_tperez/wms?version=1.1.1&request=GetCapabilities',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	})
})

var tif_A6 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'GeoServer'
		}),
		params: {'LAYERS':'ws_tperez:tp_35106-A6'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ws_tperez/wms?version=1.1.1&request=GetCapabilities',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	})
})


var contours_A5 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'GeoServer'
		}),
		params: {'LAYERS':'ws_tperez:tp_35106-A5_CONT'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ws_tperez/wms?version=1.1.1&request=GetCapabilities',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	})
})

var contours_A6 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'GeoServer'
		}),
		params: {'LAYERS':'ws_tperez:tp_35106-A6_CONT'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ws_tperez/wms?version=1.1.1&request=GetCapabilities',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	})
})

var roads = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'GeoServer'
		}),
		params: {'LAYERS':'ws_tperez:tp_tgr2006se_bern_lka'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ws_tperez/wms?version=1.1.1&request=GetCapabilities',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	})
})

var Layer_Stamen_terrain = new ol.layer.Group({
     layers: [
         new ol.layer.Tile({
             source: new ol.source.Stamen({layer: 'terrain'})
         })
     ]
 });
 var map = new ol.Map({
 	target: 'map_q6',
 	layers: [
 		Layer_Stamen_terrain,
		tif_A5,
		tif_A6,
		contours_A5,
		contours_A6,
		roads
 	],
 	view: new ol.View({
		center: ol.proj.fromLonLat([-106.610, 35.111]),
		zoom: 11
 	}),
 	controls: ol.control.defaults().extend([
 		new ol.control.ScaleLine()
 	]),
 	
 });
