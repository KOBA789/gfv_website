doctype 5
html ->
  head ->
    meta charset: 'utf-8'
    title 'GFVision - Home'
    link rel: 'stylesheet', href: './style.css'
    script src: 'jquery.js'
    script src: 'shape.js'
    script src: 'draw.js'
    script src: 'main.js'

  body ->
    header ->
      h1 'GFVision'
    nav ->
      canvas '#canvas', width: 800, height: 400, ->
    footer ->
      p 'Copyright (C) 2011 GFVision All Rights Reserved.'