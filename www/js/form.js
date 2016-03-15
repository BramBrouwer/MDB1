
// $( document ).ready(function() {
   
// });

$('#target').submit(function() {
  console.log('submit handler called');
  console.log("Summoner name 1 = " + $('input[name="s1"]').val());
  console.log("Summoner name 2 = " + $('input[name="s2"]').val());
  
  
    // $.getJSON("https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/Henksteentjes?api_key=6cbf8df1-8340-4de9-bf1d-f1034b3b7171", function(result){
    //     $.each(result, function(i, field){
    //         // $("div").append(field + " ");
    //         console.log(field);
    //     });
    // });
    
    
 
  
  //TODO: valideer namen
//   Return false zodat de action niet aangeroepen word, dit wordt straks een verwijzing naar de volgende stap van het submitten
  return false;
  
  
  
  //namen gevalideerd? Voer submit actie uit
  
});