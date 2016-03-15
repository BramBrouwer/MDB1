
// $( document ).ready(function() {
   
// });

$('#target').submit(function() {
  console.log('submit handler called');
  console.log("Summoner name 1 = " + $('input[name="s1"]').val());
  console.log("Summoner name 2 = " + $('input[name="s2"]').val());
  
  
  //TODO: valideer namen
//   Return false zodat de action niet aangeroepen word, dit wordt straks een verwijzing naar de volgende stap van het submitten
  return false;
  
  
  
  //namen gevalideerd? Voer submit actie uit
  
});