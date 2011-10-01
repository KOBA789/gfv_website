$ () ->
  $('#menu').mousemove (e) ->
    posX = e.pageX - $('#menu').position().left
    $('#menu').css('-webkit-transform-origin', posX/3 + 'px 1.5em')
    console.log posX