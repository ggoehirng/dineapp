
var choice_1;
var choice_2;
var choice_3=3; 
var choice_4;
var choice_5=5;
var ans_1;
var ans_2;
var ans_3;
var ans_4;
var ans_5;
var bos;
var rscore;
var results= '../HTML/results.html'
function random(x,y) {
    return Math.floor(Math.random() * (x-y+1) + y)} ;

$('.inbox').hover(function(){
  bos=$(this).attr('id');
  bos=bos.replace('z','t');
  $('#'+bos).css('color', 'white');
  $(this).css('background','black')},
  function(){
  $(this).css('background','white');
  $('#'+bos).css('color', 'black');
});

$('.inbox2').hover(function(){
  bos=$(this).attr('id');
  bos=bos.replace('z','t');
  $('#'+bos).css('color', 'white');
  $(this).css('background','black')},
  function(){
  $(this).css('background','white');
  $('#'+bos).css('color', 'black');
});

$("#back").on( "click", function(){
  if ($(".question1").css("display") === 'block'){
    window.location= "../start.html";;
  
  } else if ($(".question2").css("display") === 'flex'){
    $(".question1").css("display",'block');
    $(".question2").css("display",'none');
    $(".progress-bar").css("width", "0%");
  
  }else if ($(".question3").css("display") === 'flex'){
    $(".question2").css("display",'block');
     $(".question3").css("display",'none');
    $(".progress-bar").css("width", "20%");
  
  }else if ($(".question4").css("display") === 'flex'){
    $(".question3").css("display",'block');
     $(".question4").css("display",'none');
    $(".progress-bar").css("width", "40%");
  
  }else if ($(".question5").css("display") === 'flex'){
    $(".question4").css("display",'block');
     $(".question5").css("display",'none');
    $(".progress-bar").css("width", "60%");
  }
});

$("#next").click(function(){
  if ($(".question1").css("display") === 'block' && ans_1!= undefined){
    $(".question2").css("display",'block');
     $(".question1").css("display",'none');
    $(".progress-bar").css("width", "20%");
  
  } else if ($(".question2").css("display") === 'block' && ans_2!= undefined){
    $(".question3").css("display",'block');
     $(".question2").css("display",'none');
   $(".progress-bar").css("width", "40%");
  
  }else if ($(".question3").css("display") === 'block' && ans_3!= undefined){
    $(".question4").css("display",'block');
     $(".question3").css("display",'none');
    $(".progress-bar").css("width", "60%");
  
  }
    else if ($(".question4").css("display") === 'block' && ans_4!= undefined){
    $(".question5").css("display",'block');
     $(".question4").css("display",'none');
    $(".progress-bar").css("width", "80%");
  
  } else{
    $('#warning').css("display",'block');
    $('body').mousemove(function(){$('#warning').fadeOut('slow');
});
  };
});

//First Question
$(".ans1").click(function() {
    ans_1= $(this).attr("id");
      if (ans_1 == "mexican") {
        choice_1=500;
  } else if ( ans_1 == "italian") {
          choice_1=310;
  } else if ( ans_1 == "greek") {
         choice_1=250;
  } else if ( ans_1 == "french") {
         choice_1=125;
  } else if ( ans_1 == "steak") {
         choice_1=75;
  } else if ( ans_1 == "gastropub") {
         choice_1=25;
  } else if ( ans_1 == "american") {
         choice_1=10;
  } else if ( ans_1 == "seafood") {
         choice_1= -25;
  } else if ( ans_1 == "sushi") {
         choice_1=-195;
  } else if ( ans_1 == "asian") {
         choice_1=-250;
  } else if ( ans_1 == "indian") {
         choice_1=-500;
  }else if ( ans_1 == "other") {
        choice_1=random(500,-500);
};
       
  $(".question1").css("display","none");
  $(".question2").css("display","block");
  $(".progress-bar").css("width", "20%");
  console.log(ans_1);
  console.log(choice_1);
})

//Second Question
$(".ans2").click(function() {
      ans_2= $(this).attr("id");
      if (ans_2 == "nchicagoland") {
        choice_2=500;
  } else if ( ans_2 == "uptown") {
        choice_2=300;
  } else if ( ans_2 == "logan_square") {
        choice_2=175;
  } else if ( ans_2 == "lincoln_park") {
        choice_2=115;
  } else if ( ans_2 == "wicker_park") {
        choice_2=145;
  } else if ( ans_2 == "riverw") {
        choice_2=70;
  } else if ( ans_2 == "gold_coast") {
        choice_2=50;
  } else if ( ans_2 == "rivern") {
        choice_2=0;
  } else if ( ans_2 == "downtown") {
        choice_2=-40;
  } else if ( ans_2 == "west_town") {
        choice_2=-75;
  } else if ( ans_2 == "sloop") {
        choice_2=-95;
  } else if ( ans_2 == "univ_vil") {
        choice_2=-150;
  } else if ( ans_2 == "hyde_park") {
        choice_2=-400;
  } else if ( ans_2 == "schicagoland") {
        choice_2=-500;
  } else if ( ans_2 == "wchicagoland") {
        choice_2=165;
  }
       
  $(".question2").css("display","none");
  $(".question3").css("display","block");
  $(".slide").css("display","inline-block");
  $(".progress-bar").css("width", "40%");
  console.log(ans_2);
  console.log(choice_2);
})

//third Question

$(".3").click(function() {
      ans_3= $(this).attr("id");
      if (ans_3 == "one") {
        choice_3=-600;
  } else if ( ans_3 == "two") {
        choice_3=3000;
  } else if ( ans_3 == "three") {
        choice_3=0;
  }else if ( ans_3 == "four") {
        choice_3=-300;
  }else if ( ans_3 == "five") {
        choice_3=-600;
  };
       
  $(".question3").css("display","none");
  $(".slide").css("display","none");
  $(".question4").css("display","block");
  $(".progress-bar").css("width", "60%");
  console.log(ans_3);
  console.log(choice_3);
})

//Fourth Question
$(".4").click(function() {
      ans_4= $(this).attr("id");
      if (ans_4 == "modern") {
        choice_4=100;
  } else if ( ans_4 == "sleek") {
        choice_4=0;
  } else if ( ans_4 == "elegant") {
        choice_4=-100;
  };
       
  $(".question4").css("display","none");
  $(".question5").css("display","block");
  $(".progress-bar").css("width", "80%");
  console.log(ans_4);
  console.log(choice_4);
})

//Fifth Question
$(".5").click(function() {
       ans_5= $(this).attr("id");
      if (ans_5 == "white") {
        choice_5=100;
  } else if ( ans_5 == "red") {
        choice_5=0;
  } else if ( ans_5 == "black") {
        choice_5=-100;
  };
      
  console.log(ans_5);
  console.log(choice_5);
  //setTimeout('window.location.href = results',10);
  return rscore = choice_1 + choice_2 + choice_3 + choice_4 + choice_5;
  //send rscore to server to get 3 closest matches
  
 
  
})


      
