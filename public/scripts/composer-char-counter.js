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
    // if all 140 characters are used up
    limit < 0 ?
    // change counter to css class limit which is red
      $("output.counter").addClass("limit") :
    // else remove class if 140 characters aren't used
      $("output.counter").removeClass("limit");
  });
});

// if (limit < 0) {
//   // Find other method to use!
//   $("output.counter").addClass("limit");
//   // console.log("LIMIT EXCEEDED");
// } else {
//   $("output.counter").removeClass("limit");
// }
// });
// });


//     // if all 140 characters are used up
//     if (limit < 0) {
//       // Find other method to use!
//       charCounter.css("color", "#DC143C");
//       // console.log("LIMIT EXCEEDED");
//     } else {
//       charCounter.css("color", "#6B6B6B");
//     }
//   });
// });
