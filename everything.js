/*THOSE GLOBAL VARIABLES THOUGH*/

//organization names
var organizationAdams = [];
var organizationButterfield = [];
var organizationEllmers = [];
var organizationFoxx = [];
var organizationHolding = [];
var organizationHudson = [];
var organizationJones = [];
var organizationMchenry = [];
var organizationMeadows = [];
var organizationPittenger = [];
var organizationPrice = [];
var organizationRouzer = [];
var organizationWalker = [];

//pac donations
var pacAdams = [];
var pacButterfield = [];
var pacFoxx = [];
var pacHolding = [];
var pacHudson = [];
var pacJones = [];
var pacMchenry = [];
var pacMeadows = [];
var pacPittenger = [];
var pacPrice = [];
var pacRouzer = [];

//individual donations
var indivAdams = [];
var indivButterfield = [];
var indivFoxx = [];
var indivHolding = [];
var indivHudson = [];
var indivJones = [];
var indivMchenry = [];
var indivMeadows = [];
var indivPittenger = [];
var indivPrice = [];
var indivRouzer = [];

//total donations
var totalsAdams = [];
var totalsButterfield = [];
var totalsEllmers = [];
var totalsFoxx = [];
var totalsHolding = [];
var totalsHudson = [];
var totalsJones = [];
var totalsMchenry = [];
var totalsMeadows = [];
var totalsPittenger = [];
var totalsPrice = [];
var totalsRouzer = [];
var totalsWalker = [];

//organization indices
var indexAdams = [];
var indexButterfield = [];
var indexFoxx = [];
var indexHolding = [];
var indexHudson = [];
var indexJones = [];
var indexMchenry = [];
var indexMeadows = [];
var indexPittenger = [];
var indexPrice = [];
var indexRouzer = [];

//for main
lastname = [];
fullname = [];
var district = [];
var party = [];




//dat document ready
$(document).ready(function(){
var _this = this;


console.log("doc ready!");
  $.ajax({
      type: "GET",
      url: "all_reps.xml",
      dataType: "xml",
      success: parseMain});

  // $.ajax({
  //     type: "GET",
  //     url: "all.json",
  //     dataType: "json",
  //     success: allDons(data, textStatus, jqXHR)});

  $.get('legislators/all.json')
    .success(function(all){
      _this.arr_donations = all;
      console.log("data: " + all.adams[0].pac);
    })
    .error(function(msg){
      console.log("Caught request failed. \n" + msg);
    });

    $.get('legislators/all_reps.json')
      .success(function(all){
        arr_legislators = all;
        console.log("all_leg: " + all[0].full_name);
      })
      .error(function(msg){
        console.log("Caught request failed. \n" + msg);
      });


  // function allDons(data){
  //   console.log("ALL DONS");
  //   console.log(data);
  // }

  //parse that main sheet
  function parseMain(xml){

      $(xml).find('person').each(function(){

          //console.log("once for every person");
          var $person = $(this);
          lastname.push($person.find('last_name').text());
          fullname.push($person.find('fullname').text());
          district.push($person.find('district').text());
          party.push($person.find('party').text());


      });

    }

/*ALL THE GETS YOU COULD EVER DESIRE*/
        $.ajax({
            type: "GET",
            url: "legislators/adams10.xml",
            dataType: "xml",
            success: parseAdams});
        $.ajax({
            type: "GET",
            url: "legislators/butterfield10.xml",
            dataType: "xml",
            success: parseButterfield});
        $.ajax({
            type: "GET",
            url: "legislators/ellmers10.xml",
            dataType: "xml",
            success: parseEllmers});
        $.ajax({
            type: "GET",
            url: "legislators/foxx10.xml",
            dataType: "xml",
            success: parseFoxx});
        $.ajax({
            type: "GET",
            url: "legislators/holding10.xml",
            dataType: "xml",
            success: parseHolding,
            });
        $.ajax({
            type: "GET",
            url: "legislators/hudson10.xml",
            dataType: "xml",
            success: parseHudson});
        $.ajax({
            type: "GET",
            url: "legislators/jones10.xml",
            dataType: "xml",
            success: parseJones});
        $.ajax({
            type: "GET",
            url: "legislators/mchenry10.xml",
            dataType: "xml",
            success: parseMchenry});
        $.ajax({
            type: "GET",
            url: "legislators/meadows10.xml",
            dataType: "xml",
            success: parseMeadows});
        $.ajax({
            type: "GET",
            url: "legislators/pittenger10.xml",
            dataType: "xml",
            success: parsePittenger});
        $.ajax({
            type: "GET",
            url: "legislators/price10.xml",
            dataType: "xml",
            success: parsePrice});
        $.ajax({
            type: "GET",
            url: "legislators/rouzer10.xml",
            dataType: "xml",
            success: parseRouzer});

});


