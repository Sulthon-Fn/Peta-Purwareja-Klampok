var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DesaKaliwinasuh_1 = new ol.format.GeoJSON();
var features_DesaKaliwinasuh_1 = format_DesaKaliwinasuh_1.readFeatures(json_DesaKaliwinasuh_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKaliwinasuh_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKaliwinasuh_1.addFeatures(features_DesaKaliwinasuh_1);
var lyr_DesaKaliwinasuh_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKaliwinasuh_1,
maxResolution:28.00446615226196,
 
                style: style_DesaKaliwinasuh_1,
                popuplayertitle: 'Desa Kaliwinasuh',
                interactive: true,
                title: '<img src="styles/legend/DesaKaliwinasuh_1.png" /> Desa Kaliwinasuh'
            });
var format_DesaKaliwinasuhSawah_2 = new ol.format.GeoJSON();
var features_DesaKaliwinasuhSawah_2 = format_DesaKaliwinasuhSawah_2.readFeatures(json_DesaKaliwinasuhSawah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKaliwinasuhSawah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKaliwinasuhSawah_2.addFeatures(features_DesaKaliwinasuhSawah_2);
var lyr_DesaKaliwinasuhSawah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKaliwinasuhSawah_2, 
                style: style_DesaKaliwinasuhSawah_2,
                popuplayertitle: 'Desa Kaliwinasuh — Sawah',
                interactive: true,
                title: '<img src="styles/legend/DesaKaliwinasuhSawah_2.png" /> Desa Kaliwinasuh — Sawah'
            });
var format_DesaKaliwinasuhFasilitasKeagamaan_3 = new ol.format.GeoJSON();
var features_DesaKaliwinasuhFasilitasKeagamaan_3 = format_DesaKaliwinasuhFasilitasKeagamaan_3.readFeatures(json_DesaKaliwinasuhFasilitasKeagamaan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKaliwinasuhFasilitasKeagamaan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKaliwinasuhFasilitasKeagamaan_3.addFeatures(features_DesaKaliwinasuhFasilitasKeagamaan_3);
var lyr_DesaKaliwinasuhFasilitasKeagamaan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKaliwinasuhFasilitasKeagamaan_3, 
                style: style_DesaKaliwinasuhFasilitasKeagamaan_3,
                popuplayertitle: 'Desa Kaliwinasuh — Fasilitas Keagamaan',
                interactive: true,
                title: '<img src="styles/legend/DesaKaliwinasuhFasilitasKeagamaan_3.png" /> Desa Kaliwinasuh — Fasilitas Keagamaan'
            });
var format_DesaKaliwinasuhKantor_4 = new ol.format.GeoJSON();
var features_DesaKaliwinasuhKantor_4 = format_DesaKaliwinasuhKantor_4.readFeatures(json_DesaKaliwinasuhKantor_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKaliwinasuhKantor_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKaliwinasuhKantor_4.addFeatures(features_DesaKaliwinasuhKantor_4);
var lyr_DesaKaliwinasuhKantor_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKaliwinasuhKantor_4, 
                style: style_DesaKaliwinasuhKantor_4,
                popuplayertitle: 'Desa Kaliwinasuh — Kantor',
                interactive: true,
                title: '<img src="styles/legend/DesaKaliwinasuhKantor_4.png" /> Desa Kaliwinasuh — Kantor'
            });
var format_DesaKaliwinasuhLapangan_5 = new ol.format.GeoJSON();
var features_DesaKaliwinasuhLapangan_5 = format_DesaKaliwinasuhLapangan_5.readFeatures(json_DesaKaliwinasuhLapangan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKaliwinasuhLapangan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKaliwinasuhLapangan_5.addFeatures(features_DesaKaliwinasuhLapangan_5);
var lyr_DesaKaliwinasuhLapangan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKaliwinasuhLapangan_5, 
                style: style_DesaKaliwinasuhLapangan_5,
                popuplayertitle: 'Desa Kaliwinasuh — Lapangan',
                interactive: true,
                title: '<img src="styles/legend/DesaKaliwinasuhLapangan_5.png" /> Desa Kaliwinasuh — Lapangan'
            });
