var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Polosdecrecimiento_1 = new ol.format.GeoJSON();
var features_Polosdecrecimiento_1 = format_Polosdecrecimiento_1.readFeatures(json_Polosdecrecimiento_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polosdecrecimiento_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polosdecrecimiento_1.addFeatures(features_Polosdecrecimiento_1);
var lyr_Polosdecrecimiento_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polosdecrecimiento_1, 
                style: style_Polosdecrecimiento_1,
                popuplayertitle: 'Polos de crecimiento',
                interactive: true,
    title: 'Polos de crecimiento<br />\
    <img src="styles/legend/Polosdecrecimiento_1_0.png" /> A<br />\
    <img src="styles/legend/Polosdecrecimiento_1_1.png" /> B<br />\
    <img src="styles/legend/Polosdecrecimiento_1_2.png" /> C<br />' });
var format_CrecimientopotencialISC_2 = new ol.format.GeoJSON();
var features_CrecimientopotencialISC_2 = format_CrecimientopotencialISC_2.readFeatures(json_CrecimientopotencialISC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CrecimientopotencialISC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CrecimientopotencialISC_2.addFeatures(features_CrecimientopotencialISC_2);
var lyr_CrecimientopotencialISC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CrecimientopotencialISC_2, 
                style: style_CrecimientopotencialISC_2,
                popuplayertitle: 'Crecimiento potencial - ISC',
                interactive: true,
                title: '<img src="styles/legend/CrecimientopotencialISC_2.png" /> Crecimiento potencial - ISC'
            });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_Polosdecrecimiento_1.setVisible(true);lyr_CrecimientopotencialISC_2.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_Polosdecrecimiento_1,lyr_CrecimientopotencialISC_2];
lyr_Polosdecrecimiento_1.set('fieldAliases', {'Polo': 'Polo', 'Clase': 'Clase', 'Limitante_': 'Limitante_', 'Limitante__1': 'Limitante__1', 'Capa': 'Capa', 'Ubicacion': 'Ubicacion', });
lyr_CrecimientopotencialISC_2.set('fieldAliases', {'ID': 'ID', 'Nombre': 'Nombre', 'Clase': 'Clase', 'Superficie': 'Superficie', });
lyr_Polosdecrecimiento_1.set('fieldImages', {'Polo': 'TextEdit', 'Clase': 'TextEdit', 'Limitante_': '', 'Limitante__1': '', 'Capa': 'TextEdit', 'Ubicacion': 'TextEdit', });
lyr_CrecimientopotencialISC_2.set('fieldImages', {'ID': 'Range', 'Nombre': 'TextEdit', 'Clase': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_Polosdecrecimiento_1.set('fieldLabels', {'Polo': 'inline label - always visible', 'Clase': 'inline label - always visible', 'Limitante_': 'no label', 'Limitante__1': 'no label', 'Capa': 'hidden field', 'Ubicacion': 'hidden field', });
lyr_CrecimientopotencialISC_2.set('fieldLabels', {'ID': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Clase': 'inline label - always visible', 'Superficie': 'inline label - always visible', });
lyr_CrecimientopotencialISC_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});