var graph_data=document.getElementById("data_hid").innerHTML
var graph_parsed=JSON.parse(graph_data);
var topcrops=graph_parsed
var topcrops_sorted=Object.keys(topcrops).sort(function(a,b){
    if(a!='req' | b!='req'){
        return topcrops[b]['total']-topcrops[a]['total']
    }
})



/*--------------  top3 crop chart 1 ------------*/
if ($('#topcrop1').length) {
    data1=[];
    label1=[]
    function top_data1(farmer){
        for (var k in graph_parsed[topcrops_sorted[1]]) {
            if(k!='total'){
            label1.push('Farmer'+k)    
            data1.push((graph_parsed[topcrops_sorted[1]][k]))
            }
        }
    };
    top_data1()
        
    var ctx = document.getElementById("topcrop1").getContext('2d');  
    var chart = new Chart(ctx, {
        
        
        type: 'line',
        data: {
            labels: label1,
            datasets: [{
                label: "Yield",
                backgroundColor: "rgba(117, 19, 246, 0.1)",
                borderColor: '#0b76b6',
                data: data1,
            }]
        },
        options: {
            legend: {
                display: false
            },
            animation: {
                easing: "easeInOutBack"
            },
            scales: {
                yAxes: [{
                    display: !1,
                    ticks: {
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold",
                        beginAtZero: !0,
                        maxTicksLimit: 5,
                        padding: 0
                    },
                    gridLines: {
                        drawTicks: !1,
                        display: !1
                    }
                }],
                xAxes: [{
                    display: !1,
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 0,
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold"
                    }
                }]
            }
        }
    });
}

/*--------------  top3 crop chart 2 start ------------*/
if ($('#topcrop2').length) {

    data2=[];
    label2=[];
    function top_data2(farmer){
        for (var k in graph_parsed[topcrops_sorted[2]]) {
            if(k!='total'){
            label2.push('Farmer'+k)    
            data2.push((graph_parsed[topcrops_sorted[2]][k]))
            }
        }
    };
    top_data2()


    var ctx = document.getElementById("topcrop2").getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: label2,
            datasets: [{
                label: "Yield",
                backgroundColor: "rgba(117, 19, 246, 0.1)",
                borderColor: '#0b76b6',
                data: data2,
            }]
        },
        options: {
            legend: {
                display: false
            },
            animation: {
                easing: "easeInOutBack"
            },
            scales: {
                yAxes: [{
                    display: !1,
                    ticks: {
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold",
                        beginAtZero: !0,
                        maxTicksLimit: 5,
                        padding: 0
                    },
                    gridLines: {
                        drawTicks: !1,
                        display: !1
                    }
                }],
                xAxes: [{
                    display: !1,
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 0,
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold"
                    }
                }]
            }
        }
    });
}

/*--------------  top3 crop chart 3 start ------------*/
if ($('#topcrop3').length) {

    data3=[];
    label3=[];
    function top_data3(farmer){
        for (var k in graph_parsed[topcrops_sorted[3]]) {
            if(k!='total'){
            label3.push(k)
            data3.push((graph_parsed[topcrops_sorted[3]][k]))
            }
        }
    };
    top_data3()



    var ctx = document.getElementById("topcrop3").getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: label3,
            datasets: [{
                label: "Yield",
                backgroundColor: "rgba(117, 19, 246, 0.1)",
                borderColor: '#0b76b6',
                data: data3,
            }]
        },
        options: {
            legend: {
                display: false
            },
            animation: {
                easing: "easeInOutBack"
            },
            scales: {
                yAxes: [{
                    display: !1,
                    ticks: {
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold",
                        beginAtZero: !0,
                        maxTicksLimit: 5,
                        padding: 0
                    },
                    gridLines: {
                        drawTicks: !1,
                        display: !1
                    }
                }],
                xAxes: [{
                    display: !1,
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 0,
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold"
                    }
                }]
            }
        }
    });
}