var format_DesaKaliwinasuhPemakaman_6 = new ol.format.GeoJSON();
var features_DesaKaliwinasuhPemakaman_6 = format_DesaKaliwinasuhPemakaman_6.readFeatures(json_DesaKaliwinasuhPemakaman_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKaliwinasuhPemakaman_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKaliwinasuhPemakaman_6.addFeatures(features_DesaKaliwinasuhPemakaman_6);
var lyr_DesaKaliwinasuhPemakaman_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKaliwinasuhPemakaman_6, 
                style: style_DesaKaliwinasuhPemakaman_6,
                popuplayertitle: 'Desa Kaliwinasuh — Pemakaman',
                interactive: true,
                title: '<img src="styles/legend/DesaKaliwinasuhPemakaman_6.png" /> Desa Kaliwinasuh — Pemakaman'
            });
var format_DesaKaliwinasuhRumahSaya_7 = new ol.format.GeoJSON();
var features_DesaKaliwinasuhRumahSaya_7 = format_DesaKaliwinasuhRumahSaya_7.readFeatures(json_DesaKaliwinasuhRumahSaya_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKaliwinasuhRumahSaya_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKaliwinasuhRumahSaya_7.addFeatures(features_DesaKaliwinasuhRumahSaya_7);
var lyr_DesaKaliwinasuhRumahSaya_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKaliwinasuhRumahSaya_7, 
                style: style_DesaKaliwinasuhRumahSaya_7,
                popuplayertitle: 'Desa Kaliwinasuh — Rumah Saya',
                interactive: true,
                title: '<img src="styles/legend/DesaKaliwinasuhRumahSaya_7.png" /> Desa Kaliwinasuh — Rumah Saya'
            });
var format_DesaKaliwinasuhSekolah_8 = new ol.format.GeoJSON();
var features_DesaKaliwinasuhSekolah_8 = format_DesaKaliwinasuhSekolah_8.readFeatures(json_DesaKaliwinasuhSekolah_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKaliwinasuhSekolah_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKaliwinasuhSekolah_8.addFeatures(features_DesaKaliwinasuhSekolah_8);
var lyr_DesaKaliwinasuhSekolah_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKaliwinasuhSekolah_8, 
                style: style_DesaKaliwinasuhSekolah_8,
                popuplayertitle: 'Desa Kaliwinasuh — Sekolah',
                interactive: true,
                title: '<img src="styles/legend/DesaKaliwinasuhSekolah_8.png" /> Desa Kaliwinasuh — Sekolah'
            });
var format_DesaKaliwinasuhSPBU_9 = new ol.format.GeoJSON();
var features_DesaKaliwinasuhSPBU_9 = format_DesaKaliwinasuhSPBU_9.readFeatures(json_DesaKaliwinasuhSPBU_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKaliwinasuhSPBU_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKaliwinasuhSPBU_9.addFeatures(features_DesaKaliwinasuhSPBU_9);
var lyr_DesaKaliwinasuhSPBU_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKaliwinasuhSPBU_9, 
                style: style_DesaKaliwinasuhSPBU_9,
                popuplayertitle: 'Desa Kaliwinasuh — SPBU',
                interactive: true,
                title: '<img src="styles/legend/DesaKaliwinasuhSPBU_9.png" /> Desa Kaliwinasuh — SPBU'
            });
var format_DesaKaliwinasuhTempatMakan_10 = new ol.format.GeoJSON();
var features_DesaKaliwinasuhTempatMakan_10 = format_DesaKaliwinasuhTempatMakan_10.readFeatures(json_DesaKaliwinasuhTempatMakan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKaliwinasuhTempatMakan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKaliwinasuhTempatMakan_10.addFeatures(features_DesaKaliwinasuhTempatMakan_10);
var lyr_DesaKaliwinasuhTempatMakan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKaliwinasuhTempatMakan_10, 
                style: style_DesaKaliwinasuhTempatMakan_10,
                popuplayertitle: 'Desa Kaliwinasuh — Tempat Makan',
                interactive: true,
                title: '<img src="styles/legend/DesaKaliwinasuhTempatMakan_10.png" /> Desa Kaliwinasuh — Tempat Makan'
            });
