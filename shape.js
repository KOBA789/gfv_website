var Fill, Hexagon, Polygon, Shape, Style, Transform, Wire;
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
Shape = (function() {
  function Shape() {}
  return Shape;
})();
Polygon = (function() {
  __extends(Polygon, Shape);
  function Polygon(vertex) {
    this.vertex = vertex != null ? vertex : [];
  }
  return Polygon;
})();
Hexagon = (function() {
  __extends(Hexagon, Polygon);
  function Hexagon(radius) {
    var goal, radian, step;
    this.radius = radius;
    step = Math.PI / 3;
    goal = Math.PI * 2;
    this.vertex = (function() {
      var _results;
      _results = [];
      for (radian = 0; 0 <= goal ? radian < goal : radian > goal; radian += step) {
        _results.push({
          x: this.radius * Math.cos(radian),
          y: this.radius * Math.sin(radian)
        });
      }
      return _results;
    }).call(this);
  }
  return Hexagon;
})();
Transform = (function() {
  function Transform(x, y, angle, scale) {
    this.x = x != null ? x : 0;
    this.y = y != null ? y : 0;
    if (angle == null) {
      angle = 0;
    }
    this.scale = scale != null ? scale : 1.0;
    this.angle = angle * Math.PI / 180;
  }
  return Transform;
})();
Style = (function() {
  function Style() {}
  return Style;
})();
Fill = (function() {
  __extends(Fill, Style);
  function Fill(color) {
    this.color = color;
  }
  return Fill;
})();
Wire = (function() {
  __extends(Wire, Style);
  function Wire(color, lineWidth, lineJoin, lineCap) {
    this.color = color;
    this.lineWidth = lineWidth;
    this.lineJoin = lineJoin != null ? lineJoin : 'round';
    this.lineCap = lineCap != null ? lineCap : 'round';
  }
  return Wire;
})();
if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
  module.exports.Shape = Shape;
  module.exports.Polygon = Polygon;
  module.exports.Hexagon = Hexagon;
}