
var sites = 
["http://ducksarethebest.com/",
"http://www.staggeringbeauty.com/",
"http://beesbeesbees.com/",
"http://www.koalastothemax.com/",
"http://hasthelargehadroncolliderdestroyedtheworldyet.com/",
"http://iamawesome.com/",
"http://www.nullingthevoid.com/",
"http://www.wwwdotcom.com/",
"http://unicodesnowmanforyou.com/"]


function getRandomInt() {
    return Math.floor(Math.random() * (8 - 0 + 1)) + 0;
}

$( "#header_icon" ).on( "tap", function( event ) {
       var ref = window.open('http://leagueoflegends.com', '_blank', 'location=yes');
})

$( "#dontmindme" ).on( "tap", function( event ) {
       var ref = window.open(sites[getRandomInt()], '_blank', 'location=yes');
    })



function errorpopup(invalidName)
{
    $("#popupcontent").empty();
    $("#popupcontent").append('Invalid username: '+invalidName)
     $( "#name_error" ).popup( "open");
}

function empty_name_error()
{
    $("#popupcontent").empty();
    $("#popupcontent").append('Please enter both fields');
    $( "#name_error" ).popup( "open");
}


 