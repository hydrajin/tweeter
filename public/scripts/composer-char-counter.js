// document.addEventListener("dblclick", (e) => {
//   let cursorX = e.pageX;
//   let cursorY  = e.pageY;
//   alert(document.innerHTML = `x: ${cursorX}, y:  ${cursorY}`);
// });

//! jQuery
// A $( document ).ready() block.
$(document).ready(function() {
  // console.log("ready!");
  // addEventListener("keypress", (event) => {
  //   console.log(event);

  // });

  //* Use input for textarea

  // any input
  $("#tweet-text").on("input", function() {
    // console.log(this);
    // this referes to the tweet-text id of the counter
    // const charInput = this.value.length;
    const charInput = $(this).val().length;
    // if (charInput < 140) {
    //   // text.css('color', 'red');
    //   console.log("DUDE");
    // }
    const remainingChar = 140;
    const charCounter = $("output.counter");
    // console.log(charCounter);

    const limit = remainingChar - charInput;
    charCounter.text(limit);
    if (limit < 0) {
      // Find other method to use!
      charCounter.css('color', 'red');
      console.log("LIMIT EXCEEDED");
    }

  });
});
