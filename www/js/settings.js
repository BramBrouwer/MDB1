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
    return false;   
}

// Update data theme
$(document).on("pagebeforechange", function () {
    var theme = window.localStorage.getItem("pref_color");
    switch(theme){
        default:
            $.mobile.changeGlobalTheme('b');
            break;
        case 'day':
            $.mobile.changeGlobalTheme('a');
            break;
        case 'night':
            $.mobile.changeGlobalTheme('b');
            break;
    }
    
});

	$.mobile.changeGlobalTheme = function (theme) {
		// These themes will be cleared, add more
		// swatch letters as needed.
		var themes = " a b";

		// Updates the theme for all elements that match the
		// CSS selector with the specified theme class.
		function setTheme(cssSelector, themeClass, theme) {
			$(cssSelector)
			.removeClass(themes.split(" ").join(" " + themeClass + "-"))
			.addClass(themeClass + "-" + theme)
			.attr("data-theme", theme);
		}

		// Add more selectors/theme classes as needed.
		setTheme(".ui-mobile-viewport", "ui-overlay", theme);
		setTheme("[data-role='page']", "ui-body", theme);
        setTheme("[data-role='main']", "ui-body", theme);
		setTheme("[data-role='header']", "ui-bar", theme);
		setTheme("[data-role='listview'] > li", "ui-bar", theme);
        setTheme("[data-role='collapsible']", "ui-collapsible", theme);
		setTheme("[data-role='controlgroup'] > li", "ui-bar", theme);
		setTheme(".ui-btn", "ui-btn-up", theme);
		setTheme(".ui-btn", "ui-btn-hover", theme);
	};

// Update data theme