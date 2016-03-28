$( "#header_icon" ).on( "tap", function( event ) {
    
   var ref = window.open('http://leagueoflegends.com', '_blank', 'location=yes');

    
} )



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