var format_DesaKaliwinasuhToko_11 = new ol.format.GeoJSON();
var features_DesaKaliwinasuhToko_11 = format_DesaKaliwinasuhToko_11.readFeatures(json_DesaKaliwinasuhToko_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKaliwinasuhToko_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKaliwinasuhToko_11.addFeatures(features_DesaKaliwinasuhToko_11);
var lyr_DesaKaliwinasuhToko_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKaliwinasuhToko_11, 
                style: style_DesaKaliwinasuhToko_11,
                popuplayertitle: 'Desa Kaliwinasuh — Toko',
                interactive: true,
                title: '<img src="styles/legend/DesaKaliwinasuhToko_11.png" /> Desa Kaliwinasuh — Toko'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_DesaKaliwinasuh_1.setVisible(true);lyr_DesaKaliwinasuhSawah_2.setVisible(true);lyr_DesaKaliwinasuhFasilitasKeagamaan_3.setVisible(true);lyr_DesaKaliwinasuhKantor_4.setVisible(true);lyr_DesaKaliwinasuhLapangan_5.setVisible(true);lyr_DesaKaliwinasuhPemakaman_6.setVisible(true);lyr_DesaKaliwinasuhRumahSaya_7.setVisible(true);lyr_DesaKaliwinasuhSekolah_8.setVisible(true);lyr_DesaKaliwinasuhSPBU_9.setVisible(true);lyr_DesaKaliwinasuhTempatMakan_10.setVisible(true);lyr_DesaKaliwinasuhToko_11.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DesaKaliwinasuh_1,lyr_DesaKaliwinasuhSawah_2,lyr_DesaKaliwinasuhFasilitasKeagamaan_3,lyr_DesaKaliwinasuhKantor_4,lyr_DesaKaliwinasuhLapangan_5,lyr_DesaKaliwinasuhPemakaman_6,lyr_DesaKaliwinasuhRumahSaya_7,lyr_DesaKaliwinasuhSekolah_8,lyr_DesaKaliwinasuhSPBU_9,lyr_DesaKaliwinasuhTempatMakan_10,lyr_DesaKaliwinasuhToko_11];
