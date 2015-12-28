$(function () {

'use strict';

//Make the dashboard widgets sortable Using jquery UI
$(".connectedSortable").sortable({
placeholder: "sort-highlight",
connectWith: ".connectedSortable",
handle: ".box-header, .nav-tabs",
forcePlaceholderSize: true,
zIndex: 999999
});
$(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");

//bootstrap WYSIHTML5 - text editor
$(".textarea").wysihtml5();

//Date Picker
$('.daterange').daterangepicker({
ranges: {
'Today': [moment(), moment()],
'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
'Last 7 Days': [moment().subtract(6, 'days'), moment()],
'Last 30 Days': [moment().subtract(29, 'days'), moment()],
'This Month': [moment().startOf('month'), moment().endOf('month')],
'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
},
startDate: moment().subtract(29, 'days'),
endDate: moment()
}, function (start, end) {
window.alert("You chose: " + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
});

/* jQueryKnob */
$(".knob").knob();

//jvectormap data
var visitorsData = {
"US": 398, //USA
"SA": 400, //Saudi Arabia
"CA": 1000, //Canada
"DE": 500, //Germany
"FR": 760, //France
"CN": 300, //China
"AU": 700, //Australia
"BR": 600, //Brazil
"IN": 800, //India
"GB": 320, //Great Britain
"RU": 3000 //Russia
};
//World map by jvectormap
$('#world-map').vectorMap({
map: 'world_mill_en',
backgroundColor: "transparent",
regionStyle: {
initial: {
fill: '#e4e4e4',
"fill-opacity": 1,
stroke: 'none',
"stroke-width": 0,
"stroke-opacity": 1
}
},
series: {
regions: [{
values: visitorsData,
scale: ["#92c1dc", "#ebf4f9"],
normalizeFunction: 'polynomial'
}]
},
onRegionLabelShow: function (e, el, code) {
if (typeof visitorsData[code] != "undefined")
el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
}
});

//The Calender
$("#calendar").datepicker();

/* ChartJS
* -------
* Here we will create a few charts using ChartJS
*/

//-----------------------
//- MONTHLY SALES CHART -
//-----------------------

var salesChartData = {
labels: ["January", "February", "March", "April", "May", "June", "July"],
datasets: [
{
label: "Devices",
fillColor: "rgb(210, 214, 222)",
strokeColor: "rgb(210, 214, 222)",
pointColor: "rgb(210, 214, 222)",
pointStrokeColor: "#c1c7d1",
pointHighlightFill: "#fff",
pointHighlightStroke: "rgb(220,220,220)",
data: [65, 90, 120, 60, 250, 70, 300]
},
{
label: "Users",
fillColor: "rgba(60,141,188,0.9)",
strokeColor: "rgba(60,141,188,0.8)",
pointColor: "#3b8bba",
pointStrokeColor: "rgba(60,141,188,1)",
pointHighlightFill: "#fff",
pointHighlightStroke: "rgba(60,141,188,1)",
data: [28, 48, 40, 19, 86, 27, 90]
}
]
};
    
var lineChartOptions = {
//Boolean - If we should show the scale at all
showScale: true,
//Boolean - Whether grid lines are shown across the chart
scaleShowGridLines: false,
//String - Colour of the grid lines
scaleGridLineColor: "rgba(0,0,0,.05)",
//Number - Width of the grid lines
scaleGridLineWidth: 1,
//Boolean - Whether to show horizontal lines (except X axis)
scaleShowHorizontalLines: true,
//Boolean - Whether to show vertical lines (except Y axis)
scaleShowVerticalLines: true,
//Boolean - Whether the line is curved between points
bezierCurve: true,
//Number - Tension of the bezier curve between points
bezierCurveTension: 0.3,
//Boolean - Whether to show a dot for each point
pointDot: false,
//Number - Radius of each point dot in pixels
pointDotRadius: 4,
//Number - Pixel width of point dot stroke
pointDotStrokeWidth: 1,
//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
pointHitDetectionRadius: 20,
//Boolean - Whether to show a stroke for datasets
datasetStroke: true,
//Number - Pixel width of dataset stroke
datasetStrokeWidth: 2,
//Boolean - Whether to fill the dataset with a color
datasetFill: true,
//String - A legend template
legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",
//Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
maintainAspectRatio: true,
//Boolean - whether to make the chart responsive to window resizing
responsive: true,
//String - Show label
multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>",
};


//---------------------------
//- END MONTHLY SALES CHART -
//---------------------------
    
    
    
    
    
    //-----------------------
    //- MONTHLY SALES CHART -
    //-----------------------


    var nUserChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Devices",
                fillColor: "rgb(210, 214, 222)",
                strokeColor: "rgb(210, 214, 222)",
                pointColor: "rgb(210, 214, 222)",
                pointStrokeColor: "#c1c7d1",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgb(220,220,220)",
                data: [65, 90, 120, 60, 250, 90, 500]
            },
            {
                label: "Users",
                fillColor: "rgba(60,141,188,0.9)",
                strokeColor: "rgba(60,141,188,0.8)",
                pointColor: "#3b8bba",
                pointStrokeColor: "rgba(60,141,188,1)",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(60,141,188,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    var ctx1 = $("#myChart1").get(0).getContext("2d");
    var myLineChart1 = new Chart(ctx1).Line(salesChartData, lineChartOptions);

    var ctx2 = $("#myChart2").get(0).getContext("2d");
    var myLineChart2;

    $('#tab1').on('shown.bs.tab', function (e) {
        myLineChart2.destroy();
        myLineChart1 = new Chart(ctx1).Line(salesChartData, lineChartOptions);
    });

    $('#tab2').on('shown.bs.tab', function (e) {
        myLineChart1.destroy();
        myLineChart2 = new Chart(ctx2).Line(nUserChartData, lineChartOptions);
    });

    
//-------------
//- PIE CHART -
//-------------
// Get context with jQuery - using jQuery's .get() method.
var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
var pieChart = new Chart(pieChartCanvas);
var PieData = [
{
value: 700,
color: "#f56954",
highlight: "#f56954",
label: "Picture"
},
{
value: 500,
color: "#00a65a",
highlight: "#00a65a",
label: "Video"
},
{
value: 400,
color: "#f39c12",
highlight: "#f39c12",
label: "Microsoft docs"
},
{
value: 600,
color: "#00c0ef",
highlight: "#00c0ef",
label: "Music"
},
{
value: 300,
color: "#3c8dbc",
highlight: "#3c8dbc",
label: "PDF"
},
{
value: 100,
color: "#d2d6de",
highlight: "#d2d6de",
label: "Navigator"
}
];
var pieOptions = {
//Boolean - Whether we should show a stroke on each segment
segmentShowStroke: true,
//String - The colour of each segment stroke
segmentStrokeColor: "#fff",
//Number - The width of each segment stroke
segmentStrokeWidth: 1,
//Number - The percentage of the chart that we cut out of the middle
percentageInnerCutout: 50, // This is 0 for Pie charts
//Number - Amount of animation steps
animationSteps: 100,
//String - Animation easing effect
animationEasing: "easeOutBounce",
//Boolean - Whether we animate the rotation of the Doughnut
animateRotate: true,
//Boolean - Whether we animate scaling the Doughnut from the centre
animateScale: false,
//Boolean - whether to make the chart responsive to window resizing
responsive: true,
// Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
maintainAspectRatio: false,
//String - A legend template
legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
//String - A tooltip template
tooltipTemplate: "<%=value %> MB <%=label%> Sent"
};
//Create pie or douhnut chart
// You can switch between pie and douhnut using the method below.
pieChart.Doughnut(PieData, pieOptions);
//-----------------
//- END PIE CHART -
//-----------------

/* jVector Maps
* ------------
* Create a world map with markers
*/
$('#world-map-markers').vectorMap({
map: 'world_mill_en',
normalizeFunction: 'polynomial',
hoverOpacity: 0.7,
hoverColor: false,
backgroundColor: 'transparent',
regionStyle: {
initial: {
fill: 'rgba(210, 214, 222, 1)',
"fill-opacity": 1,
stroke: 'none',
"stroke-width": 0,
"stroke-opacity": 1
},
hover: {
"fill-opacity": 0.7,
cursor: 'pointer'
},
selected: {
fill: 'yellow'
},
selectedHover: {
}
},
markerStyle: {
initial: {
fill: '#00a65a',
stroke: '#111'
}
},
markers: [
{latLng: [41.90, 12.45], name: 'Vatican City'},
{latLng: [43.73, 7.41], name: 'Monaco'},
{latLng: [-0.52, 166.93], name: 'Nauru'},
{latLng: [-8.51, 179.21], name: 'Tuvalu'},
{latLng: [43.93, 12.46], name: 'San Marino'},
{latLng: [47.14, 9.52], name: 'Liechtenstein'},
{latLng: [7.11, 171.06], name: 'Marshall Islands'},
{latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
{latLng: [3.2, 73.22], name: 'Maldives'},
{latLng: [35.88, 14.5], name: 'Malta'},
{latLng: [12.05, -61.75], name: 'Grenada'},
{latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
{latLng: [13.16, -59.55], name: 'Barbados'},
{latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
{latLng: [-4.61, 55.45], name: 'Seychelles'},
{latLng: [7.35, 134.46], name: 'Palau'},
{latLng: [42.5, 1.51], name: 'Andorra'},
{latLng: [14.01, -60.98], name: 'Saint Lucia'},
{latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
{latLng: [1.3, 103.8], name: 'Singapore'},
{latLng: [1.46, 173.03], name: 'Kiribati'},
{latLng: [-21.13, -175.2], name: 'Tonga'},
{latLng: [15.3, -61.38], name: 'Dominica'},
{latLng: [-20.2, 57.5], name: 'Mauritius'},
{latLng: [26.02, 50.55], name: 'Bahrain'},
{latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
]
});



//Fix for charts under tabs
$('.box ul.nav a').on('shown.bs.tab', function () {
area.redraw();
donut.redraw();
line.redraw();
});
});
