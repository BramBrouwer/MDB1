  function nav_to_movies()
{
 window.location = "movies.html";
}

  function nav_to_series()
{
 window.location = "series.html";
}

  function nav_to_cartoons()
{
//  window.location = "cartoons.html";
 $.mobile.pageContainer.pagecontainer("change", "movies.html", {transition: "slide"});
}


// var category_data;
// $(document).ready(function () {
//     $('#search_category_form').bind('submit', function(){
//         var form = $('#search_category_form');
//         var data = form.serialize();

//         $.post('index.html', data, function(){
//             category_data = data; 
//             window.location.href = 'index.html#search_general';
//         });

//         return false;
//     });        