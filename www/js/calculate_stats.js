// CalculateStats
function getSummonerStats(sumstats){
    var summonerstats = { 'CS': 0, 'Champion_Kills': 0, 'Assists': 0, 'Turret_Kills': 0, 'Wins': 0 };

    sumstats.forEach(function(entry){
        switch(entry['playerStatSummaryType']) { //Set stats
            case 'CoopVsAI':
                var coopvsai = entry['aggregatedStats'];
                break;
            case 'OdinUnranked':
                break;
            case 'RankedTeam3x3':
                var ranked3 = entry['aggregatedStats'];
                break;
            case 'RankedTeam5x5':
                var ranked5 = entry['aggregatedStats'];
                break;
            case 'Unranked3x3':
                var unranked3 = entry['aggregatedStats'];
                summonerstats['CS'] += unranked3['totalMinionKills'];
                summonerstats['CS'] += unranked3['totalNeutralMinionsKilled'];
                summonerstats['Champion_Kills'] += unranked3['totalChampionKills'];
                summonerstats['Assists'] += unranked3['totalAssists'];
                summonerstats['Turret_Kills'] += unranked3['totalTurretsKilled'];
                summonerstats['Wins'] += entry['wins'];
                break;
            case 'CAP5x5':
                var teambuilder = entry['aggregatedStats'];
                summonerstats['CS'] += teambuilder['totalMinionKills'];
                summonerstats['CS'] += teambuilder['totalNeutralMinionsKilled'];
                summonerstats['Champion_Kills'] += teambuilder['totalChampionKills'];
                summonerstats['Assists'] += teambuilder['totalAssists'];
                summonerstats['Turret_Kills'] += teambuilder['totalTurretsKilled'];
                summonerstats['Wins'] += entry['wins'];
                break;
            case 'AramUnranked5x5':
                var aram = entry['aggregatedStats'];
                break;
            case 'Unranked':
                var unranked = entry['aggregatedStats'];
                summonerstats['CS'] += unranked['totalMinionKills'];
                summonerstats['CS'] += unranked['totalNeutralMinionsKilled'];
                summonerstats['Champion_Kills'] += unranked['totalChampionKills'];
                summonerstats['Assists'] += unranked['totalAssists'];
                summonerstats['Turret_Kills'] += unranked['totalTurretsKilled'];
                summonerstats['Wins'] += entry['wins'];
                break;
            case 'RankedSolo5x5':
                var rankedsolo = entry['aggregatedStats'];
                break;
            default:   
                break;
        }
    });
    return summonerstats;
}

function calculateStats(sum1stats, sum2stats){
    var stats = {'Unranked': null }
    
    var sum1unrankedStats = getSummonerStats(sum1stats);
    var sum2unrankedStats = getSummonerStats(sum2stats); 

    stats['Unranked1'] = sum1unrankedStats;
    stats['Unranked2'] = sum2unrankedStats;
    setStatTable(stats);
    $('#loader').hide();    
    $('.stats_table').show();
}

function setStatTable(stats){
    var unranked1 = stats['Unranked1'];
    var unranked2 = stats['Unranked2'];

    $('.stats_table thead #sum1').text(window['name1']);
    $('.stats_table tbody #CS .sum1').text(unranked1['CS']);
    $('.stats_table tbody #Champion_Kills .sum1').text(unranked1['Champion_Kills']);
    $('.stats_table tbody #Assists .sum1').text(unranked1['Assists']);
    $('.stats_table tbody #Turret_Kills .sum1').text(unranked1['Turret_Kills']);
    $('.stats_table tbody #Wins .sum1').text(unranked1['Wins']);

    $('.stats_table thead #sum2').text(window['name2']);
    $('.stats_table tbody #CS .sum2').text(unranked2['CS']);
    $('.stats_table tbody #Champion_Kills .sum2').text(unranked2['Champion_Kills']);
    $('.stats_table tbody #Assists .sum2').text(unranked2['Assists']);
    $('.stats_table tbody #Turret_Kills .sum2').text(unranked2['Turret_Kills']);
    $('.stats_table tbody #Wins .sum2').text(unranked2['Wins']);

    }


    



//   CAP 5x5 + unranked + 3v3 undraked = totale normal stats
// 			-Creep score 
// 			-championkills
// 			-assists
// 			-turrets killed
// 			-wins


function resetScore(){
    $('.stats_table td').removeClass('winner');
    $('.stats_table td').removeClass('loser');
    $('.stats_table thead th').removeClass('winner');
    $('.stats_table thead th').removeClass('loser');
    $('.stats_table tr').removeClass('selected');
    $('.stats_table thead #score').text('Score: 0 - 0');
}
function redrawScore(){
    var score = $('.stats_table thead #score');
    var sum1score = $('td.sum1.winner');
    var sum2score = $('td.sum2.winner');
    var sum1name = $('thead #sum1');
    var sum2name = $('thead #sum2');    
    
    score.text('Score: ' + sum1score.size() + ' - ' + sum2score.size());
    if(sum1score.size() > sum2score.size() && !sum1name.hasClass('winner')){
        sum1name.toggleClass('winner');
        sum2name.toggleClass('loser');
    }
    else  if(sum2score.size() > sum1score.size() && !sum2name.hasClass('winner')){
        sum2name.toggleClass('winner');
        sum1name.toggleClass('loser');
    }
    else if(sum2score.size() == sum1score.size()){
        sum1name.removeClass('winner');
        sum2name.removeClass('winner');
        sum1name.removeClass('loser');
        sum2name.removeClass('loser');
    }
}

$('tbody tr').on('touchstart', function(){
    console.log('test');
    var row = $(this);
    var sum1cell = row.find('td.sum1');
    var sum2cell = row.find('td.sum2');
    
    if(sum1cell.text() == Math.max(sum1cell.text(), sum2cell.text())){
        sum1cell.toggleClass('winner');
        sum2cell.toggleClass('loser');
    }
    else if(sum2cell.text() == Math.max(sum1cell.text(), sum2cell.text())){
        sum2cell.toggleClass('winner');
        sum1cell.toggleClass('loser');
    }
    row.toggleClass('selected');
    redrawScore();
});