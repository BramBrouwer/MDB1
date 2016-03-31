
//  // Wait for device API libraries to load
//             document.addEventListener("deviceready", onDeviceReady, false);

//             // device APIs are available

//             function onDeviceReady() {
//                 // find all contacts with 'Bob' in any name field
//                 console.log('device ready ofzo');
//                 var options = new ContactFindOptions();
//                 options.filter = "Alec";
//                 var fields = ["displayName", "name"];
//                 navigator.contacts.find(fields, onSuccess, onError, options);
//             }

//             // onSuccess: Get a snapshot of the current contacts

//             function onSuccess(contacts) {
//                 for (var i = 0; i < contacts.length; i++) {
//                     alert("Display Name = " + contacts[i].displayName);
//                 }
//             }

//             // onError: Failed to get the contacts

//             function onError(contactError) {
//                 alert('onError!');
//             }










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


