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
          li class: 'current-page', ->
            h2 -> a href: '#', 'Home'
          li ->
            h2 -> a href: '#', 'About'
          li ->
            h2 -> a href: '#', 'Works'
          li ->
            h2 -> a href: '#', 'Contact'
    article ->
      h3 -> '新着情報'
      ul ->
        li -> 'GFVision の公式サイトを公開しました。'

    footer ->
      p 'Copyright (C) 2011 GFVision All Rights Reserved.'