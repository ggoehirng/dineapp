/*var url1 = window.location.href;
var urlsplit = url1.split('?');
var score = Number(urlsplit[1]);
var quiz= 'questions.html';
var rpage= 'restaurant.html';
var result;
var rnumber;
var Restaurant= function(name,img,cuisine,short,location,rsite,book,reviews,social){
  this.name=name;
  this.image=img
  this.cuisine=cuisine
  this.description=short;
  this.address=location;
  this.view_more=rsite;
  this.book=book;
}
$.getJSON("../restaurants.json", function(response){
  
  $.each(response, function(index, rest){
    if (rest.score <= score + score*.1 && rest.score >= score - score*.1 ){
      for (var i =0; i < 1; i++){
      var r0 = new Restaurant (rest.name, rest.image, rest.cuisine, rest.description, rest.address, rest.website )
    } 
      console.log('success');
  } else{
    console.log('no matches');
  }
    
  });
  

}); 

/*var r1 = new Restaurant('The Signature Room','http://www.chicagoreader.com/imager/b/original/9990101/c9f9/Signature_Room_by_The_Signature_Room_at_the_95th.jpeg','American','a chicago classic with an extraodinary view', '3335 W Imaginary Way Chicago, IL 60201','http://www.dinerevolution.co/','bookhere', 'review1', 'twitter');


var r2 = new Restaurant( undefined,'http://grubstreet.com/chicago/20101006_ipo_560x372.jpg','Modern American','a modern spot in the heart of the financial district', '3355 W Imaginary Way Chicago, IL 60201','http://www.iporestaurant.com/','http://www.spgrestaurantsandbars.com/united-states/illinois/chicago/ipo','review');

var r3 = new Restaurant('Boka','http://www.villalagoontile.com/images/cement-tile-installations/boka-restaurant-chicago-ikat-tile-floor.jpg','Contemporary American','a modern menu with a down to earth feel', '3345 W Imaginary Way Chicago, IL 60201','http://www.bokachicago.com/','http://www.opentable.com/boka-reservations-chicago?rid=2581&restref=2581',undefined, undefined);
*/ 

  /*$('#rname1').replaceWith("<h2 class='restaurant_name'>" + r1.name + "</h2>");   
  $('#rpicture1').css('content', "URL(" + r1.image + ")");
  $('#cuisine1').replaceWith("<p id='cuisine1'class='rcuisine'>" + r1.cuisine + "</p>");
  $('#desc1').replaceWith("<p id='desc1' class='rdesc'>" + r1.description + "</p>");
  $('#address1').replaceWith("<p id='address1' class='raddress'>" + r1.address + "</p>");
  */
  /*$('#rname2').replaceWith("<h2 class='restaurant_name'>" + r0.name + "</h2>");   
  $('#rpicture2').css('content', "URL(" + r0.image + ")");
  $('#cuisine2').replaceWith("<p id='cuisine2'class='rcuisine'>" + r0.cuisine + "</p>");
  $('#desc2').replaceWith("<p id='desc2' class='rdesc'>" + r0.description + "</p>");
  $('#address2').replaceWith("<p id='address2' class='raddress'>" + r0.address + "</p>");
*//*
  $('#rname3').replaceWith("<h2 class='restaurant_name'>" + r2.name + "</h2>");   
  $('#rpicture3').css('content', "URL(" + r2.image + ")");
  $('#cuisine3').replaceWith("<p id='cuisine3'class='rcuisine'>" + r2.cuisine + "</p>");
  $("#desc3").replaceWith("<p id='desc3' class='rdesc'>" + r2.description + "</p>");
  $('#address3').replaceWith("<p id='address3' class='raddress'>" + r2.address + "</p>")});
    $('#retake').click(function() {
   //keeps breaking. Sometimes works othertime doesn't
  window.location.href = quiz;
});

$('.more').click(function() {  
 rnumber= $(this).attr('id');
  if (rnumber == "more1") {
        window.name = 1;
  } else if ( rnumber == "more2") {
           window.name  = 2;
  } else if ( rnumber == "more3") {
          window.name  = 3};
  window.location.href= rpage;
}); */
