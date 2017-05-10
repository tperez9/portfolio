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
