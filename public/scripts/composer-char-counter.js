// waits for document to be ready 
$(document).ready(function() { 

  $('textarea').keyup(function() {
    
    let count = $(this).val().length;
// counts the limitations of message size.
    if (count <= 140) {
      $(this)
        .closest(".new-tweet")
        .find(".counter")
        .removeClass("negative-count")
        .text(140 - count);
    } else {
      $(this)
        .closest(".new-tweet")
        .find(".counter")
        .addClass("negative-count")
        .text(140 - count);
    }
  });
  // adding states of toggle button for getting to the top of the window
  const buttonToTriggerScroll = '.scroll-to-top button';
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      $(buttonToTriggerScroll).fadeIn();
    } else {
      $(buttonToTriggerScroll).fadeOut();
    }
  });
// adding behavior to get to the top by clicking the toggle button
  $(buttonToTriggerScroll).click(function() {
    $(window).scrollTop(0);
    if ($('.new-tweet').is(':hidden')) {
      $('.new-tweet').show();
    }
    $('textarea').focus();
  });
});