$(document).ready(function() {
    
    
 });
//Function vairables
 var baseURL = 'https://euw.api.pvp.net';
 var APIKey = 'api_key=15dfe91d-08ef-4fc9-a622-8d76c79c1ec5';
 var region ='euw';
// get name example
//  console.log(summoner2[name_2]);

$('#target').submit(function() {
    $('.stats_table').hide();
  //    Disable button to prevent the user breaking stuff
      $('input[type="submit"]').prop('disabled', true);
    
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
        $('input[type="submit"]').prop('disabled', false);
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
              
                
                //second ajax call, verify second name
                  $.ajax({
                  url: baseURL+typeURL2, 
                  success: function(data2)
                   {
                    //Second name verified
                    console.log('Second summoner name verified');
                    summoner2 = data2;
                    $('input[type="submit"]').prop('disabled', false);

                    
                    // Both names verified
                  
                  //$( ":mobile-pagecontainer" ).pagecontainer( "change", "compare.html", { role: "page" } );
                   getstatsnormal(summoner1,summoner2,name_1,name_2);

                    
                  },
                  //Second name 404
                   error : function(error) 
                    {
                    console.log(error);
                     $('#loader').hide();
                    errorpopup(name_2);
                    $('input[type="submit"]').prop('disabled', false);
                    
                    }

                  });
         
                },
                //First name 404    
                error : function(error) 
                {
                console.log(error);
                 $('#loader').hide();
                errorpopup(name_1);
                $('input[type="submit"]').prop('disabled', false);

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
            summoner1stats = data1['playerStatSummaries'];
            summoner1stats['name'] = name1;
            $.ajax({
                url: baseURL+typeURL2, 
                success: function(data2)
                {    
                    summoner2stats = data2['playerStatSummaries'];
                    summoner2stats['name'] = name2;
                    calculateStats(summoner1stats, summoner2stats);
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
function calculateStats(sum1stats, sum2stats){
    var stats = {'sum1Name': sum1stats['name'], 'sum2Name': sum2stats['name'], 'Unranked': null }
    
/* Summoner 1 */
    var sum1unrankedStats = { 'CS': 0, 'Champion_Kills': 0, 'Assists': 0, 'Turret_Kills': 0, 'Wins': 0 };
    sum1stats.forEach(function(entry){
        switch(entry['playerStatSummaryType']) { //Set stats
            case 'CoopVsAI':
                var coopvsai = entry['aggregatedStats'];
                break;
            case 'OdinUnranked':
                break;
            case 'RankedTeam3x3':
                var ranked3 = entry['aggregatedStats'];
                break;
            case 'RankedTeam5x5':
                var ranked5 = entry['aggregatedStats'];
                break;
            case 'Unranked3x3':
                var unranked3 = entry['aggregatedStats'];
                sum1unrankedStats['CS'] += unranked3['totalMinionKills'];
                sum1unrankedStats['CS'] += unranked3['totalNeutralMinionsKilled'];
                sum1unrankedStats['Champion_Kills'] += unranked3['totalChampionKills'];
                sum1unrankedStats['Assists'] += unranked3['totalAssists'];
                sum1unrankedStats['Turret_Kills'] += unranked3['totalTurretsKilled'];
                sum1unrankedStats['Wins'] += entry['wins'];
                break;
            case 'CAP5x5':
                var teambuilder = entry['aggregatedStats'];
                sum1unrankedStats['CS'] += teambuilder['totalMinionKills'];
                sum1unrankedStats['CS'] += teambuilder['totalNeutralMinionsKilled'];
                sum1unrankedStats['Champion_Kills'] += teambuilder['totalChampionKills'];
                sum1unrankedStats['Assists'] += teambuilder['totalAssists'];
                sum1unrankedStats['Turret_Kills'] += teambuilder['totalTurretsKilled'];
                sum1unrankedStats['Wins'] += entry['wins'];
                break;
            case 'AramUnranked5x5':
                var aram = entry['aggregatedStats'];
                break;
            case 'Unranked':
                var unranked = entry['aggregatedStats'];
                sum1unrankedStats['CS'] += unranked['totalMinionKills'];
                sum1unrankedStats['CS'] += unranked['totalNeutralMinionsKilled'];
                sum1unrankedStats['Champion_Kills'] += unranked['totalChampionKills'];
                sum1unrankedStats['Assists'] += unranked['totalAssists'];
                sum1unrankedStats['Turret_Kills'] += unranked['totalTurretsKilled'];
                sum1unrankedStats['Wins'] += entry['wins'];
                break;
            case 'RankedSolo5x5':
                var rankedsolo = entry['aggregatedStats'];
                break;
            default:
                
                break;
        }
    });
/* Summoner 1 END */

/* Summoner 2 */
    var sum2unrankedStats = { 'CS': 0, 'Champion_Kills': 0, 'Assists': 0, 'Turret_Kills': 0, 'Wins': 0 }; 
        sum2stats.forEach(function(entry){
        switch(entry['playerStatSummaryType']) { //Set stats
            case 'CoopVsAI':
                var coopvsai = entry['aggregatedStats'];
                break;
            case 'OdinUnranked':
                break;
            case 'RankedTeam3x3':
                var ranked3 = entry['aggregatedStats'];
                break;
            case 'RankedTeam5x5':
                var ranked5 = entry['aggregatedStats'];
                break;
            case 'Unranked3x3':
                var unranked3 = entry['aggregatedStats'];
                sum2unrankedStats['CS'] += unranked3['totalMinionKills'];
                sum2unrankedStats['CS'] += unranked3['totalNeutralMinionsKilled'];
                sum2unrankedStats['Champion_Kills'] += unranked3['totalChampionKills'];
                sum2unrankedStats['Assists'] += unranked3['totalAssists'];
                sum2unrankedStats['Turret_Kills'] += unranked3['totalTurretsKilled'];
                sum2unrankedStats['Wins'] += entry['wins'];
                break;
            case 'CAP5x5':
                var teambuilder = entry['aggregatedStats'];
                sum2unrankedStats['CS'] += teambuilder['totalMinionKills'];
                sum2unrankedStats['CS'] += teambuilder['totalNeutralMinionsKilled'];
                sum2unrankedStats['Champion_Kills'] += teambuilder['totalChampionKills'];
                sum2unrankedStats['Assists'] += teambuilder['totalAssists'];
                sum2unrankedStats['Turret_Kills'] += teambuilder['totalTurretsKilled'];
                sum2unrankedStats['Wins'] += entry['wins'];
                break;
            case 'AramUnranked5x5':
                var aram = entry['aggregatedStats'];
                break;
            case 'Unranked':
                var unranked = entry['aggregatedStats'];
                sum2unrankedStats['CS'] += unranked['totalMinionKills'];
                sum2unrankedStats['CS'] += unranked['totalNeutralMinionsKilled'];
                sum2unrankedStats['Champion_Kills'] += unranked['totalChampionKills'];
                sum2unrankedStats['Assists'] += unranked['totalAssists'];
                sum2unrankedStats['Turret_Kills'] += unranked['totalTurretsKilled'];
                sum2unrankedStats['Wins'] += entry['wins'];
                break;
            case 'RankedSolo5x5':
                var rankedsolo = entry['aggregatedStats'];
                break;
            default:
                
                break;
        }
    });
/* Summoner 2 END */ 
    
    $('#loader').hide();    
    $('.stats_table').show();
    stats['Unranked1'] = sum1unrankedStats;
    stats['Unranked2'] = sum2unrankedStats;
    setStatTable(stats);
}

function setStatTable(stats){
    var unranked1 = stats['Unranked1'];
    var unranked2 = stats['Unranked2'];

            $('.stats_table thead #sum1').text(stats['sum1Name']);
            $('.stats_table tbody #CS .sum1').text(unranked1['CS']);
            $('.stats_table tbody #Champion_Kills .sum1').text(unranked1['Champion_Kills']);
            $('.stats_table tbody #Assists .sum1').text(unranked1['Assists']);
            $('.stats_table tbody #Turret_Kills .sum1').text(unranked1['Turret_Kills']);
            $('.stats_table tbody #Wins .sum1').text(unranked1['Wins']);

            $('.stats_table thead #sum2').text(stats['sum2Name']);
            $('.stats_table tbody #CS .sum2').text(unranked2['CS']);
            $('.stats_table tbody #Champion_Kills .sum2').text(unranked2['Champion_Kills']);
            $('.stats_table tbody #Assists .sum2').text(unranked2['Assists']);
            $('.stats_table tbody #Turret_Kills .sum2').text(unranked2['Turret_Kills']);
            $('.stats_table tbody #Wins .sum2').text(unranked2['Wins']);

    }


    



//   CAP 5x5 + unranked + 3v3 undraked = totale normal stats
// 			-Creep score 
// 			-championkills
// 			-assists
// 			-turrets killed
// 			-wins



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

$('tr').on("touchstart"), function(){
    $(this).addClass('selected');
};