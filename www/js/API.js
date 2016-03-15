$( document ).ready(function() {
    this.baseURL = 'https://euw.api.pvp.net';
    this.typeURL;
    this.APIKey = '?api_key=15dfe91d-08ef-4fc9-a622-8d76c79c1ec5';

    function getSummonerData(sumName, region){
        this.typeURL = '/api/lol/' + region + '/v1.4/summoner/by-name/' + sumName + this.APIKey;
        this.xhr = new XMLHttpRequest();
        this.xhr.open("GET", this.baseURL + this.typeURL, false);
        this.xhr.send(null);
        this.raw =  JSON.parse(this.xhr.responseText);
        this.data = this.raw[sumName.toLowerCase()];
        $('#name').append('<p>' + this.data['name'] + '</p>');
    }
});