/*PARSING FUNCTIONS BELOW*/

function parseAdams(xml) {
    // console.log("parse adams");
    $(xml).find('donation').each(function(){

      //console.log("once for every donation");
      var $donation = $(this);

      organizationAdams.push($donation.find('organization').text());
      //console.log(organizationAdams);
      pacAdams.push(parseInt($donation.find('pac').text()));
      indivAdams.push(parseInt($donation.find('indiv').text()));
      totalsAdams.push(parseInt($donation.find('totals').text()));
      indexAdams.push(parseInt($donation.find('organization-index').text()));

    });
}

function parseButterfield(xml) {
  // console.log("parse butterfield");
  //var i = 0;
  $(xml).find('donation').each(function(){

      //console.log("once for every donation");
      var $donation = $(this);

      organizationButterfield.push($donation.find('organization').text());
      indivButterfield.push(parseInt($donation.find('indiv').text()));
      pacButterfield.push(parseInt($donation.find('pac').text()));
      totalsButterfield.push(parseInt($donation.find('totals').text()));
      indexButterfield.push(parseInt($donation.find('organization-index').text()));

    });

}

function parseEllmers(xml) {
  // console.log("parse ellmers");
  //var i = 0;
  $(xml).find('donation').each(function(){

      //console.log("once for every donation");
      var $donation = $(this);

      organizationEllmers.push($donation.find('organization').text());
      totalsEllmers.push(parseInt($donation.find('totals').text()));

    });

}

function parseFoxx(xml) {
  // console.log("parse foxx");
    $(xml).find('donation').each(function(){

      //console.log("once for every donation");
      var $donation = $(this);

      organizationFoxx.push($donation.find('organization').text());
      indivFoxx.push(parseInt($donation.find('indiv').text()));
      pacFoxx.push($donation.find('pac').text());
      totalsFoxx.push(parseInt($donation.find('totals').text()));
      indexFoxx.push(parseInt($donation.find('organization-index').text()));

    });

}

function parseHolding(xml) {
  // console.log("parse holding");
    $(xml).find('donation').each(function(){
      //console.log("once for every donation");
      var $donation = $(this);

      organizationHolding.push($donation.find('organization').text());
      indivHolding.push(parseInt($donation.find('indiv').text()));
      pacHolding.push($donation.find('pac').text());
      totalsHolding.push(parseInt($donation.find('totals').text()));
      indexHolding.push(parseInt($donation.find('organization-index').text()));

    });

}

function parseHudson(xml) {
  // console.log("parse hudson");
    $(xml).find('donation').each(function(){

      //console.log("once for every donation");
      var $donation = $(this);

      organizationHudson.push($donation.find('organization').text());
      indivHudson.push(parseInt($donation.find('indiv').text()));
      pacHudson.push($donation.find('pac').text());
      totalsHudson.push(parseInt($donation.find('totals').text()));
      //console.log("Hudson totals: " + totalsHudson);
      indexHudson.push(parseInt($donation.find('organization-index').text()));

    });

}

function parseJones(xml) {
  // console.log("parse jones");
    $(xml).find('donation').each(function(){
      //console.log("once for every donation");
      var $donation = $(this);

      organizationJones.push($donation.find('organization').text());
      pacJones.push($donation.find('pac').text());
      indivJones.push(parseInt($donation.find('indiv').text()));
      totalsJones.push(parseInt($donation.find('totals').text()));
      indexJones.push(parseInt($donation.find('organization-index').text()));

    });
    //console.log("jones totals: " + totalsJones);
}

