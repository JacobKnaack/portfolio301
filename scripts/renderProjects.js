(function(module) {
  var renderProjects = {};// object to handle other functions to modify projects page

  renderProjects.show = function() {
    Portfolio.all.forEach(function(a) {
      $('#main').append(a.toHtml());
    });
  };
  module.renderProjects = renderProjects;
})(window);
