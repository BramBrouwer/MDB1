

$(document).on("pagebeforeshow","#homepage", function(){
  console.log("homepage before show called");
  var a = window.localStorage.getItem("pref_lang");
   switch(a) {
    case null:
        homepage_eng();
        break;
    case "eng":
        homepage_eng();
        break;
    case "nl":
        homepage_nl();
   }
});

$(document).on("pagebeforeshow","#contactspage", function(){
    
   var a = window.localStorage.getItem("pref_lang");
   
   switch(a) {
    case null:
        contacts_eng();
        break;
    case "eng":
        contacts_eng();
        break;
    case "nl":
        contacts_nl();
   }
});

$(document).on("pagebeforeshow","#settingspage", function(){
    
   var a = window.localStorage.getItem("pref_lang");
   
   switch(a) {
    case null:
        settings_eng();
        break;
    case "eng":
        settings_eng();
        break;
    case "nl":
        settings_nl();
   }
});


function homepage_eng(){
 
  var eng_strings = 
  {
    home_compare: "Enter 2 names to compare",
    placeholder:  "Summoner name...",
    challenge_button: "Challenge a friend",
    settings_button: 'Settings'
  };
    // Set text
    $("#home_compare").text(eng_strings.home_compare);
    $("#s1").attr("placeholder", eng_strings.placeholder);
    $("#s2").attr("placeholder", eng_strings.placeholder);
    $("#challenge_button").text(eng_strings.challenge_button);
    $("#settings_button").text(eng_strings.settings_button);
}

function homepage_nl(){
    
    var nl_strings = 
    {
    home_compare: "Vul 2 namen in om te vergelijken",
    placeholder:  "Summoner naam...",
    challenge_button: "Daag een vriend uit",
    settings_button: 'Instellingen'
    };
    // Set text
    $("#home_compare").text(nl_strings.home_compare);
    $("#s1").attr("placeholder", nl_strings.placeholder);
    $("#s2").attr("placeholder", nl_strings.placeholder);
    $("#challenge_button").text(nl_strings.challenge_button);
    $("#settings_button").text(nl_strings.settings_button);
}

function contacts_eng(){
 
  var eng_strings = 
  {
    header: "Contacts",
    back_button:  "back",
    contacts_button: "load contacts"
  };
    // Set text
   $("#contacts_header").text(eng_strings.header);
   $("#back_button").text(eng_strings.back_button);
   $("#loadcontacts").text(eng_strings.contacts_button);
}

function contacts_nl(){
    
  var nl_strings = 
  {
    header: "Contacten",
    back_button:  "terug",
    contacts_button: "laad contacten"
  };
    // Set text
   $("#contacts_header").text(nl_strings.header);
   $("#back_button").text(nl_strings.back_button);
   $("#loadcontacts").text(nl_strings.contacts_button);
}

function settings_nl(){
    var nl_strings = 
    {
        theme: 'Thema',
        day:    'Dag',
        night:  'Nacht',
        region: 'Regio',
        language: 'Taal',
    }
    $('label[for=day]').text(nl_strings.day);
    $('label[for=night]').text(nl_strings.night);
    $('#themetext a').text(nl_strings.theme);
    $('#regiontext a').text(nl_strings.region);
    $('#langtext a').text(nl_strings.language);
}
function settings_eng(){
    var eng_strings = 
    {
        theme: 'Theme',
        day:    'Day',
        night:  'Night',
        region: 'Region',
        language: 'Language',
    }
    $('label[for=day]').text(nl_strings.day);
    $('label[for=night]').text(nl_strings.night);
    $('#themetext a').text(eng_strings.theme);
    $('#regiontext a').text(eng_strings.region);
    $('#langtext a').text(eng_strings.language);
}
