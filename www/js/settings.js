$(document).on("pagebeforeshow","#settingspage", function(){
    var color = window.localStorage.getItem("pref_color");
    var region = window.localStorage.getItem("pref_region");
    var lang = window.localStorage.getItem("pref_lang");
    
    switch(color){
        case 'day':
            $('input[id=day]').attr('checked', true).checkboxradio('refresh');
            break;
        case 'night':
            $('input[id=night]').attr('checked', true).checkboxradio('refresh');
            break;
        default:
            $('input[id=night]').attr('checked', true).checkboxradio('refresh');
            break;
    }
    switch(region){
        case null:
            $("select#regionlist").val('euw').selectmenu("refresh");
            $('input[value=euw]').attr('selected', 'selected');
            break;
        default:
            $("select#regionlist").val(region).selectmenu("refresh");
            $('input[value='+ region +']').attr('selected', 'selected');
            break;
    }
    switch(lang){
        case 'eng':
            $('input[id=eng]').attr('checked', true).checkboxradio('refresh');
            break;
        case 'nl':
            $('input[id=nl]').attr('checked', true).checkboxradio('refresh');
            break;
        default:
            $('input[id=eng]').attr('checked', true).checkboxradio('refresh');
            break;
    }

})
    function saveSettings(){
        var form = $('form#settingsform');
        var color =  form.find('input[name=colors]:checked').attr('id');
        var region = form.find('option[name=region]:selected').attr('value');
        var lang =  form.find('input[name=lang]:checked').attr('id');
        
        window.localStorage.setItem("pref_color", color);
        window.localStorage.setItem("pref_region", region);
        window.localStorage.setItem("pref_lang", lang);
        $('#regionlist').selectmenu('refresh');
    }