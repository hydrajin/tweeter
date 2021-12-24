//! jQuery
/* eslint-env jquery */
/* eslint-env browser */

$(document).ready(function() {

  //* Use input for textarea

  $("#tweet-text").on("input", function() {

    const text = this.value.length;
    const remainingChar = 140;
    const updatedCounter = remainingChar - text;
    
    $(".counter").html(updatedCounter);

    updatedCounter < 0 ?
      $(".counter").addClass("limit") :
      $(".counter").removeClass("limit");
  });
});