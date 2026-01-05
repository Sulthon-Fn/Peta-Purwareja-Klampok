var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DesaKalilandak_1 = new ol.format.GeoJSON();
var features_DesaKalilandak_1 = format_DesaKalilandak_1.readFeatures(json_DesaKalilandak_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKalilandak_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKalilandak_1.addFeatures(features_DesaKalilandak_1);
var lyr_DesaKalilandak_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKalilandak_1,
maxResolution:8.401339845678589,
 
                style: style_DesaKalilandak_1,
                popuplayertitle: 'Desa Kalilandak',
                interactive: true,
                title: '<img src="styles/legend/DesaKalilandak_1.png" /> Desa Kalilandak'
            });
var format_BalaiDesaKalilandak_2 = new ol.format.GeoJSON();
var features_BalaiDesaKalilandak_2 = format_BalaiDesaKalilandak_2.readFeatures(json_BalaiDesaKalilandak_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BalaiDesaKalilandak_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BalaiDesaKalilandak_2.addFeatures(features_BalaiDesaKalilandak_2);
var lyr_BalaiDesaKalilandak_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BalaiDesaKalilandak_2,
maxResolution:28.00446615226196,
 
                style: style_BalaiDesaKalilandak_2,
                popuplayertitle: 'Balai Desa Kalilandak',
                interactive: true,
                title: '<img src="styles/legend/BalaiDesaKalilandak_2.png" /> Balai Desa Kalilandak'
            });
var format_Sawah_3 = new ol.format.GeoJSON();
var features_Sawah_3 = format_Sawah_3.readFeatures(json_Sawah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_3.addFeatures(features_Sawah_3);
var lyr_Sawah_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_3,
maxResolution:2.8004466152261966,
 
                style: style_Sawah_3,
                popuplayertitle: 'Sawah',
                interactive: true,
                title: '<img src="styles/legend/Sawah_3.png" /> Sawah'
            });
var group_DesaKalilandak = new ol.layer.Group({
                                layers: [lyr_DesaKalilandak_1,lyr_BalaiDesaKalilandak_2,lyr_Sawah_3,],
                                fold: 'open',
                                title: 'Desa Kalilandak'});

lyr_GoogleSatellite_0.setVisible(true);lyr_DesaKalilandak_1.setVisible(true);lyr_BalaiDesaKalilandak_2.setVisible(true);lyr_Sawah_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_DesaKalilandak];
lyr_DesaKalilandak_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', });
lyr_BalaiDesaKalilandak_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', });
lyr_Sawah_3.set('fieldAliases', {'id': 'id', });
lyr_DesaKalilandak_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', });
lyr_BalaiDesaKalilandak_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', });
lyr_Sawah_3.set('fieldImages', {'id': 'TextEdit', });
lyr_DesaKalilandak_1.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - visible with data', 'Kecamatan': 'hidden field', 'Kabupaten': 'hidden field', 'Provinsi': 'hidden field', });
lyr_BalaiDesaKalilandak_2.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - visible with data', 'Desa': 'hidden field', 'Kecamatan': 'hidden field', 'Kabupaten': 'hidden field', 'Provinsi': 'hidden field', });
lyr_Sawah_3.set('fieldLabels', {'id': 'no label', });
lyr_Sawah_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});