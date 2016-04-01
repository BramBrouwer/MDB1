


$(document).on("pageinit","#homepage", function(){

// Load previously entered values from local storage
   var val1 = window.localStorage.getItem("name_1");
   var val2 = window.localStorage.getItem("name_2");
    if(val1 != null)
    {
    $('input[name="s1"]').val(val1);
    }
    if(val2 != null)
    {
    $('input[name="s2"]').val(val2);
    }

//   Listen for keyup in input fields, save values to local storage
  $('#s1').keyup(function() {
  window.localStorage.setItem("name_1", $('input[name="s1"]').val());
  });
   $('#s2').keyup(function() {
  window.localStorage.setItem("name_2", $('input[name="s2"]').val());
  });

});


