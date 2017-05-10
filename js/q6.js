var projection = ol.proj.get('EPSG:4326');

var A5_tiff = new ol.layer.Tile({
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

var A6_tiff = new ol.layer.Tile({
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


var A5_cont = new ol.layer.Tile({
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

var A6_cont = new ol.layer.Tile({
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
 		A5_tiff,
 		A6_tiff,
 		A5_cont,
 		A6_cont,
 		roads
  	],
  	view: new ol.View({
 		center: ol.proj.fromLonLat([-106.610, 35.06]),
 		zoom: 11
  	}),
  	controls: ol.control.defaults().extend([
  		new ol.control.ScaleLine()
  	]),
  	
  });
