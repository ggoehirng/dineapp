var results = 'results.html'
var result = window.name;
var id= Number(window.location.href.split('?')[1]);
var web;
var book;
var r;
result=window.name;
$(document).ready(function(){
  $.getJSON("../restaurants.json", function(response){
    $.each(response, function(index, rest){
      if (rest.id === id){
      	r = { name: rest.name, book: rest.book, web: rest.website}
        if (r.web.substr(0,7) === 'http://'){
          var web = r.web
        } else {
          web = "http://" + r.web
        }
      	console.log(r.name);
      	console.log(r)
        $('#frame').attr('src', web);
      }})})
$('#b3').click(function(){
        if (r.book.substr(0,7) === 'http://'){
          var book = r.book
        } else {
          book = "http://" + r.book
        }
        $('#frame').attr('src', book);
      })
$('#b2').click(function(){
        if (r.web.substr(0,7) === 'http://'){
          var web = r.web
        } else {
          web = "http://" + r.web
        }
        $('#frame').attr('src', web);
      })


})