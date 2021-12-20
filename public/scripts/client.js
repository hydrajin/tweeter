/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
// Test / driver code (temporary). Eventually will get this from the server.
// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227
// };

const createTweetElement = (tweet) => {
  const $tweet = 
  $(`<article class="tweet-box tweet-hov">
  <section class="header-2">
    <div class="profile-detail">
      <div class="imagename">
        <img class="avatar" src="${tweet.user.avatars}">
        <h3 class="name">${tweet.user.name}</h3>
      </div>
      <h3 class="handle">${tweet.user.handle}</h3>
  </div>
</section>
<p class="tweet">
${tweet.content.text}
</p>
<div class="tweet-break" ></div>
  <footer class="footer">
    <p>${timeago.format(tweet.created_at)}</p>
    <div class="tweet-icons">
      <i class="tweet-icon fas fa-flag"></i>
      <i class="tweet-icon fas fa-retweet"></i>
      <i class="tweet-icon fas fa-heart"></i>
    </div>
  </footer>
</article>`);

return $tweet;
};

// const $tweet = createTweetElement(tweetData);

// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// const existingTweets = $('#tweet-container');
// existingTweets.prepend($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.



// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
    "name": "Vernon Weber",
    "handle": "@Weber",
    "avatars": "https://i.imgur.com/2WZtOD6.png"
    },
    "content": {
    "text": "adsdasdas"
    },
    "created_at": 1639967862034
    },
]

const renderTweets = function(tweets) {
// loops through tweets
  for (const tweet of tweets) {
  // calls createTweetElement for each tweet
  const $newTweet = createTweetElement(tweet);
// takes return value and appends it to the tweets container
$("#tweet-container").prepend($newTweet);



// // const createTweetElement = function(tweet) {
// // let $tweet = /* Your code for creating the tweet element */
// // // ...
// return $tweet;
// }
// }
  }
}
renderTweets(data);


});

