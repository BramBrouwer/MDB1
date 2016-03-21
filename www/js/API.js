var connection = new Connection();

//Function vairables
function Connection(){
    var baseURL = 'https://euw.api.pvp.net';
    var APIKey = 'api_key=15dfe91d-08ef-4fc9-a622-8d76c79c1ec5';
    var region ='euw';
    
    this.getSummonerData = function(name){
        var returnData;
        $.ajax({
            url: baseURL + '/api/lol/' + region + '/v1.4/summoner/by-name/' + name +'?' +APIKey, 
                success: function(data){
                    returnData = data;
                },
                error: function(error){
                    console.log(error);
                    errorpopup(name);
                    returnData = false;
                }
        });
        return returnData;
    }
}
// get name example

$('#target').submit(function() {
    $('#loader').show();
  //retrieve names
    var summoner1;
    var summoner2;
    var name_1 = $('input[name="s1"]').val().toLowerCase();
    var name_2 = $('input[name="s2"]').val().toLowerCase();
  //var typeURL1 = '/api/lol/' + region + '/v1.4/summoner/by-name/' + name_1 +'?' +APIKey;
  //var typeURL2 = '/api/lol/' + region + '/v1.4/summoner/by-name/' + name_2 +'?' +APIKey;
 
   if(name_1 == "" || name_2 == "")
   {
       empty_name_error();
       $('#loader').hide();
       return false;
   }
   

    
    summoner1 = connection.getSummonerData(name_1);
    if(summoner1 != false){
        console.log('First summoner name verified.');
        console.log(summoner1);
    }    
    summoner2 = connection.getSummonerData(name_2);
    if(summoner2 != false){
        console.log('Second summoner name verified.');
        console.log(summoner2);
        // $('#loader').hide();
    }
       //first ajax call, verify the first summoner name given
         /*$.ajax({
            url: baseURL+typeURL1, 
               success: function(data1)
                {
                //First name verified
                console.log('First summoner name verified');
                summoner1 = data1;
                
                //second ajax call, verify second name
                  $.ajax({
                  url: baseURL+typeURL2, 
                  success: function(data2)
                   {
                    //Second name verified
                    console.log('Second summoner name verified');
                    summoner2 = data2;
                    succes_message();
                    
                    // Both names verified
                  $('#loader').hide();
                
                  //$( ":mobile-pagecontainer" ).pagecontainer( "change", "compare.html", { role: "page" } );
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
              
          });*/
          return false;

})




// Get stats





// End get stats
function getstatsnormal(sum1,sum2,name1,name2){
 //declare variables
    var summoner1stats = null;
    var summoner2stats = null;
    
    var typeURL1 = '/api/lol/' + region + '/v1.3/stats/by-summoner/' + sum1[name1].id +'/summary?season=SEASON2016&'+APIKey;
    var typeURL2 = '/api/lol/' + region + '/v1.3/stats/by-summoner/' + sum2[name2].id +'/summary?season=SEASON2016&'+APIKey;
 
    $.ajax({
        url: baseURL+typeURL1, 
        success: function(data1)
        {
            summoner1stats = data1;
            $.ajax({
                url: baseURL+typeURL2, 
                success: function(data2)
                {    
                    summoner2stats = data2;
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
    console.log(summonerstats);
    var stats = [];
    summonerstats.forEach(function(entry){
        switch(entry['playerStatSummaryType']) { //Set stats
            case 'CoopVsAI':
                var coopvsai = entry['aggregatedStats'];
                stats[0] = coopvsai;
                break;
            case 'OdinUnranked':
                break;
            case 'RankedTeam3x3':
                var ranked3 = entry['aggregatedStats'];
                stats[2] = ranked3;
                break;
            case 'RankedTeam5x5':
                var ranked5 = entry['aggregatedStats'];
                stats[3] = ranked5;
                break;
            case 'Unranked3x3':
                var unranked3 = entry['aggregatedStats'];
                stats[4] = unranked3;
                break;
            case 'CAP5x5':
                var teambuilder = entry['aggregatedStats'];
                stats[5] = teambuilder;
                break;
            case 'AramUnranked5x5':
                var aram = entry['aggregatedStats'];
                stats[6] = aram;
                break;
            case 'Unranked':
                var unranked = entry['aggregatedStats'];
                console.log(unranked);
                stats[7] = unranked;
                break;
            case 'RankedSolo5x5':
                var rankedsolo = entry['aggregatedStats'];
                stats[8] = rankedsolo;
                break;
            default:
                
                break;
        }
    });

    setStatTable();
    
}

function setStatTable(){
    
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
  
//   CAP 5x5 + unranked + 3v3 undraked = totale normal stats
// 			-Creep score 
// 			-championkills
// 			-assists
// 			-turrets killed
// 			-wins



    $( "#success_popup" ).popup( "open");
}
// End Popups



