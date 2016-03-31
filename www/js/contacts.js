//todo hide list before loading contacts
//show laoder while loading contacts
//remove loader and show list on contacts loaded
$("#loadcontacts").click(function() {
               
                console.log("contacts called");
                
                // Add item
                $("#contactslist").append('<li><a href="sms://+31612345678?body=1V1%20me%20bruh%20www.downloadlinknaaronzeapp.com/">AAAAATEST</a></li>');
                // Refresh list to update styling
                 $( "#contactslist" ).listview( "refresh" );
                
                var fields = ["displayName", "name","phoneNumbers"];
                navigator.contacts.find(fields, onSuccess, onError);
                

});

   
   
   
 

 // onSuccess: Get a snapshot of the current contacts

function onSuccess(contacts) 
    {
        // alert("Contacts found: " + contacts.length)
        for (var i = 0; i < contacts.length; i++) 
        {
            
                if(contacts[i].displayName != null && contacts[i].phoneNumbers[0] != null){
         $("#contactslist").append('<li> displayname: '+contacts[i].displayName+'</li>');
         }
      }
            $( "#contactslist" ).listview( "refresh" );
        
    }


            // onError: Failed to get the contacts
            function onError(contactError) {
                alert('onError!');
            }