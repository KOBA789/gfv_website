$ () ->
  $('#menu').mousemove (e) ->
    posX = e.pageX - $('#menu').position().left
    $('#menu').css('-webkit-transform-origin', posX/2 + 'px 1em')
    console.log $('#menu').width()