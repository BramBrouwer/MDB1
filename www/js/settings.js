$(document).on("pagebeforeshow","#settingspage", function(){
    var color = window.localStorage.getItem("pref_color");
    var region = window.localStorage.getItem("pref_region");
    var lang = window.localStorage.getItem("pref_lang");
    var selected, label;
console.log(region);
    switch(color){
        case 'day':
            $('input[id=day]').attr('checked', true);
            break;
        case 'night':
            $('input[id=night]').attr('checked', true);
            break;
        default:
            $('input[id=night]').attr('checked', true);
            break;
    }
    switch(region){
        case null:
            $('input[value=euw]').attr('selected', 'selected');
            break;
        default:
            label = $('#regionlist-button span');
            selected = $('option[value=' + region + ']');
            selected.attr('selected', 'selected');
            console.log(selected.text());
            label.text(selected.text());
            break;
    }
    switch(lang){
        case 'eng':
            $('input[id=eng]').attr('checked', true);
            break;
        case 'nl':
            $('input[id=nl]').attr('checked', true);
            break;
        default:
            $('input[id=eng]').attr('checked', true);
            break;
    }

})
    function saveSettings(){
        var form = $('form#settingsform');
        var color =  form.find('input[name=colors]:checked').attr('id');
        var region = form.find('option[name=region]:selected').attr('value');
        var lang =  form.find('input[name=lang]:checked').attr('id');
        console.log('test');
        window.localStorage.setItem("pref_color", color);
        window.localStorage.setItem("pref_region", region);
        window.localStorage.setItem("pref_lang", lang);
    }