lyr_DesaKaliwinasuh_1.set('fieldAliases', {'id': 'id', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'Kades': 'Kades', 'RT': 'RT', 'RW': 'RW', 'Kode Pos': 'Kode Pos', });
lyr_DesaKaliwinasuhSawah_2.set('fieldAliases', {'id': 'id', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'Dusun': 'Dusun', });
lyr_DesaKaliwinasuhFasilitasKeagamaan_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jenis': 'Jenis', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'Dusun': 'Dusun', });
lyr_DesaKaliwinasuhKantor_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jenis': 'Jenis', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'Dusun': 'Dusun', });
lyr_DesaKaliwinasuhLapangan_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'Dusun': 'Dusun', });
lyr_DesaKaliwinasuhPemakaman_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'Dusun': 'Dusun', });
lyr_DesaKaliwinasuhRumahSaya_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Desa': 'Desa', 'Dusun': 'Dusun', 'RT': 'RT', 'RW': 'RW', 'Pemilik': 'Pemilik', 'Kode Pos': 'Kode Pos', });
lyr_DesaKaliwinasuhSekolah_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'Dusun': 'Dusun', });
lyr_DesaKaliwinasuhSPBU_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'Dusun': 'Dusun', });
lyr_DesaKaliwinasuhTempatMakan_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jenis': 'Jenis', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'Dusun': 'Dusun', });
lyr_DesaKaliwinasuhToko_11.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jenis': 'Jenis', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'Dusun': 'Dusun', });
lyr_DesaKaliwinasuh_1.set('fieldImages', {'id': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa': 'TextEdit', 'Kades': 'TextEdit', 'RT': 'TextEdit', 'RW': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_DesaKaliwinasuhSawah_2.set('fieldImages', {'id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa': 'TextEdit', 'Dusun': 'TextEdit', });
lyr_DesaKaliwinasuhFasilitasKeagamaan_3.set('fieldImages', {'id': '', 'Nama': '', 'Jenis': '', 'Provinsi': '', 'Kabupaten': '', 'Kecamatan': '', 'Desa': '', 'Dusun': '', });
lyr_DesaKaliwinasuhKantor_4.set('fieldImages', {'id': '', 'Nama': '', 'Jenis': '', 'Provinsi': '', 'Kabupaten': '', 'Kecamatan': '', 'Desa': '', 'Dusun': '', });
lyr_DesaKaliwinasuhLapangan_5.set('fieldImages', {'id': '', 'Nama': '', 'Provinsi': '', 'Kabupaten': '', 'Kecamatan': '', 'Desa': '', 'Dusun': '', });
lyr_DesaKaliwinasuhPemakaman_6.set('fieldImages', {'id': '', 'Nama': '', 'Provinsi': '', 'Kabupaten': '', 'Kecamatan': '', 'Desa': '', 'Dusun': '', });
lyr_DesaKaliwinasuhRumahSaya_7.set('fieldImages', {'id': '', 'Nama': '', 'Desa': '', 'Dusun': '', 'RT': '', 'RW': '', 'Pemilik': '', 'Kode Pos': '', });
lyr_DesaKaliwinasuhSekolah_8.set('fieldImages', {'id': '', 'Nama': '', 'Provinsi': '', 'Kabupaten': '', 'Kecamatan': '', 'Desa': '', 'Dusun': '', });
lyr_DesaKaliwinasuhSPBU_9.set('fieldImages', {'id': '', 'Nama': '', 'Provinsi': '', 'Kabupaten': '', 'Kecamatan': '', 'Desa': '', 'Dusun': '', });
lyr_DesaKaliwinasuhTempatMakan_10.set('fieldImages', {'id': '', 'Nama': '', 'Jenis': '', 'Provinsi': '', 'Kabupaten': '', 'Kecamatan': '', 'Desa': '', 'Dusun': '', });
lyr_DesaKaliwinasuhToko_11.set('fieldImages', {'id': '', 'Nama': '', 'Jenis': '', 'Provinsi': '', 'Kabupaten': '', 'Kecamatan': '', 'Desa': '', 'Dusun': '', });
lyr_DesaKaliwinasuh_1.set('fieldLabels', {'id': 'hidden field', 'Provinsi': 'hidden field', 'Kabupaten': 'hidden field', 'Kecamatan': 'hidden field', 'Desa': 'inline label - always visible', 'Kades': 'hidden field', 'RT': 'hidden field', 'RW': 'hidden field', 'Kode Pos': 'hidden field', });
lyr_DesaKaliwinasuhSawah_2.set('fieldLabels', {'id': 'no label', 'Kecamatan': 'no label', 'Desa': 'no label', 'Dusun': 'no label', });
lyr_DesaKaliwinasuhFasilitasKeagamaan_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jenis': 'no label', 'Provinsi': 'no label', 'Kabupaten': 'no label', 'Kecamatan': 'no label', 'Desa': 'no label', 'Dusun': 'no label', });
lyr_DesaKaliwinasuhKantor_4.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jenis': 'no label', 'Provinsi': 'no label', 'Kabupaten': 'no label', 'Kecamatan': 'no label', 'Desa': 'no label', 'Dusun': 'no label', });
lyr_DesaKaliwinasuhLapangan_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Provinsi': 'no label', 'Kabupaten': 'no label', 'Kecamatan': 'no label', 'Desa': 'no label', 'Dusun': 'no label', });
lyr_DesaKaliwinasuhPemakaman_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Provinsi': 'no label', 'Kabupaten': 'no label', 'Kecamatan': 'no label', 'Desa': 'no label', 'Dusun': 'no label', });
lyr_DesaKaliwinasuhRumahSaya_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Desa': 'no label', 'Dusun': 'no label', 'RT': 'no label', 'RW': 'no label', 'Pemilik': 'no label', 'Kode Pos': 'no label', });
lyr_DesaKaliwinasuhSekolah_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Provinsi': 'no label', 'Kabupaten': 'no label', 'Kecamatan': 'no label', 'Desa': 'no label', 'Dusun': 'no label', });
lyr_DesaKaliwinasuhSPBU_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Provinsi': 'no label', 'Kabupaten': 'no label', 'Kecamatan': 'no label', 'Desa': 'no label', 'Dusun': 'no label', });
lyr_DesaKaliwinasuhTempatMakan_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jenis': 'no label', 'Provinsi': 'no label', 'Kabupaten': 'no label', 'Kecamatan': 'no label', 'Desa': 'no label', 'Dusun': 'no label', });
lyr_DesaKaliwinasuhToko_11.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'Jenis': 'no label', 'Provinsi': 'hidden field', 'Kabupaten': 'hidden field', 'Kecamatan': 'hidden field', 'Desa': 'hidden field', 'Dusun': 'hidden field', });
lyr_DesaKaliwinasuhToko_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});