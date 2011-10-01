doctype 5
html ->
  head ->
    meta charset: 'utf-8'
    title 'GFVision - Home'
    link rel: 'stylesheet', href: './style.css'
    link rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Raleway:100'
    script src: 'jquery.js'
    script src: 'main.js'

  body ->
    header ->
      h1 'GFVision'
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
    article ->
      h2 'Home'
      p ->
        'Content.'

    footer ->
      p 'Copyright (C) 2011 GFVision All Rights Reserved.'