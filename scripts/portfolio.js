var samples = [];

function Content(prop) {
  this.title = prop.title,
  this.pubDate = prop.pubDate,
  this.url = prop.url,
  this.img = prop.img,
  this.body = prop.body;
};

Content.prototype.toHtml = function () {
  var projectTemplate = $('#project-template').html();
  var compileProject = Handlebars.compile(projectTemplate);
  var html = compileProject(this);

  return html;
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
