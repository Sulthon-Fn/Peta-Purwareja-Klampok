var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DesaKalimandi_1 = new ol.format.GeoJSON();
var features_DesaKalimandi_1 = format_DesaKalimandi_1.readFeatures(json_DesaKalimandi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKalimandi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKalimandi_1.addFeatures(features_DesaKalimandi_1);
var lyr_DesaKalimandi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKalimandi_1, 
                style: style_DesaKalimandi_1,
                popuplayertitle: 'Desa Kalimandi',
                interactive: true,
                title: '<img src="styles/legend/DesaKalimandi_1.png" /> Desa Kalimandi'
            });
var format_BalaiDesaKalimandi_2 = new ol.format.GeoJSON();
var features_BalaiDesaKalimandi_2 = format_BalaiDesaKalimandi_2.readFeatures(json_BalaiDesaKalimandi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BalaiDesaKalimandi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BalaiDesaKalimandi_2.addFeatures(features_BalaiDesaKalimandi_2);
var lyr_BalaiDesaKalimandi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BalaiDesaKalimandi_2, 
                style: style_BalaiDesaKalimandi_2,
                popuplayertitle: 'Balai Desa Kalimandi',
                interactive: true,
                title: '<img src="styles/legend/BalaiDesaKalimandi_2.png" /> Balai Desa Kalimandi'
            });
var group_DesaKalimandi = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_DesaKalimandi_1,lyr_BalaiDesaKalimandi_2,],
                                fold: 'open',
                                title: 'Desa Kalimandi'});

lyr_GoogleSatellite_0.setVisible(true);lyr_DesaKalimandi_1.setVisible(true);lyr_BalaiDesaKalimandi_2.setVisible(true);
var layersList = [group_DesaKalimandi];
lyr_DesaKalimandi_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', });
lyr_BalaiDesaKalimandi_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', });
lyr_DesaKalimandi_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', });
lyr_BalaiDesaKalimandi_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', });
lyr_DesaKalimandi_1.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', 'Kecamatan': 'no label', 'Kabupaten': 'no label', 'Provinsi': 'no label', });
lyr_BalaiDesaKalimandi_2.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', 'Desa': 'no label', 'Kecamatan': 'no label', 'Kabupaten': 'no label', 'Provinsi': 'no label', });
lyr_BalaiDesaKalimandi_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});