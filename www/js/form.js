
//Function vairables
 var baseURL = 'https://euw.api.pvp.net';
 var APIKey = 'api_key=15dfe91d-08ef-4fc9-a622-8d76c79c1ec5';
 var region ='euw';
// get name example
//  console.log(summoner2[name_2]);

$('#target').submit(function() {
 
 
 var summoner1;
 var summoner2;
 
  //retrieve names
  var name_1 = $('input[name="s1"]').val().toLowerCase();
  var name_2 = $('input[name="s2"]').val().toLowerCase();
  var typeURL1 = '/api/lol/' + region + '/v1.4/summoner/by-name/' + name_1 +'?' +APIKey;
  var typeURL2 = '/api/lol/' + region + '/v1.4/summoner/by-name/' + name_2 +'?' +APIKey;
 
   if(name_1 == "" || name_2 == "")
   {
       empty_name_error();
       return false;
   }
       $('#loader').show();
       //first ajax call, verify the first summoner name given
         $.ajax({
            url: baseURL+typeURL1, 
               success: function(data1)
                {
                //First name verified
                console.log('First summoner name verified');
                summoner1 = data1;
                console.log(summoner1);
                
                //second ajax call, verify second name
                  $.ajax({
                  url: baseURL+typeURL2, 
                  success: function(data2)
                   {
                    //Second name verified
                    console.log('Second summoner name verified');
                    summoner2 = data2;
                    console.log(summoner2);
                    succes_message();
                    
                    // Both names verified
                  $('#loader').hide();
                
                  $( ":mobile-pagecontainer" ).pagecontainer( "change", "compare.html", { role: "page" } );
                   getstatsnormal(summoner1,summoner2,name_1,name_2);

                    
                  },
                  //Second name 404
                   error : function(error) 
                    {
                    console.log(error);
                     $('#loader').hide();
                    errorpopup(name_2);
                    
                    }

                  });
         
                },
                //First name 404    
                error : function(error) 
                {
                console.log(error);
                 $('#loader').hide();
                errorpopup(name_1);

                }
              
          });
          return false;

})




// Get stats





// End get stats
function getstatsnormal(sum1,sum2,name1,name2){
 //declare variables
 var summoner1stats;
 var summoner2stats;

//  console.log(sum2[name2]);
  var typeURL1 = '/api/lol/' + region + '/v1.3/stats/by-summoner/' + sum1[name1].id +'/summary?season=SEASON2016&'+APIKey;
  var typeURL2 = '/api/lol/' + region + '/v1.3/stats/by-summoner/' + sum2[name2].id +'/summary?season=SEASON2016&'+APIKey;
 
                  $.ajax({
                  url: baseURL+typeURL1, 
                  success: function(data1)
                   {
                    
                    summoner1stats = data1;
                    console.log(summoner1stats);
                    
                      $.ajax({
                  url: baseURL+typeURL2, 
                  success: function(data2)
                   {
                    
                    summoner2stats = data2;
                    // console.log(summoner2stats.playerStatSummaries);
                    calculateStats(summoner2stats.playerStatSummaries);
                    //beide summoners opgehaald
                    
                    
                  },
                 
                   error : function(error) 
                    {
                    console.log(error);
                    
                    
                    }

                  });
                    
                    
                  },
                 
                   error : function(error) 
                    {
                    console.log(error);
                    
                    
                    }

                  });


}




// CalculateStats
function calculateStats(summonerstats){
      
//   CAP 5x5 + unranked + 3v3 undraked = totale normal stats
// 			-Creep score 
// 			-championkills
// 			-assists
// 			-turrets killed
// 			-wins

    console.log(summonerstats);
}



// Popups
function errorpopup(invalidName)
{
    //first empty the containers text
    $("#popupcontent").empty();
    //then we add the error message corresponding with the relevant name
    $("#popupcontent").append('Invalid username: '+invalidName)

    //open popup
     $( "#name_error" ).popup( "open");
}

function empty_name_error(){
     //first empty the containers text
    $("#popupcontent").empty();
    $("#popupcontent").append('Please enter both fields');
    $( "#name_error" ).popup( "open");
}



function succes_message(){



    $( "#success_popup" ).popup( "open");
}
// End Popups





