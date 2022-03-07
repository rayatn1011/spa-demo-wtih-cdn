import sourceLayers from './sourceLayers.js'

export default () => {
    // #1 初始化gis，並綁定Dom
    let gis = new ol.Map({
        controls: [],
        target: 'gis',
    });

    // #2 引入gis圖層列表
    let layers = Object.keys(sourceLayers).map((layer) => sourceLayers[layer]);
    let baseLayerGroup = new ol.layer.Group({
        layers: layers
    })
    // #3 將gis綁定圖層
    gis.addLayer(baseLayerGroup);
    // #4 設定初始視角
    let view = new ol.View({
        center: ol.proj.fromLonLat([120.58, 23.58]),
        zoom: 8,
        minZoom: 8,
        maxZoom: 18,
        extent: [
            12835867.822622772, 2415826.177367424,
            14009940.577083081, 2988798.141393105
        ]
    });
    // #5 將gis綁定初始視角
    gis.setView(view);
    // #6 增加控件
    gis.addControl(
        new ol.control.Zoom({
            target: "gisRightControler",
            className: "zoom"
        })
    );
    gis.addControl(
        new ol.control.ScaleLine({
            target: "scaleLine"
        })
    );
    gis.addControl(
        new ol.control.MousePosition({
            target: "mousePositionWGS84",
            className: 'positionWGS84',
            coordinateFormat: (coordinate) => ol.coordinate.format(coordinate, '{x}, {y}', 6),
            projection: 'EPSG:4326',
            placeholder: false,
        })
    );
    let mousePositionTWD97 = new ol.control.MousePosition({
        target: "mousePositionTWD97",
        className: 'positionTWD97',
        coordinateFormat: (coordinate) => ol.coordinate.format(coordinate, '{x}, {y}(121)', 2),
        projection: 'EPSG:3826',
        placeholder: false,
    });
    gis.addControl(mousePositionTWD97);
    gis.on('pointermove', function (e) {
        let mousePositionWGS84 = new ol.proj.transform(e.coordinate, 'EPSG:3857', 'EPSG:4326');
        if (mousePositionWGS84[0] >= 120) {
            mousePositionTWD97.setCoordinateFormat((coordinate) => ol.coordinate.format(coordinate, '{x}, {y}(121)', 2))
            mousePositionTWD97.setProjection('EPSG:3826');

        } else {
            mousePositionTWD97.setCoordinateFormat((coordinate) => ol.coordinate.format(coordinate, '{x}, {y}(119)', 2))
            mousePositionTWD97.setProjection('EPSG:3825');
        }
    })
    // console.log(gis.getView().calculateExtent(gis.getSize()))
    return gis
}