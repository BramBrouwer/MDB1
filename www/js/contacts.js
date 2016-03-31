//todo hide list before loading contacts
//show laoder while loading contacts
//remove loader and show list on contacts loaded
$("#loadcontacts").click(function() {
    
                $( "#contactslist" ).hide();
                $( "#contactsloader" ).show();
                // $("#contactslist").append('<li><a href="sms://+31612345678?body=1V1%20me%20bruh%20www.downloadlinknaaronzeapp.com/">AAAAATEST</a></li>');
                // $( "#contactslist" ).listview( "refresh" );
                // $( "#contactslist" ).show();
                
                var fields = ["displayName", "name","phoneNumbers"];
                navigator.contacts.find(fields, onSuccess, onError);            

});

   
   
   
 

 // onSuccess: Get a snapshot of the current contacts

function onSuccess(contacts) 
    {
        // alert("Contacts found: " + contacts.length)
        for (var i = 0; i < contacts.length; i++) 
        {
            
                if(contacts[i].displayName != null && contacts[i].phoneNumbers[0].value != null)
                {
                        var name = contacts[i].displayName;
                        var phone = contacts[i].phoneNumbers[0].value;
                        $("#contactslist").append('<li><a href="sms://'+phone+'?body=1V1%20me%20bruh%20www.downloadlinknaaronzeapp.com/">'+name+'</a></li>');
                        $( "#contactslist" ).listview( "refresh" );
                }      
      }
    //   if this isnt called and there is still a decent amount of contacts, the for loop probablt crashed, mayb ebecause of a nullpointer on phonenumbers? maybe we should perform the nullcheck on the phonenumber object and not the index.
    
      alert("is this called?");
       $( "#contactsloader" ).hide();
       $( "#contactslist" ).show();

        
    }


            // onError: Failed to get the contacts
            function onError(contactError) {
                alert('onError!');
            }