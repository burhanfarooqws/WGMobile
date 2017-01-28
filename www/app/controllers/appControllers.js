/*!
 *
 * This file contains the application controllers.
 *
 * @project   VeriBranch
 * @date      08-10-2015
 * @author    VeriPark
 * @licensor  VeriPark Gulf
 * @site      www.veripark.com
 *
 */

'use strict';

/* to load the jquery plugins inside the controller */

/* to initiate the jquery canvas chart */
function vbCanvasChart() {
    var chart = new CanvasJS.Chart("chartContainer", {
        //theme: "theme2",
        animationEnabled: true,
        axisX: {
            valueFormatString: "MMM",
            interval: 1,
            intervalType: "month",
        },
        axisY: {
            includeZero: false
        },
        data: [{
            type: "line",
            //lineThickness: 3,        
            dataPoints: [{
                    x: new Date(2015, 0, 1),
                    y: 450
                }, {
                    x: new Date(2015, 1, 1),
                    y: 464
                }, {
                    x: new Date(2015, 2, 1),
                    y: 580,
                    indexLabel: "highest",
                    markerColor: "red",
                    markerType: "triangle"
                }, {
                    x: new Date(2015, 3, 1),
                    y: 460
                }, {
                    x: new Date(2015, 4, 1),
                    y: 450
                }, {
                    x: new Date(2015, 5, 1),
                    y: 500
                }, {
                    x: new Date(2015, 6, 1),
                    y: 490
                }, {
                    x: new Date(2015, 7, 1),
                    y: 480
                }, {
                    x: new Date(2015, 8, 1),
                    y: 430,
                    indexLabel: "lowest",
                    markerColor: "DarkSlateGrey",
                    markerType: "cross"
                }, {
                    x: new Date(2015, 9, 1),
                    y: 500
                }, {
                    x: new Date(2015, 10, 1),
                    y: 480
                }, {
                    x: new Date(2015, 11, 1),
                    y: 510
                }

            ]
        }]
    });
    chart.render();
}

function vbBarChart() {
    var chart = new CanvasJS.Chart("vbBarChartContainer", {
        theme: "theme1",
        animationEnabled: true,
        title: {
            text: "November 2015",
            fontSize: 18,
        },
        axisY: {
            lineThickness: 1,
        },
        data: [{
            // Change type to "bar", "area", "spline", "pie",etc.
            type: "column",
            dataPoints: [{
                label: "House Rent",
                y: 22
            }, {
                label: "Utilities",
                y: 12
            }, {
                label: "Food",
                y: 7
            }, {
                label: "Education",
                y: 10
            }, {
                label: "Medical",
                y: 9
            }, {
                label: "Shopping",
                y: 10
            }]
        }]
    });
    chart.render();
}

/* Initiate the datatable */
function vbDataTable() {
    $('.vbDataGrid').dataTable({
        'bPaginate': true,
        'bLengthChange': true,
        'iDisplayLength': 10,
        'bFilter': true,
        'bSort': true,
        'bInfo': true,
        'bAutoWidth': true,
        'retrieve': true,
        'processing': true,
        'responsive': true
    });
}

function vbDateTimePicker() {
    $('.vb-dtp').datetimepicker({
        format: 'DD/MM/YYYY'
    }); 
    $('.vb-dtp').on('click touchstart', function(){
        $(this).trigger('input');
    });

    $('.vb-dtp-inline').datetimepicker({
        inline: true,
        format: 'TL'
    });
}

/* Initiate the jquery range slider */
function vbRangeSlider() {
    $('.vb-range-slider').jRange({
        from: 0,
        to: 100,
        step: 1,
        scale: ['0 D', '1 M', '3 M', '6 M', '1 Y'],
        format: '%s',
        width: '100%',
        showLabels: true
    });
}

/* Initiate the jquery knob */
function vbKnob() {
    $('.vb-knob').knob({
        'change': function(v) {
            console.log(v);
        },
        draw: function() {
            $(this.i).val(this.cv + '%');
        }
    });
}