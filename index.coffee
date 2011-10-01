doctype 5
html ->
  head ->
    meta charset: 'utf-8'
    title 'GFutureVision - Home'
    link rel: 'stylesheet', href: './style.css'
    script src: 'jquery.js'
    script src: 'main.js'

  body ->
    nav ->
      ul id: 'menu', ->
        li 'Home'
        li 'About'
        li 'Works'
        li 'Contact'

    article ->

      header ->
        h1 'GFutureVision'

      p ->
        'Content.'

      footer ->
        p 'Copyright (C) 2011 GFutureVision All Rights Reserved.'