(function() {
  $(function() {
    return $('#menu').mousemove(function(e) {
      var posX;
      posX = e.pageX - $('#menu').position().left;
      $('#menu').css('-webkit-transform-origin', posX / 3 + 'px 1.5em');
      return console.log(posX);
    });
  });
}).call(this);
