function verifySummoners(){
    var sum1;
    var sum2;
    
    var region = window.localStorage.getItem('pref_region');
    if(region == undefined){
        console.log('region is undefined');
        region = 'euw';
    }

    var typeURL1 = '/api/lol/' + region + '/v1.4/summoner/by-name/' + name1 +'?' +APIKey;
    var typeURL2 = '/api/lol/' + region + '/v1.4/summoner/by-name/' + name2 +'?' +APIKey;
    

   //first ajax call, verify the first summoner name given
    $.ajax({
        url: baseURL+typeURL1, 
        success: function(data1)
        {   //First name verified
            sum1 = data1;
            
            $.ajax({    //second ajax call, verify second name
                url: baseURL+typeURL2, 
                success: function(data2)
                {   //Second name verified
                    sum2 = data2;
                    $('input[type="submit"]').prop('disabled', false);
                    console.log(sum1, sum2);
                    getStatsNormal(sum1,sum2,region);
                },
                //Second name 404
                error : function(error)
                {
                    console.log(error);
                     $('#loader').hide();
                    errorpopup(name2);
                    $('input[type="submit"]').prop('disabled', false);    
                }
            });
        },
        //First name 404    
        error : function(error) 
        {
            console.log(error);
            $('#loader').hide();
            errorpopup(name1);
            $('input[type="submit"]').prop('disabled', false);
            
        }      
    });
}





function getStatsNormal(sum1,sum2,region){
   
    var summoner1stats;
    var summoner2stats;
    var typeURL1 = '/api/lol/' + region + '/v1.3/stats/by-summoner/' + sum1[name1].id +'/summary?season=SEASON2016&'+APIKey;
    var typeURL2 = '/api/lol/' + region + '/v1.3/stats/by-summoner/' + sum2[name2].id +'/summary?season=SEASON2016&'+APIKey;
    
    $.ajax({
        url: baseURL+typeURL1, 
        success: function(data1)
        {           
            summoner1stats = data1['playerStatSummaries'];
            $.ajax({
                url: baseURL+typeURL2, 
                success: function(data2)
                {    
                    summoner2stats = data2['playerStatSummaries'];
                    calculateStats(summoner1stats, summoner2stats);
                }, 
                error : function(error) 
                {
                    console.log(error);
                }
            });             
        },         
        error : function(error) 
        {
            console.log(error);        
        }
    });
}
