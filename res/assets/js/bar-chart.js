var graph_data=document.getElementById("data_hid").innerHTML
var graph_parsed=JSON.parse(graph_data);

if ($('#ambarchart4').length) {

    color= ["#8918FE","#7474F0","#C5C5FD","#952FFE","#7474F0"]
    data_crop=[]
    function crop_data(farmer){
        for (var k in graph_parsed['yield']) {
            crop_detail={}
            if(k!='total'){
            u='Farmer'+k            
            crop_detail['Farmer']=u
            crop_detail['yield']=graph_parsed['yield'][k]
            crop_detail['color']=color[k%5]
            data_crop.push(crop_detail)
            }
        }
    };
    crop_data()


    var chart = AmCharts.makeChart("ambarchart4", {
        "type": "serial",
        "theme": "light",
        "marginRight": 70,
        "dataProvider": data_crop,
        "valueAxes": [{
            "axisAlpha": 0,
            "position": "left",
            "title": false
        }],
        "startDuration": 1,
        "graphs": [{
            "balloonText": "<b>Yield from [[category]] is [[value]]</b>",
            "fillColorsField": "color",
            "fillAlphas": 0.9,
            "lineAlpha": 0.2,
            "type": "column",
            "valueField": "yield"
        }],
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "Farmer",
        "categoryAxis": {
            "gridPosition": "start",
            "labelRotation": 45
        },
        "export": {
            "enabled": false
        }

    });
}