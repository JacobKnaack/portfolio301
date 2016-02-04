
(function() {
  /* This section handles all events for styling*/
  $(document).ready(function() {
    $('#info').hide();
    $('#main').hide();
  });

  $('#projects').click( function() {
    $('#main').fadeIn();

    $('#intro').hide();

    if ($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
      $('footer').fadeIn();
    } else {
      $('footer').fadeOut();
    }
  });

  $('#about').click(function() {
    $('#main').hide();

    $('#intro').hide();
    $('#intro').fadeIn(300);

    $('p:first').text('I\'m a student at code fellows learning about website development as well as a technical communicator.');
    $('p:nth-of-type(2)').text('My skills include a proficiency with HTLM, CSS, Javascript as well as expertise in document design and technical writing.');

    if ($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
      $('footer').fadeIn();
    } else {
      $('footer').fadeOut();
    };
  });

  $('#home').click(function () {
    $('#main').hide();

    $('#intro').hide();
    $('#intro').fadeIn(300);

    $('p:first').text('Welcome back!');
    $('p:nth-of-type(2)').text('To learn more about me click the about section above, to look at my work click on projects.');

    if ($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
      $('footer').fadeIn();
    } else {
      $('footer').fadeOut();
    };
  });

  $('#title').click(function() {
    $('#banner').fadeOut(500);
    $('#info').fadeIn(500);
    $('footer').fadeIn(500);
  });
})(window);
