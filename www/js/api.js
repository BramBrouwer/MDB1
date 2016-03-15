    this.baseURL = 'https://euw.api.pvp.net';
    this.typeURL;
    this.APIKey = '?api_key=15dfe91d-08ef-4fc9-a622-8d76c79c1ec5';
// Probleem: data die deze methode ophaalt kan niet gereturned worden naar een andere methode.
 this.getSummonerData = function(sumName, region){
        this.typeURL = '/api/lol/' + region + '/v1.4/summoner/by-name/' + sumName + this.APIKey;
        $.get(this.baseURL + this.typeURL, function(response) {
            if(this.sumData = response[sumName.toLowerCase()]){
              console.log(this.sumData);
             return this.sumData;
            }
            else{
                return "invalid name";
            }
        });

    }