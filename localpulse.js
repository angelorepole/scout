// $(document).ready(function(){
   $(function(){

//keywords = "police fire+death+carnage+riot+crash+smoke+ambulance+accident+protest";
var keywords = "police OR fire OR death OR carnage OR riot OR crash OR smoke OR ambulance OR accident OR protest"
//var location = " oxford";
var location = "oxford OR oxfordshire OR banbury OR m40 OR abingdon OR bicester OR botley OR henley OR chipping%40norton OR osney OR milton"
//var exclude = " -Paul%40Merson -Merse's"
var from = "from:angelorep OR from:manix_kalv OR ";


$.getJSON('http://search.twitter.com/search.json?q=' + from + keywords + '%20' +location + '&rpp=100&callback=?', function (data) {
    //  console.log(data.results);
var tweet, cutHttp, retweet;
var result = [];
console.log(data.results);

    $.each(data.results, function(k, v){

        var cssClass = '';
        cutHttp = v.text.indexOf('http');
        tweet = (cutHttp > 0) ? v.text.substring(0, cutHttp) : v.text;
        tweet = $.trim(tweet);
        if (tweet != retweet) {
            if (v.from_user == 'angelorep' || v.from_user == 'manix_kalv') {
                cssClass = 'highlight';
            }
            result += '<li class="' + cssClass + '"><img src="' + v.profile_image_url + '" width="48px" height="48px">' + tweet + '</li>';
        }
        retweet = tweet;
    });
    $('#results').html('<ul>' + result + '</ul>');

});
 });