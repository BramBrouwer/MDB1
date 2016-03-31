
$("#loadcontacts").click(function() {
               
                console.log("contacts called");
                
                // Add item
                $("#contactslist").append('<li><a href="sms://+31612345678?body=1V1%20me%20bruh%20www.downloadlinknaaronzeapp.com/">AAAAATEST</a></li>');
                // Refresh list to update styling
                 $( "#contactslist" ).listview( "refresh" );
                
                var fields = ["displayName", "name"];
                navigator.contacts.find(fields, onSuccess, onError);
                

});

   
   
   
 

 // onSuccess: Get a snapshot of the current contacts

            function onSuccess(contacts) {
                alert("Contacts found: " + contacts.length)
                 for (var i = 0; i < contacts.length; i++) {
                    //  $("contactslist").append($("<li>".text(contacts[i].displayName)));
                     $("#contactslist").append('<li><a href="sms://+31612345678?body=1V1%20me%20bruh%20www.downloadlinknaaronzeapp.com/">'+contacts[i].displayName+'</a></li>');
                 }
                                 $( "#contactslist" ).listview( "refresh" );
                    
                   

            }

            // onError: Failed to get the contacts

            function onError(contactError) {
                alert('onError!');
            }