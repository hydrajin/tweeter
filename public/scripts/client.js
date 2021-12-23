/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
/* eslint-env jquery */
/* eslint-env browser */
/* global timeago */

// Implement escape text function to prevent XSS (Cross Site Scripting)
const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// $(document).ready(function () {
// Shorter more concise way of saying .ready
$(() => {
  // Load tweets on page ready (When the entire page is loaded)
  
  fetchTweets();

  const $form = $("#post-tweet");
  $form.on("submit", submitTweet);

});

// $.getJSON("/tweets", function() {
//! I used this JQUERY  function (Andy AJAX lecture 00:10:00 to test if tweets.JSON data would work)
// So far, all the data loads and new tweets appear when page is refreshed...

//! ------------------------------FETCH TWEETS------------------------------
// GET REQUEST
const fetchTweets = () => {
  $.ajax({
    url: "/tweets",
    method: "GET",
    // data: JSON.stringify,
    dataType: "JSON",
    success: (data) => {
      // console.log(data);
      renderTweets(data);
      
    },
    error: (err) => {
      // async so handle with a callback
      console.log(err);
    }
  });
};

//! ------------------------------SUBMIT A NEW TWEET------------------------------
//POST REQUEST
const submitTweet = function(event) {
  // Prevent the page from refreshing/redirecting on submit
  event.preventDefault();

  // console.log("The form was submitted");

  const serializedData = $(this).serialize();
  // console.log("Serialized Data", serializedData);


  const tweetText = $("#tweet-text").val();
  const textLimit = tweetText.length;

  // Prevent empty tweet from being submitted
  if (tweetText === "") {
    alert("Empty Tweet!");
  // Prevent a long tweet from being submitted
  } else if (textLimit > 140) {
    alert("Tweet is too long!");
  } else {
 
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: serializedData,

    }).then(function(data) {
      console.log("Sucessful tweet!", data);
      // Load tweet data
      fetchTweets(data);
 

      // clear tweet text area when tweet is submitted
      $("#tweet-text").val("");
      // reset the counter back to 140
      $("output.counter").text(140);

    }).fail((err) =>
      console.log(err)
    );

  // fetchTweets();
  }
};
//! ------------------------------RENDER TWEETS------------------------------

const renderTweets = function(tweets) {
  const $tweetContainer = $("#tweet-container");
  // empty before iterating
  $tweetContainer.empty();
  // loops through tweets
  for (const tweet of tweets) {
    // calls createTweetElement for each tweet
    const $newTweet = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $tweetContainer.prepend($newTweet);
  }
};

//! ------------------------------CREATE TWEET ELEMENT------------------------------

const createTweetElement = (tweet) => {
  const $tweet = $(`<article class="tweet-box tweet-hov">
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
  ${escape(tweet.content.text)}
</p>
<div class="tweet-break"></div>
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