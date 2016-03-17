(function(module) {
  function Portfolio(prop) {
    this.title = prop.title,
    this.pubDate = prop.pubDate,
    this.url = prop.url,
    this.img = prop.img,
    this.body = prop.body;
  };

  Portfolio.prototype.toHtml = function () {
    var compileProject = Handlebars.compile($('#project-template').html());
    var html = compileProject(this);

    return html;
  };

  //working on json ajax request functions
  Portfolio.all = [];

  Portfolio.load = function(projects) {
    projects.sort(function(p1, p2) {
      return(new Date(p1.pubDate)) - (new Date(p2.pubDate));
    });

    projects.map(function(sample) {
      Portfolio.all.push(new Portfolio(sample));
    });
  };

  Portfolio.fetch = function() {
    if (localStorage.projects) {
      Portfolio.load(JSON.parse(localStorage.projects));
      renderProjects.show();//function to render the page
    } else {
      $.getJSON('/data/projects.json', function(projects) {
        Portfolio.load(projects);
        localStorage.projects = JSON.stringify(projects);
        renderProjects.show();//call function again to render the page
      });
    }
  };

  module.Portfolio = Portfolio;
})(window);
