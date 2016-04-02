
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
    var a = window.localStorage.getItem("pref_lang");
   
   switch(a) {
    case null:
        $("#popupcontent").append('Invalid username: '+invalidName)
        break;
    case "eng":
        $("#popupcontent").append('Invalid username: '+invalidName)
        break;
    case "nl":
        $("#popupcontent").append('Ongeldige gebruikersnaam: '+invalidName)
   }
     $( "#name_error" ).popup( "open");
}

function empty_name_error()
{
    $("#popupcontent").empty();
   
    var a = window.localStorage.getItem("pref_lang");
   
   switch(a) {
    case null:
        $("#popupcontent").append('Please enter both fields');
        break;
    case "eng":
        $("#popupcontent").append('Please enter both fields');
        break;
    case "nl":
        $("#popupcontent").append('Vul aub beide namen in');
   }
     $( "#name_error" ).popup( "open");
}


 