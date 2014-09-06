var results = 'results.html'
var result = window.name;
var id= Number(window.location.href.split('?')[1]);
var web;
var book;
result=window.name;
$(document).ready(function(){
  $.getJSON("../restaurants.json", function(response){
    $.each(response, function(index, rest){
      if (rest.id === id){
        web = rest.web;
        book = rest.book;
        $('#frame').attr('src', rest.web);
      }
    })})})