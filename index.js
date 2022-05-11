
// querySelector in jQuery
//document.querySelector("h1").style.color = "black";
//           vad      värde
$("h1").css("color", "blue");


// Selecting elements with jquery
// dollar sign used for both querySelector and querySelectorAll!
$("button").css("background-color", "yellow"); // -- all buttons get affected.


// kan få värdet av en css property också, 1 param får värde, 2 params sätter värde
console.log($("h1").css("color"));
console.log($("h1").css("font-size"));


// HÅLL CSS TILL STYLE OCH JAVASCRIPT TILL FUNK, best practice

//jQuery append css class to elements
$("h1").addClass("big-title");

$("h1").removeClass("big-title");

// KAN LÄGGA TILL FLERA SAMTIDIGT, space mellan !
$("h1").addClass("big-title margin-50");

// Kan kolla om ett element har en spec class!, BOOL
console.log($("h1").hasClass("big-title margin-50"));



// Manipulate text with jquery, problemet är dock att den SELECTAR ALLA
$("h1").text("New Text");

// Alla får!
$("button").text("DONT CLICK ME");

// Kan göra såhör också och LÄGGA TILL HTML i knappen
$("button").html("<em>Hey</em>");



// Manipulate attributes with jquery, get and set
// inside attr("nameOfAttribute")
console.log($("img").attr("src"));

// set value of attributes, get and then set it
$("a").attr("href", "https://www.aftonbladet.se");

// samma med element classer, se vilka dem har!
console.log($("h1").attr("class"));



// eventListener med jQuery
$("h1").click(function() {
  $("h1").css("color", "purple");
});

// tex alla buttons, behövde vi skriva en FOR loop i vanilla js
// men inte i jQuery
$("button").click(function(){
  $("h1").css("color", "blue");
})

// Keypress listener, skriv "body" eller document, utan ""
$("input").keypress(function(event){
  console.log(event.key);
})

function keyPress(){
  $(document).keypress(function(event){
    var letter = event.key;
    $("h1").text(letter);
  });
}

keyPress();

// annat sätt att tilläga eventListener, .on("vilket event som helst i JS")
$("h1").on("mouseover", function(){
  $("h1").css("color", "purple");
});



// Adding and removing elements with jQuery

// lägga till en button före h1
$("h1").before("<button>jQuery</button>");
// lägga till en button efter h1
$("h1").after("<button>jQuery</button>");

//inne i h1 men före hello
$("h1").prepend("<button>jQuery</button>");
// inne i h1 men efter hello
$("h1").append("<button>jQuery</button>");

// remove elements, tar bort alla buttons
// $("button").remove();




// Website animations jQuery
// $("button").on("click", function(){
//  $("h1").toggle(); // hide selected element .show() to show it again
// });

// $("button").on("click", function(){
//  $("h1").fadeToggle(); // fadeIn(); fadeOut();
// });

// $("button").on("click", function(){
//  $("h1").slideToggle(); // slideDown(); slideUp();
// });

// eller animate() custom, css ONLY NUMERIC VALUES or "%"
//$("button").on("click", function(){
//  $("h1").animate({margin: "20%"});
//});

// CHAIN ANIMATIONS, in order!
$("button").on("click", function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
