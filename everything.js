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

console.log("doc ready!");
  $.ajax({
      type: "GET",
      url: "all_reps.xml",
      dataType: "xml",
      success: parseMain});

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

/*TESTERS BELOW*/

function listAll(){
//organization names
console.log("Org adams: " + organizationAdams);
console.log("Org butter: " + organizationButterfield);
console.log("Org ellmer: " + organizationEllmers);
console.log("Org hold: " + organizationHolding);
console.log("Org hud: " + organizationHudson);
console.log("Org jones: " + organizationJones);
console.log("Org mch: " + organizationMchenry);
console.log("Org mead: " + organizationMeadows);
console.log("Org pitt: " + organizationPittenger);
console.log("Org price: " + organizationPrice);
console.log("Org rouzer: " + organizationRouzer);
console.log("Org walker: " + organizationWalker);
}
