function Location(place,landmark,season,notes){
  this.newPlace = place;
  this.newLandmark = landmark;
  this.newSeason = season;
  this.newNotes = notes;
}
Location.prototype.fullLocation = function () {
  return this.newPlace;
}


$(document).ready(function(){
  $("#place").submit(function(event){
    event.preventDefault();
    var inputPlace = $("#location").val();
    var inputLandmark = $("#landmark").val();
    var inputSeason = $("#season").val();
    var notes = $("#notes").val();

    var newLocation = new Location(inputPlace,inputLandmark,inputSeason,notes);

    $("ul#list").append("<li><span class='visit'>" + newLocation.fullLocation() + "</span></li>");

    $("input#location").val("");
    $("input#landmark").val("");
    $("input#season").val("");
    $("input#notes").val("");

    $(".visit").last().click(function() {
    $("#show-data").show();
    $("#show-data h2").text(newLocation.newPlace);
    $(".place").text(newLocation.newPlace);
    $(".landmark").text(newLocation.newLandmark);
    $(".season").text(newLocation.newSeason);
    $(".notes").text(newLocation.newNotes);
  });


  });
});
