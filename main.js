(function() {
  $(function() {
    var canvas, col, ctx, drawing, entity, entity2, hexagon, row, style, style2, trans, x, y;
    canvas = document.getElementById('canvas');
    if (!canvas || !canvas.getContext) {
      return false;
    }
    ctx = canvas.getContext('2d');
    drawing = new Drawing(ctx);
    for (row = -1; row <= 1; row++) {
      for (col = -2; col <= 2; col++) {
        y = row * 80 * 1.5;
        x = 40 * Math.sqrt(3) * (2 * col + row % 2);
        hexagon = new Hexagon(80);
        trans = new Transform(x, y, 30, 0.93);
        style = new Fill('rgb(162, 19, 47)');
        entity = new Entity(hexagon, trans, style);
        drawing.add(entity);
        style2 = new Wire('rgb(255, 255, 255)', 5);
        entity2 = new Entity(hexagon, trans, style2);
        drawing.add(entity2);
      }
    }
    return drawing.draw();
  });
}).call(this);
