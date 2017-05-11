var projection = ol.proj.get('EPSG:4326');

var A5_cont_st = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'GeoServer'
		}),
		params: {'LAYERS':'ws_tperez:35106-A5_CONT_ST'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ws_tperez/wms?service=WMS&version=1.1.0&',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	})
})

var roads_st = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'GeoServer'
		}),
		params: {'LAYERS':'ws_tperez:tgr2006se_bern_lka_ST'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ws_tperez/wms?service=WMS&version=1.1.0&',
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
  	target: 'map_q7',
  	layers: [
  		Layer_Stamen_terrain,
  		A5_cont_st,
 	  	roads_st
  	],
  	view: new ol.View({
 		center: ol.proj.fromLonLat([-106.59, 35.08]),
 		zoom: 13
  	}),
  	controls: ol.control.defaults().extend([
  		new ol.control.ScaleLine()
  	]),
  	
  });
