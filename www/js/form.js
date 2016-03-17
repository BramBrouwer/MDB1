// CSS loader toevoegen en ajax call weer syncrhonous maken zodat er een laadscherm staat terwijl de summonerinfo opgehaald word
// er dus voor zorgen dat ajax call wordt uitgevoerd bij submit en pas bij succes callback verdergaat 
function getSummonerData (region, summonerName){
 var baseURL = 'https://euw.api.pvp.net';
 var typeURL;
 var APIKey = '?api_key=15dfe91d-08ef-4fc9-a622-8d76c79c1ec5';
 var typeURL = '/api/lol/' + region + '/v1.4/summoner/by-name/' + summonerName + APIKey;
 var result ="";

     $.ajax({
         url: baseURL+typeURL, 
         async: false,
         success: function(data){
console.log(data);
                result = data;
               
    }});
    return result;
}






$('#target').submit(function() {
  
   //retrieve names
  var name_1 = $('input[name="s1"]').val().toLowerCase();
  var name_2 = $('input[name="s2"]').val().toLowerCase();

//  Retrieve summoners from lol api
  var summoner1 = getSummonerData('EUW',name_1);
  var summoner2 = getSummonerData('EUW',name_2);

    console.log(summoner1[name_1].name)
 console.log(summoner2[name_2].name)
  
  return false;
  
  
});