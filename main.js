(function() {
  $(function() {
    return $('#menu').mousemove(function(e) {
      var posX;
      posX = e.pageX - $('#menu').position().left;
      $('#menu').css('-webkit-transform-origin', posX / 2 + 'px 1em');
      return console.log($('#menu').width());
    });
  });
}).call(this);