function parseMchenry(xml) {
  // console.log("parse mchenry");
    $(xml).find('donation').each(function(){

      //console.log("once for every donation");
      var $donation = $(this);

      organizationMchenry.push($donation.find('organization').text());
      pacMchenry.push($donation.find('pac').text());
      indivMchenry.push(parseInt($donation.find('indiv').text()));
      totalsMchenry.push(parseInt($donation.find('totals').text()));
      indexMchenry.push(parseInt($donation.find('organization-index').text()));

    });

}

function parseMeadows(xml) {
  // console.log("parse meadows");
    $(xml).find('donation').each(function(){

      //console.log("once for every donation");
      var $donation = $(this);

      organizationMeadows.push($donation.find('organization').text());
      indexMeadows.push(parseInt($donation.find('organization-index').text()));
      pacMeadows.push(parseInt($donation.find('pac').text()));
      indivMeadows.push(parseInt($donation.find('indiv').text()));
      totalsMeadows.push(parseInt($donation.find('totals').text()));

    });

}

function parsePittenger(xml) {
  // console.log("parse pittenger");
    $(xml).find('donation').each(function(){

      //console.log("once for every donation");
      var $donation = $(this);

      organizationPittenger.push($donation.find('organization').text());
      pacPittenger.push(parseInt($donation.find('pac').text()));
      indivPittenger.push(parseInt($donation.find('indiv').text()));
      totalsPittenger.push(parseInt($donation.find('totals').text()));
      indexPittenger.push(parseInt($donation.find('organization-index').text()));

    });


}

function parsePrice(xml) {
  // console.log("parse price");
    $(xml).find('donation').each(function(){

      //console.log("once for every donation");
      var $donation = $(this);


      organizationPrice.push($donation.find('organization').text());
      pacPrice.push(parseInt($donation.find('pac').text()));
      indivPrice.push(parseInt($donation.find('indiv').text()));
      totalsPrice.push(parseInt($donation.find('totals').text()));
      indexPrice.push(parseInt($donation.find('organization-index').text()));

    });

}

function parseRouzer(xml) {
  // console.log("parse rouzer");
    $(xml).find('donation').each(function(){

      //console.log("once for every donation");
      var $donation = $(this);

      organizationRouzer.push($donation.find('organization').text());
      pacRouzer.push(parseInt($donation.find('pac').text()));
      indivRouzer.push(parseInt($donation.find('indiv').text()));
      totalsRouzer.push(parseInt($donation.find('totals').text()));
      indexRouzer.push(parseInt($donation.find('organization-index').text()));

    });

function parseWalker(xml) {
  // console.log("parse walker");
  //var i = 0;
  $(xml).find('donation').each(function(){

      //console.log("once for every donation");
      var $donation = $(this);

      organizationWalker.push($donation.find('organization').text());
      totalsWalker.push(parseInt($donation.find('totals').text()));

    });

}



}
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

  function switchLeg(name){
    var clickedLeg = {};
    console.log("ARR: " + arr_legislators.length);

    for(i = 0; i < arr_legislators.length; i++){
      if(name.localeCompare(arr_legislators[i].last_name) == 0){
        clickedLeg = arr_legislators[i];
      }
    }

      console.log(clickedLeg);
      buildLeg(clickedLeg);

    }

    function buildLeg(clickedLeg){
      hideSome();

      document.getElementById('rep-name').innerHTML = '<p class="rep-name">' + clickedLeg.full_name + '</p>';
      document.getElementById('descr-district').innerHTML = '<p class="descr-district"><span class="subber">District: </span>' + clickedLeg.district + '</p>';
      document.getElementById('descr-party').innerHTML = '<p class="' + clickedLeg.party.toLowerCase() + '"><span class="subber">Party: </span>' + clickedLeg.party + '</p>';
      document.getElementById('rep-pic').innerHTML = '<div class="picwid ' + clickedLeg.last_name.toLowerCase() + '-pic"></div>';


    }

    /*************** KEEP GOING FROM HERE!!!!! ***********/

    function buildChart(){

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
