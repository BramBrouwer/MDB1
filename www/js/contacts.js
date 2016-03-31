
$("#contactstest").click(function() {
                alert("knop");
                //  var options = new ContactFindOptions();
                // options.filter = "Bob";
                var fields = ["displayName", "name"];
                navigator.contacts.find(fields, onSuccess, onError);
                

});

   
   
   
 

 // onSuccess: Get a snapshot of the current contacts

            function onSuccess(contacts) {
                // for (var i = 0; i < contacts.length; i++) {
                //     alert("Display Name = " + contacts[i].displayName);
                // }
                    alert('Found ' + contacts.length + ' contacts.');

            }

            // onError: Failed to get the contacts

            function onError(contactError) {
                alert('onError!');
            }