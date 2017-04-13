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
        loadTilesWhileInteracting: true,
        target: 'map',
        view: new ol.View({
          center: [-6625526.938639, -23210500.106945],
          zoom: 13
        })
      });

      var select = document.getElementById('layer-select');
      function onChange() {
        var style = select.value;
        for (var i = 0, ii = layers.length; i < ii; ++i) {
          layers[i].setVisible(styles[i] === style);
        }
      }
      select.addEventListener('change', onChange);
      onChange();
