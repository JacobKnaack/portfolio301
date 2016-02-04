$('#about').click( function() {
  $('#main').hide();

  $('#intro').hide();
  $('#intro').fadeIn(300);

  $('p:first').text('I\'m a student at code fellows learning about website development.');

  $('p:nth-of-type(2)').text('My skills include a proficiency with HTLM, CSS, Javascript!');

  if ($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
    $('footer').fadeIn();
  } else {
    $('footer').fadeOut();
  }
});
