      var styles = [
        'Road',
        'Aerial',
        'AerialWithLabels',
        'collinsBart',
        'ordnanceSurvey'
      ];
      var layers = [];
      var i, ii;
      for (i = 0, ii = styles.length; i < ii; ++i) {
        layers.push(new ol.layer.Tile({
          visible: false,
          preload: Infinity,
          source: new ol.source.BingMaps({
            key: 'Ato8ebqgJEUuEw4gkLYRxTrCQqJryMR5PO0OFjY098gn6VL4zO_WX80I1F4NWuqt',
            imagerySet: styles[i]
            // use maxZoom 19 to see stretched tiles instead of the BingMaps
            // "no photos at this zoom level" tiles
            // maxZoom: 19
          })
        }));
      }
      var map = new ol.Map({
        layers: layers,
        // Improve user experience by loading tiles while dragging/zooming. Will make
        // zooming choppy on mobile or slow devices.
        loadTilesWhileInteracting: true,
        target: 'map',
        view: new ol.View({
          center: [-105.9316, 35.9241],
          zoom: 13
        })
      });
