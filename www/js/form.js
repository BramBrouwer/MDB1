
//Function variables
var baseURL = 'https://euw.api.pvp.net';
var APIKey = 'api_key=15dfe91d-08ef-4fc9-a622-8d76c79c1ec5';
var region ='euw';
var typeURL = '';
var name1 = '';
var name2 = '';

$('#target').submit(function() {
    // StatusBar.show();
    // StatusBar.backgroundColorByName("red");
    $('.stats_table').hide();
    $('#loader').show();
    resetScore();
    name1 = $('input[name="s1"]').val().toLowerCase();
    name2 = $('input[name="s2"]').val().toLowerCase();
    
    // Disable button to prevent the user breaking stuff
    $('input[type="submit"]').prop('disabled', true);
 
    //validate names and retrieve stats if names are valid
    verifySummoners(name1,name2);
    
    if(name1 == "" || name2 == "")
    {
        empty_name_error();
        $('input[type="submit"]').prop('disabled', false);
        return false;
    }
    return false;
});