/*-------------- Dashboard Main chart start ------------*/
if ($('#amlinechart4').length) {
    var chart = AmCharts.makeChart("amlinechart4", {
        "type": "serial",
        "theme": "light",
        "legend": {
            "useGraphSettings": true
        },
        "dataProvider": [{
            "crop": 'Arhar',
            "Required": graph_parsed['req']['arhar_req'],
            "Actual": graph_parsed['arhar']['total']
        }, {
            "crop": 'Banana',
            "Required": graph_parsed['req']['banana_req'],
            "Actual": graph_parsed['banana']['total']
        }, {
            "crop": 'Cauliflower',
            "Required": graph_parsed['req']['cauliflower_req'],
            "Actual": graph_parsed['cauliflower']['total']
        }, {
            "crop": 'Eggplant',
            "Required": graph_parsed['req']['eggplant_req'],
            "Actual": graph_parsed['eggplant']['total']
        }, {
            "crop": 'Gram',
            "Required": graph_parsed['req']['gram_req'],
            "Actual": graph_parsed['gram']['total']
        }, {
            "crop": 'Guava',
            "Required": graph_parsed['req']['guava_req'],
            "Actual": graph_parsed['guava']['total']
        }, {
            "crop": 'Jute',
            "Required": graph_parsed['req']['jute_req'],
            "Actual": graph_parsed['jute']['total']
        }, {
            "crop": 'Lentils',
            "Required": graph_parsed['req']['lentils_req'],
            "Actual": graph_parsed['lentils']['total']
        }, {
            "crop": 'Lychee',
            "Required": graph_parsed['req']['lychee_req'],
            "Actual": graph_parsed['lychee']['total']
        }, {
            "crop": 'Maize',
            "Required": graph_parsed['req']['maize_req'],
            "Actual": graph_parsed['maize']['total']
        }, {
            "crop": 'Mango',
            "Required": graph_parsed['req']['mango_req'],
            "Actual": graph_parsed['mango']['total']
        }, {
            "crop": 'Moong',
            "Required": graph_parsed['req']['moong_req'],
            "Actual": graph_parsed['moong']['total']
        }, {
            "crop": 'Onion',
            "Required": graph_parsed['req']['onion_req'],
            "Actual": graph_parsed['onion']['total']
        }, {
            "crop": 'Peas',
            "Required": graph_parsed['req']['peas_req'],
            "Actual": graph_parsed['peas']['total']
        }, {
            "crop": 'Pineapple',
            "Required": graph_parsed['req']['pineapple_req'],
            "Actual": graph_parsed['pineapple']['total']
        }, {
            "crop": 'Potato',
            "Required": graph_parsed['req']['potato_req'],
            "Actual": graph_parsed['potato']['total']
        }, {
            "crop": 'Rice',
            "Required": graph_parsed['req']['rice_req'],
            "Actual": graph_parsed['rice']['total']
        }, {
            "crop": 'Sugarcane',
            "Required": graph_parsed['req']['sugarcane_req'],
            "Actual": graph_parsed['sugarcane']['total']
        }, {
            "crop": 'Urad',
            "Required": graph_parsed['req']['urad_req'],
            "Actual": graph_parsed['urad']['total']
        }, {
            "crop": 'Wheat',
            "Required": graph_parsed['req']['wheat_req'],
            "Actual": graph_parsed['wheat']['total']
        }],
        "startDuration": 0.5,
        "graphs": [{
            "balloonText": "Required Yield of [[category]] is [[value]]",
            "bullet": "round",
            "title": "Required Yield (in Mg/ha)",
            "valueField": "Required",
            "fillAlphas": 0,
            "lineColor": "#9656e7",
            "type": "smoothedLine",
            "lineThickness": 2,
            "negativeLineColor": "#c69cfd"
        }, {
            "balloonText": "Actual Yield of [[category]] is [[value]]",
            "bullet": "round",
            "title": "Actual Yield (in Mg/ha)",
            "valueField": "Actual",
            "fillAlphas": 0,
            "lineColor": "#31aeef",
            "type": "smoothedLine",
            "lineThickness": 2,
            "negativeLineColor": "#31aeef",
        }],
        "chartCursor": {
            "cursorAlpha": 5,
            "zoomable": true
        },
        "categoryField": "crop",
        "categoryAxis": {
            
            'labelRotation':45,
            "gridPosition": "start",
            "axisAlpha": 0,
            "fillAlpha": 0.05,
            "fillColor": "#000000",
            "gridAlpha": 0,
            "position": "top"
        },
        "export": {
            "enabled": false
        }
    });
}


/*-------------- individual crop chart start ------------*/
if ($('#amlinechart5').length) {

    data_crop=[]
    function crop_data(farmer){
        for (var k in graph_parsed['yield']) {
            crop_detail={}
            if(k!='total'){
            u='Farmer'+k            
            crop_detail['Farmer']=u
            crop_detail['yield']=graph_parsed['yield'][k]
            data_crop.push(crop_detail)
            }
        }
    };
    crop_data()
    

    var chart = AmCharts.makeChart("amlinechart5", {
        "type": "serial",
        "theme": "light",
        "marginRight": 20,
        "marginTop": 17,
        "autoMarginOffset": 20,
        "dataProvider": data_crop,
        "valueAxes": [{
            "logarithmic": false,
            "dashLength": 1,
            "guides": [{
                "dashLength": 6,
                "inside": true,
                "label": "average",
                "lineAlpha": 1,
                "value": graph_parsed['req']/3
            }],
            "position": "left"
        }],
        "graphs": [{
            "bullet": "round",
            "id": "g1",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 7,
            "lineThickness": 2,
            "title": "yield",
            "type": "smoothedLine",
            "useLineColorForBulletBorder": true,
            "valueField": "yield"
        }],
        "chartCursor": {
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "valueLineAlpha": 0.5,
            "fullWidth": true,
            "cursorAlpha": 0.05
        },
        "categoryField": "Farmer",
        
        "export": {
            "enabled": false
        }
    });
}