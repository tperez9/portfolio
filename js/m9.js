 var stroke = new ol.style.Stroke({color: 'blue', width: 3});
 var fill = new ol.style.Fill({color: 'white'});
  
  var projection = ol.proj.get('EPSG:3857');
  var dealerstyle = new ol.style.Style({
           image: new ol.style.RegularShape({
             fill: fill,
             stroke: stroke,
             points: 4,
             radius: 12,
 	    rotation: Math.PI / 4,
             angle: 0
           })
         });
 		
 var rsyamaha = [-106.539016, 35.087832];
 var bobbyj = [-106.591102, 35.108861];
 var loslunas = [-106.759293, 34.815192];
 var sfmotors = [-106.021660, 35.634560];
 var highdesert = [-108.760503, 35.544013];
 var fourcorners = [-108.129711, 36.777227];
 
 var rsyamahaPoint = new ol.geom.Point(ol.proj.fromLonLat(rsyamaha, projection));
 var bobbyjPoint = new ol.geom.Point(ol.proj.fromLonLat(bobbyj, projection));
 var loslunasPoint = new ol.geom.Point(ol.proj.fromLonLat(loslunas, projection));
 var sfmotorsPoint = new ol.geom.Point(ol.proj.fromLonLat(sfmotors, projection));
 var highdesertPoint = new ol.geom.Point(ol.proj.fromLonLat(highdesert, projection));
 var fourcornersPoint = new ol.geom.Point(ol.proj.fromLonLat(fourcorners, projection));
 
 var rsyamahaFeature = new ol.Feature({
 	geometry: rsyamahaPoint
 });
 
 var bobbyjFeature = new ol.Feature({
 	geometry: bobbyjPoint
 });
 
 var loslunasFeature = new ol.Feature({
 	geometry: loslunasPoint
 });
 
 var sfmotorsFeature = new ol.Feature({
 	geometry: sfmotorsPoint
 });
 
 var highdesertFeature = new ol.Feature({
 	geometry: highdesertPoint
 });
 
 var fourcornersFeature = new ol.Feature({
 	geometry: fourcornersPoint
 });
 
 var dealers = new ol.layer.Vector({
 	source: new ol.source.Vector({
 		features: [rsyamahaFeature,bobbyjFeature,loslunasFeature,sfmotorsFeature,highdesertFeature,fourcornersFeature]
 	}),
 	style: dealerstyle
 });
 
var nm_counties = new ol.layer.Tile({
 source: new ol.source.TileWMS({
  attributions: new ol.Attribution({
   html: 'RGIS OGC Web Map Service'
  }),
  params: {'LAYERS':'New_Mexico_County_Boundaries','FORMAT':'image/png'},
  url: 'https://rgis-data.unm.edu/ApolloCatalogWMSPublic/service.svc/get?',
 })
});

 var Layer_Stamen_terrain = new ol.layer.Group({
     layers: [
         new ol.layer.Tile({
             source: new ol.source.Stamen({layer: 'terrain'})
         })
     ]
 });
 var myMap = new ol.Map({
 	target: 'map',
 	layers: [
 		Layer_Stamen_terrain,
   nm_counties,
 		dealers
 	],
 	view: new ol.View({
 		center: ol.proj.fromLonLat([-107.284587,35.580751]),
 		zoom: 8
 	}),
 	controls: ol.control.defaults().extend([
 		new ol.control.ScaleLine()
 	]),
 	
 });
