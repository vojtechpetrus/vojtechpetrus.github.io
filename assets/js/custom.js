
//instafeed

$(document).ready(function() {
      var userFeed = new Instafeed({
        get: 'user',
        userId: '4619679958',
        accessToken: '4619679958.1677ed0.ec916d812190469daae40a3567b4dd5f',
        resolution: 'standard_resolution',
        template: '<a href="{{link}}" target="_blank" id="{{id}}" class="col-10 col-sm-5 col-md-4 mb-3"><div class="card border-0 shadow-sm card-shadow"><img class="card-img-top mh-100" src="{{image}}" alt="Card image cap"><div class="card-body"><p class="card-text">{{caption}}</p></div></div></a>',
        sortBy: 'most-recent',
        limit: 6,
        links: false
      });
      userFeed.run();
    


// <div class="col-3 gallery"> <a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" class="img-fluid align-center"><span>{{caption}}</span></a></div>'

//twitterfetch

 /*var configProfile = {
    "profile": {"screenName": 'hiveurbanfarms'},
    "domId": 'twitter-posts',
    "maxTweets": 4,
    "enableLinks": true, 
    "showUser": true,
    "showTime": true,
    "showImages": true,
    "lang": 'en',
  };

  twitterFetcher.fetch(configProfile); */

  
  var config8 = {
    "profile": {"screenName": 'hiveurbanfarms'},
    "dataOnly": true,
    "maxTweets": 6,
    "customCallback": populateTpl
  };
  
  twitterFetcher.fetch(config8);

  function populateTpl(tweets){
    var element = document.getElementById('twitter-posts');
    var html = '<div id="columns">';
    for (var i = 0, lgth = tweets.length; i < lgth ; i++) {
      var tweetObject = tweets[i];
      html += '<div class="row tweet p-2 mr-lg-3 mb-3"><a href="' + tweetObject.permalinkURL + '">'
        + (tweetObject.image ? '<div class="tweet-img"><img src="'+tweetObject.image+'" /></div>' : '')
        + '<div class="name-width"><p>' + tweetObject.author + '</p></div>'
        + '<div class="padding73"><p class="tweet-content">' + tweetObject.tweet + '</p></div>'
        + '<div class="tweet-time"><p>' + tweetObject.time + '</p></div>'
      + '</a></div>';
    }
    html += '</div>';
    element.innerHTML = html;
  } 

  
});








