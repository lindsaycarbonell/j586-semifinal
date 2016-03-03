$('#dark-money').hide();
$('#super-pac').hide();
$('#no-graph').hide();

//those clicks
$('#target-click-1').click(function() {
  $('#dark-money').hide();
});
$('#dark-money-link').click(function() {
  $('#dark-money').show();
});

$('#target-click-2').click(function(){
  $('#super-pac').hide();
});
$('#super-pac-link').click(function(){
  $('#super-pac').show();
});

var chart = new Highcharts.Chart({
  chart: {
      renderTo: "no-graph",
      type:"column"
  },
  yAxis: {
      labels: {
          formatter: function() {
              return this.value +' km';
          }
      }
  },
  series: [{
      data: []
  }]
});


$(document).ready(function(){
  $('#tabular').dataTable({
        "ajax": "totals20.json",
        responsive:true
        // "scrollY": "200px",
        // "dom": "frtiS",
        // "deferRender": true

    });
});

function hideSome(){
  $('#main-graph').show();
  $('#rep-name').empty();
  $('#descr-district').empty();
  $('#descr-party').empty();
  $('#rep-pic').empty();


};

/*epic if/else to switch through charts*/

  function switchFun(name){

    console.log(arr_legislators.length);

    for(var i; arr_legislators.length; i++){
      console.log(arr_legislators[i]);
    }

      console.log("sent to switch: " + name);

      //console.log("switch function starts");
      //var lastName = this.getAttribute("value");
      //console.log("last name: " + lastName);


}

