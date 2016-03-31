
$("#loadcontacts").click(function() {
               
                console.log("contacts called");
                var fields = ["displayName", "name"];
                navigator.contacts.find(fields, onSuccess, onError);
                

});

   
   
   
 

 // onSuccess: Get a snapshot of the current contacts

            function onSuccess(contacts) {
                alert("Contacts found: " + contacts.length)
                 for (var i = 0; i < contacts.length; i++) {
                     $("contactslist").append($("<li>".text(contacts[i].displayName)));
                 }
                    
                   

            }

            // onError: Failed to get the contacts

            function onError(contactError) {
                alert('onError!');
            }