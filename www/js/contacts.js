$(document).on("pageinit","#contactspage", function(){
    
    $("#loadcontacts").tap(function() {
    console.log("asdasd");
    $("#loadcontacts").hide();
    $( "#contactslist" ).hide();
    $( "#contactsloader" ).show();
    var fields = ["displayName", "name","phoneNumbers"];
    navigator.contacts.find(fields, onSuccess, onError);            
});
    
});
$(document).on("pageinit","#homepage", function(){
  $("#savelocal").tap(function() {
      console.log("tap");
      window.localStorage.setItem("saved_name_a", "Henksteentjes");
      window.localStorage.setItem("saved_name_b", "Salamibami");
      console.log("names saved");
        
});

$("#loadlocal").tap(function() {
      var a = window.localStorage.getItem("saved_name_a");
      var b = window.localStorage.getItem("saved_name_b");
      alert(a+b);
});

});


function onSuccess(contacts) 
    {
        for (var i = 0; i < contacts.length; i++) 
        {
                if(contacts[i].displayName != null && contacts[i].phoneNumbers != null && contacts[i].phoneNumbers[0] != null)
                {
                        var name = contacts[i].displayName;
                        var phone = contacts[i].phoneNumbers[0].value;
                        $("#contactslist").append('<li><a href="sms://'+phone+'?body=1V1%20me%20bruh%20www.downloadlinknaaronzeapp.com/">'+name+'</a></li>');
                }      
      }
       $( "#contactsloader" ).hide();
       $( "#contactslist" ).listview( "refresh" );
       $( "#contactslist" ).show();
    }
    

            // onError: Failed to get the contacts
            function onError(contactError) {
                alert('onError!');
            }