var results = 'results.html'
var result = window.name;
result=window.name;
$(document).ready(function(){
  if (result==1){
  $('#frame').attr('src', r1.view_more);
    if (r1.review == undefined){
      $('#b4').css('display','none')};
    if (r1.social == undefined){
       $('#b5').css('display','none')};
    if (r1.social == undefined && r1.review == undefined){
      $('#bottom-control').css('margin','none');
      $('#bottom-control').css('left','28%');
    }else {
      $('#bottom-control').css('margin','0 auto')};
  }else if (result==2){
  $('#frame').attr('src', r2.view_more);
    if (r2.review == undefined){
      $('#b4').css('display','none')};
    if (r2.social == undefined){
       $('#b5').css('display','none')};
    if (r2.social == undefined && r2.review == undefined){
      $('#bottom-control').css('margin','none');
      $('#bottom-control').css('left','28%');
 } else {
      $('#bottom-control').css('margin','0 auto')};
  }else if (result==3){
  $('#frame').attr('src', r3.view_more);
    if (r1.review == undefined){
      $('#b4').css('display','none')};
    if (r1.social == undefined){
       $('#b5').css('display','none')};
    if (r1.social == undefined && r1.review == undefined){
      $('#bottom-control').css('margin','none');
      $('#bottom-control').css('left','28%');
     } else {
      $('#bottom-control').css('margin','0 auto')};
  };
})

//To Results Page
$('#b1').click(function() {
    window.location = results;

});

//To Booking Page
$('#b2').click(function() {
   if (result==1){
  $('#frame').attr('src', r1.book);
  }else if (result==2){
  $('#frame').attr('src', r2.book);
  }else if (result==3){
  $('#frame').attr('src', r3.book);
  };
});

//To Restaurant Home Page
$('#b3').click(function() {
   window.location = 'restaurant.html';
});

//to reviews page
$('#b4').click(function() {
   window.location = 'reviews.html';
});