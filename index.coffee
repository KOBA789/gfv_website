doctype 5
html ->
  head ->
    meta charset: 'utf-8'
    title 'GFutureVision - Home'
    link rel: 'stylesheet', href: './style.css'
    link rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Raleway:100'
    script src: 'jquery.js'
    script src: 'main.js'

  body ->
    header ->
      h1 'GFutureVision'
      nav ->
        ul id: 'menu', ->
          li ->
            a href: '#', 'Home'
          li ->
            a href: '#', 'About'
          li ->
            a href: '#', 'Works'
          li ->
            a href: '#', 'Contact'

    p ->
      'Content.'

    footer ->
      p 'Copyright (C) 2011 GFutureVision All Rights Reserved.'