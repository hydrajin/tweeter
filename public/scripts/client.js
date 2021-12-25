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

//! ------------------------------jQuery READY()------------------------------
// Shorter more concise way of saying $(document).ready(function()
$(() => {
  // Load tweets on page ready (When the entire page is loaded)
  fetchTweets();
  
  // Prevent errors from being visible when page is loaded/refreshed
  $(".error").hide();

  // Hide scroll to top button initially
  $("#bk-2-top").hide();

  // Tweet sumbission
  const $form = $("#post-tweet");
  $form.on("submit", submitTweet);

  // Double down arrow tweet toggle
  $("#dd").click(function() {
    $("#post-tweet").slideToggle(420);
    $("#tweet-text").focus();
  });
  
  // Show back to top button only when scroll bar present
  $(() => {
    $(window).scroll(function() {
      if ($(this).scrollTop()) {
        $("#bk-2-top").show();
      } else {
        $("#bk-2-top").hide();
      }
    });
  });

  // Animated scroll to top button
  $("#bk-2-top").click(function() {
    $("html").animate({
      scrollTop: 0
    }, 600);
  });
});

//! ------------------------------FETCH TWEETS------------------------------
//& GET REQUEST

const fetchTweets = () => {
  $.ajax({
    url: "/tweets",
    method: "GET",
    dataType: "JSON",
    success: (data) => {
      renderTweets(data);
    },
    error: (err) => {
      // async so handle with a callback
      console.log(err);
    }
  });
};

//! ------------------------------SUBMIT A NEW TWEET------------------------------
//& POST REQUEST

// Write a new tweet toggle
const submitTweet = function(event) {
  // Prevent the page from refreshing/redirecting on submit
  event.preventDefault();
  const serializedData = $(this).serialize();
  // Character limit length
  const tweetText = $("#tweet-text").val();
  const textLimit = tweetText.length;
  // modular error function
  const error = () => {
    $(".error").slideDown("slow");
    setTimeout(() => {
      $(".error").slideUp("slow");
    }, 1500);
  };
  // Prevent empty tweet from being submitted
  if (tweetText === "") {
    $("#error-blank").show();
    $("#error-limit").hide();
    error();
    // Prevent a long tweet from being submitted
  } else if (textLimit > 140) {
    $("#error-limit").show();
    $("#error-blank").hide();
    error();
  } else {
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: serializedData,
    }).then(function(data) {
      // Load tweet data
      fetchTweets(data);
      // clear tweet text area when tweet is submitted
      $("#tweet-text").val("");
      // reset the counter back to 140
      $("output.counter").text(140);
    }).fail((err) =>
      console.log(err)
    );
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
    // takes return value and prepends it to the tweet container
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