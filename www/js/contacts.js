//todo hide list before loading contacts
//show laoder while loading contacts
//remove loader and show list on contacts loaded
$("#loadcontacts").click(function() {
    
                // $( "#contactslist" ).hide();
                meme();
                // $( "#contactsloader" ).show();
                //  $("#contactslist").append('<li><a href="sms://+31612345678?body=1V1%20me%20bruh%20www.downloadlinknaaronzeapp.com/">AAAAATEST</a></li>');
                //  $( "#contactslist" ).listview( "refresh" );
                //  $( "#contactslist" ).show();
                
                // var fields = ["displayName", "name","phoneNumbers"];
                // navigator.contacts.find(fields, onSuccess, onError);            

});

   
   
   
 

 // onSuccess: Get a snapshot of the current contacts

function onSuccess(contacts) 
    {
        var arr = [];
        for (var i = 0; i < contacts.length; i++) 
        {
                if(contacts[i].displayName != null && contacts[i].phoneNumbers != null && contacts[i].phoneNumbers[0] != null)
                {
                    //first loop trough all contacts, add them to an array
                        var arrContact = new Contact(contacts[i].displayName,contacts[i].phoneNumbers[0].value);
                        arr.push(arrContact);
                        // arrContact.name = contacts[i].displayName;
                        // arrContact.phone = contacts[i].phoneNumbers[0].value;
                        // arr.push(name: 'Henk', number: 4654654654);
                        // $("#contactslist").append('<li><a href="sms://'+phone+'?body=1V1%20me%20bruh%20www.downloadlinknaaronzeapp.com/">'+name+'</a></li>');
                }      
      }
       //sort the array on name 
        arr.sort(function (a, b) {
             if (a.name > b.name) {
                return 1;
             }
             if (a.name < b.name) {
               return -1;
               }
             // a must be equal to b
                return 0;
            });
   
   //array sorted
    for (var i = 0; i < arr.length; i++) 
        {
            $("#contactslist").append('<li><a href="sms://'+arr[i].nr+'?body=1V1%20me%20bruh%20www.downloadlinknaaronzeapp.com/">'+arr[i].name+'</a></li>');
        }
   
   
      
       $( "#contactsloader" ).hide();
       $( "#contactslist" ).listview( "refresh" );
       $( "#contactslist" ).show();
    }
    
    
//     function meme()
//     {
//         console.log('hallo?');
//             var arr = [];
//             var a = new Contact("ccc",48644);
//                        var b = new Contact("aaa",48644);
//                                    var c = new Contact("bbb",48644);
//             arr.push(a);
//             arr.push(b);
//             arr.push(c);
            
//             arr.sort(function (a, b) {
//   if (a.name > b.name) {
//     return 1;
//   }
//   if (a.name < b.name) {
//     return -1;
//   }
//   // a must be equal to b
//   return 0;
// });

// console.log(arr);
//     }
    
    function Contact(name, nr) {
    this.name = name;
    this.nr = nr;
    
}
    
  

            // onError: Failed to get the contacts
            function onError(contactError) {
                alert('onError!');
            }