
$(document).on("pagebeforeshow","#homepage", function(){
    console.log("homepage before show called");
    var lang = window.localStorage.getItem("pref_lang");
    setHomepage(lang);
});

$(document).on("pagebeforeshow","#contactspage", function(){
    var lang = window.localStorage.getItem("pref_lang");
    setContacts(lang);
});

$(document).on("pagebeforeshow","#settingspage", function(){
    var lang = window.localStorage.getItem("pref_lang");
    setSettings(lang);
});


function setHomepage(lang){
    var strings;
    if(lang == 'eng'){
        strings = 
        {
            home_compare: "Enter 2 names to compare",
            placeholder:  "Summoner name...",
            challenge_button: "Challenge a friend",
            settings_button: 'Settings'
        };
    }
    else if(lang == 'nl'){
        strings =
        {
            home_compare: "Vul 2 namen in om te vergelijken",
            placeholder:  "Summoner naam...",
            challenge_button: "Daag een vriend uit",
            settings_button: 'Instellingen'
        };        
    }

    // Set text
    $("#home_compare").text(strings.home_compare);
    $("#s1").attr("placeholder", strings.placeholder);
    $("#s2").attr("placeholder", strings.placeholder);
    $("#challenge_button").text(strings.challenge_button);
    $("#settings_button").text(strings.settings_button);
}

function setContacts(lang){
    var strings;
    if(lang == 'eng'){
        strings = 
        {
            header: "Contacts",
            back_button:  "back",
            contacts_button: "load contacts"
        };
    }
    else if(lang == 'nl'){
        strings = 
        {
            header: "Contacten",
            back_button:  "terug",
            contacts_button: "laad contacten"
        };
    }

    // Set text
    $("#contacts_header").text(strings.header);
    $("#back_button").text(strings.back_button);
    $("#loadcontacts").text(strings.contacts_button);
}

function setSettings(lang){
    if(lang == 'eng'){
        strings = 
        {
            theme: 'Theme',
            day:    'Day',
            night:  'Night',
            region: 'Region',
            language: 'Language',
            confirmbutton: 'Save',
            backbutton: 'Back',
            header: 'Settings'
        } 
    }
    else if(lang == 'nl'){
        strings = 
        {
            theme: 'Thema',
            day:    'Dag',
            night:  'Nacht',
            region: 'Regio',
            language: 'Taal',
            confirmbutton: 'Opslaan',
            backbutton: 'Terug',
            header: 'Instellingen'
        }
    }
    
    $('label[for=day]').text(strings.day);
    $('label[for=night]').text(strings.night);
    $('#themetext a').text(strings.theme);
    $('#regiontext a').text(strings.region);
    $('#langtext a').text(strings.language);
    $('button#settingssavetext').text(strings.confirmbutton);
    $('a#settingsbacktext').text(strings.backbutton);
    $('#headertext').text(strings.header);
    
}
