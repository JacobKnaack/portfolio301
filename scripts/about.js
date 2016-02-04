
$('#about').click( function() {
  $('#main').hide();

  $('#intro').show();

  $('p:first').text("I'm a student at code fellows learning about website development.");

  $('p:nth-of-type(2)').text("My skills include a proficiency with HTLM, CSS, Javascript!")
});
