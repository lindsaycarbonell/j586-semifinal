$(function () {
var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'container',
                           type: 'column'
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0]
    }]
});

$(".test").change(function() {
               var value = this.getAttribute("value");

               if (value == 'a')
               {
                   chart.series[0].setData([100, 200, 300, 400, 100, 200]);
                   chart.yAxis[0].setTitle({ text: "kHw" });
        chart.series[0].remove();
        chart.addSeries({

        name: 'Rainfall',
        type: 'column',
        color: '#08F',
       data: [194.1, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4]
        });
              }

               else if (value == 'b')
                {
                    chart.series[0].setData([100, 500, 300, 100, 100, 200]);
                    chart.yAxis[0].setTitle({ text: "Raw" });
             chart.series[0].remove();
        chart.addSeries({

        name: 'Rainfall2',
        type: 'column',
        color: '#08F',
       data: [194.1, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4]
        });   }

               else if (value == 'c')
                {  chart.series[0].remove();
        chart.addSeries({

        name: 'Rainfall3',
        type: 'column',
        color: '#08F',
       data: [194.1, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4]
        });
                   chart.series[0].setData([100, 300, 400, 200, 200, 100]);
               }

                else {
                   alert("Error!");
    }
});
});
