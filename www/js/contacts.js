// A $( document ).ready() block.
$( document ).ready(function() {
   
   
     var options = new ContactFindOptions();
        options.filter = "Alec";
        var fields = ["displayName", "name"];
                navigator.contacts.find(fields, onSuccess, onError, options);
            

           
   
});

 // onSuccess: Get a snapshot of the current contacts

            function onSuccess(contacts) {
                for (var i = 0; i < contacts.length; i++) {
                    alert("Display Name = " + contacts[i].displayName);
                }
            }

            // onError: Failed to get the contacts

            function onError(contactError) {
                alert('onError!');
            }