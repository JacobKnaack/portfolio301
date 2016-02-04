var samples = [];

function Content(prop) {
  this.title = prop.title,
  this.pubDate = prop.pubDate,
  this.url = prop.url,
  this.body = prop.body;
};

Content.prototype.toHtml = function () {
  var $portSample = $('article.template').clone();

  $portSample.find('h1').html(this.title);

  $portSample.find('time').html(this.pubDate);

  $portSample.find('.portfolio-sample').html(this.body);

  $portSample.find('a#link').attr('href', this.url);

  $portSample.removeClass('template');

  return $portSample;
};

projects.sort(function (p1, p2) {
  return(new Date(p1.pubDate)) - (new Date(p2.pubDate));
});

projects.forEach(function(sample) {
  samples.push(new Content(sample));
});

samples.forEach(function(a) {
  $('#main').append(a.toHtml());
});

$('#projects').click( function() {
  $('#main').fadeIn();

  $('#intro').hide();

  $('footer').hide();
});

$(window).scroll(function () {
  if ($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
    $('footer').fadeIn();
  } else {
    $('footer').fadeOut();
  }
});

$('#main').hide();