function nope(){

      //ADAMS
      if(lastName == 'adams'){

        hideSome();



        $('#rep-name').append('<p class="rep-name">Alma Adams</p>');
        $('#descr-district').append('<p class="descr-district"><span class="subber">District: </span> 12</p>');
        $('#descr-party').append('<p class="democrat"><span class="subber">Party: </span>Democrat</p>');
        $('#rep-pic').append('<div class="picwid adams-pic"></div>');

        console.log("Adams chart");

        chart = new Highcharts.Chart({
          chart: {
            renderTo: 'main-graph',
            type: 'column'
          },
          series: [{
            data: totalsAdams,
            name: 'Total donations'
          }],
          legend:{
            enabled:false
          },
          title: {
            text: 'Campaign Donations, 2013'
          },
          xAxis: {
            categories: organizationAdams
          },
          yAxis: {
            title: {
                text: 'Donations ($)'
            }
          }

        }); //end chart

      } //end adams

      //BUTTERFIELD
      else if(lastName == 'butterfield'){
        //console.log("Butterfield chart");

        hideSome();

        $('#rep-name').append('<p class="rep-name">G.K. Butterfield</p>');
        $('#descr-district').append('<p class="descr-district"><span class="subber">District: </span> 1</p>');
        $('#descr-party').append('<p class="democrat"><span class="subber">Party: </span>Democrat</p>');
        $('#rep-pic').append('<div class="picwid butterfield-pic"></div>');

        chart = new Highcharts.Chart({
          chart: {
            renderTo: 'main-graph',
            type: 'column'
          },
          series: [{
            data: totalsButterfield,
            name: 'Total donations'
          }],
          legend:{
            enabled:false
          },
          title: {
            text: 'Campaign Donations, 2013'
          },
          xAxis: {
            categories: organizationButterfield
          },
          yAxis: {
            title: {
                text: 'Donations ($)'
            }
          }

        }); //end chart

        console.log("Orgs after else if butterfield: " + organizationButterfield);
      } //end butterfield

      //ELLMERS
      else if(lastName == 'ellmers'){
        //console.log("Ellmers chart");
        hideSome();

        $('#rep-name').append('<p class="rep-name">Renee Ellmers</p>');
        $('#descr-district').append('<p class="descr-district"><span class="subber">District: </span> 2</p>');
        $('#descr-party').append('<p class="republican"><span class="subber">Party: </span>Republican</p>');
        $('#rep-pic').append('<div class="picwid ellmers-pic"></div>');

        chart = new Highcharts.Chart({
          chart: {
            renderTo: 'main-graph',
            type: 'column'
          },
          series: [{
            data: totalsEllmers,
            name: 'Total donations'
          }],
          legend:{
            enabled:false
          },
          title: {
            text: 'Campaign Donations, 2013'
          },
          xAxis: {
            categories: organizationEllmers
          },
          yAxis: {
            title: {
                text: 'Donations ($)'
            }
          }

        }); //end chart

        console.log("Orgs after else if ellmers: " + organizationEllmers);
      } //end ellmers


      //FOXX
      else if(lastName == 'foxx'){
        //console.log("Foxx chart");
        hideSome();

        $('#rep-name').append('<p class="rep-name">Virginia Foxx</p>');
        $('#descr-district').append('<p class="descr-district"><span class="subber">District: </span> 5</p>');
        $('#descr-party').append('<p class="republican"><span class="subber">Party: </span>Republican</p>');
        $('#rep-pic').append('<div class="picwid foxx-pic"></div>');

        chart = new Highcharts.Chart({
          chart: {
            renderTo: 'main-graph',
            type: 'column'
          },
          series: [{
            data: totalsFoxx,
            name: 'Total donations'
          }],
          legend:{
            enabled:false
          },
          title: {
            text: 'Campaign Donations, 2013'
          },
          xAxis: {
            categories: organizationFoxx
          },
          yAxis: {
            title: {
                text: 'Donations ($)'
            }
          }

        }); //end chart

        console.log("Orgs after else if foxx: " + organizationFoxx);
      } //end foxx

      //HOLDING
      else if(lastName == 'holding'){
        //console.log("Holding chart");

        hideSome();

        $('#rep-name').append('<p class="rep-name">George Holding</p>');
        $('#descr-district').append('<p class="descr-district"><span class="subber">District: </span> 13</p>');
        $('#descr-party').append('<p class="republican"><span class="subber">Party: </span>Republican</p>');
        $('#rep-pic').append('<div class="picwid holding-pic"></div>');

        chart = new Highcharts.Chart({
          chart: {
            renderTo: 'main-graph',
            type: 'column'
          },
          series: [{
            data: totalsHolding,
            name: 'Total donations'
          }],
          legend:{
            enabled:false
          },
          title: {
            text: 'Campaign Donations, 2013'
          },
          xAxis: {
            categories: organizationHolding
          },
          yAxis: {
            title: {
                text: 'Donations ($)'
            }
          }

        }); //end chart

        console.log("Orgs after else if holding: " + organizationHolding);
      } //end holding

      //HUDSON
      else if(lastName == 'hudson'){
        //console.log("Hudson chart");

        hideSome();

        $('#rep-name').append('<p class="rep-name">Richard Hudson</p>');
        $('#descr-district').append('<p class="descr-district"><span class="subber">District: </span> 8</p>');
        $('#descr-party').append('<p class="republican"><span class="subber">Party: </span>Republican</p>');
        $('#rep-pic').append('<div class="picwid hudson-pic"></div>');

        chart = new Highcharts.Chart({
          chart: {
            renderTo: 'main-graph',
            type: 'column'
          },
          series: [{
            data: totalsHudson,
            name: 'Total donations'
          }],
          legend:{
            enabled:false
          },
          title: {
            text: 'Campaign Donations, 2013'
          },
          xAxis: {
            categories: organizationHudson
          },
          yAxis: {
            title: {
                text: 'Donations ($)'
            }
          }

        }); //end chart

        console.log("Orgs after else if hudson: " + organizationHudson);
      } //end hudson

      //JONES
      else if(lastName == 'jones'){
        //console.log("Jones chart");

        hideSome();

        $('#rep-name').append('<p class="rep-name">Walter Jones, Jr.</p>');
        $('#descr-district').append('<p class="descr-district"><span class="subber">District: </span> 3</p>');
        $('#descr-party').append('<p class="republican"><span class="subber">Party: </span>Republican</p>');
        $('#rep-pic').append('<div class="picwid jones-pic"></div>');

        chart = new Highcharts.Chart({
          chart: {
            renderTo: 'main-graph',
            type: 'column'
          },
          series: [{
            data: totalsJones,
            name: 'Total donations'
          }],
          legend:{
            enabled:false
          },
          title: {
            text: 'Campaign Donations, 2013'
          },
          xAxis: {
            categories: organizationJones
          },
          yAxis: {
            title: {
                text: 'Donations ($)'
            }
          }

        }); //end chart

        console.log("Orgs after else if jones: " + organizationJones);
      } //end jones

      //MCHENRY
      else if(lastName == 'mchenry'){
        //console.log("Mchenry chart");
        hideSome();

        $('#rep-name').append('<p class="rep-name">Patrick McHenry</p>');
        $('#descr-district').append('<p class="descr-district"><span class="subber">District: </span> 10</p>');
        $('#descr-party').append('<p class="republican"><span class="subber">Party: </span>Republican</p>');
        $('#rep-pic').append('<div class="picwid mchenry-pic"></div>');

        chart = new Highcharts.Chart({
          chart: {
            renderTo: 'main-graph',
            type: 'column'
          },
          series: [{
            data: totalsMchenry,
            name: 'Total donations'
          }],
          legend:{
            enabled:false
          },
          title: {
            text: 'Campaign Donations, 2013'
          },
          xAxis: {
            categories: organizationMchenry
          },
          yAxis: {
            title: {
                text: 'Donations ($)'
            }
          }

        }); //end chart

        console.log("Orgs after else if mchenry: " + organizationMchenry);
      } //end mchenry

      //MEADOWS
      else if(lastName == 'meadows'){
        //console.log("Meadows chart");

        hideSome();

        $('#rep-name').append('<p class="rep-name">Mark Meadows</p>');
        $('#descr-district').append('<p class="descr-district"><span class="subber">District: </span> 11</p>');
        $('#descr-party').append('<p class="republican"><span class="subber">Party: </span>Republican</p>');
        $('#rep-pic').append('<div class="picwid meadows-pic"></div>');

        chart = new Highcharts.Chart({
          chart: {
            renderTo: 'main-graph',
            type: 'column'
          },
          series: [{
            data: totalsMeadows,
            name: 'Total donations'
          }],
          legend:{
            enabled:false
          },
          title: {
            text: 'Campaign Donations, 2013'
          },
          xAxis: {
            categories: organizationMeadows
          },
          yAxis: {
            title: {
                text: 'Donations ($)'
            }
          }

        }); //end chart

        console.log("Orgs after else if meadows: " + organizationMeadows);
      } //end meadows

      //PITTENGER
      else if(lastName == 'pittenger'){
        //console.log("Pittenger chart");
        hideSome();

        $('#rep-name').append('<p class="rep-name">Robert Pittenger</p>');
        $('#descr-district').append('<p class="descr-district"><span class="subber">District: </span> 9</p>');
        $('#descr-party').append('<p class="republican"><span class="subber">Party: </span>Republican</p>');
        $('#rep-pic').append('<div class="picwid pittenger-pic"></div>');

        chart = new Highcharts.Chart({
          chart: {
            renderTo: 'main-graph',
            type: 'column'
          },
          series: [{
            data: totalsPittenger,
            name: 'Total donations'
          }],
          legend:{
            enabled:false
          },
          title: {
            text: 'Campaign Donations, 2013'
          },
          xAxis: {
            categories: organizationPittenger
          },
          yAxis: {
            title: {
                text: 'Donations ($)'
            }
          }

        }); //end chart

        console.log("Orgs after else if pittenger: " + organizationPittenger);
      } //end pittenger

      //PRICE
      else if(lastName == 'price'){
        //console.log("Price chart");
        hideSome();

        $('#rep-name').append('<p class="rep-name">David Price</p>');
        $('#descr-district').append('<p class="descr-district"><span class="subber">District: </span> 4</p>');
        $('#descr-party').append('<p class="democrat"><span class="subber">Party: </span>Democrat</p>');
        $('#rep-pic').append('<div class="picwid price-pic"></div>');

        chart = new Highcharts.Chart({
          chart: {
            renderTo: 'main-graph',
            type: 'column'
          },
          series: [{
            data: totalsPrice,
            name: 'Total donations'
          }],
          legend:{
            enabled:false
          },
          title: {
            text: 'Campaign Donations, 2013'
          },
          xAxis: {
            categories: organizationPrice
          },
          yAxis: {
            title: {
                text: 'Donations ($)'
            }
          }

        }); //end chart

        console.log("Orgs after else if price: " + organizationPrice);
      } //end price

      //ROUZER
      else if(lastName == 'rouzer'){
        //console.log("Rouzer chart");
        hideSome();

        $('#rep-name').append('<p class="rep-name">David Rouzer</p>');
        $('#descr-district').append('<p class="descr-district"><span class="subber">District: </span> 7</p>');
        $('#descr-party').append('<p class="republican"><span class="subber">Party: </span>Republican</p>');
        $('#rep-pic').append('<div class="picwid rouzer-pic"></div>');

        chart = new Highcharts.Chart({
          chart: {
            renderTo: 'main-graph',
            type: 'column'
          },
          series: [{
            data: totalsRouzer,
            name: 'Total donations'
          }],
          legend:{
            enabled:false
          },
          title: {
            text: 'Campaign Donations, 2013'
          },
          xAxis: {
            categories: organizationRouzer
          },
          yAxis: {
            title: {
                text: 'Donations ($)'
            }
          }

        }); //end chart

        //console.log("Orgs after else if rouzer: " + organizationRouzer);
      } //end rouzer

      //WALKER
      else if(lastName == 'walker'){

        window.alert("No data available.");

      } //end walker



  };
