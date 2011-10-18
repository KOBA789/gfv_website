(function() {
  $(function() {
    var canvas, ctx, drawing, entity, hexagon, style, trans;
    canvas = document.getElementById('canvas');
    if (!canvas || !canvas.getContext) {
      return false;
    }
    ctx = canvas.getContext('2d');
    drawing = new Drawing(ctx);
    hexagon = new Hexagon(100);
    trans = new Transform(50, 30, 45, 1.5);
    style = new Fill('rgb(162, 19, 47)');
    entity = new Entity(hexagon, trans, style);
    drawing.add(entity);
    return drawing.draw();
  });
}).call(this);
