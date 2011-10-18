var Drawing, Entity;
Entity = (function() {
  function Entity(shape, transform, style, actions) {
    this.shape = shape;
    this.transform = transform;
    this.style = style;
    this.actions = actions;
    if (!(this.shape instanceof Polygon)) {
      throw new Error('Argument type error.');
    }
    if (!(this.transform instanceof Transform)) {
      throw new Error('Argument type error.');
    }
    if (!(this.style instanceof Style)) {
      throw new Error('Argument type error.');
    }
  }
  Entity.prototype.move = function(newActions) {
    return this.actions = this.actions.concat(newActions);
  };
  return Entity;
})();
Drawing = (function() {
  function Drawing(ctx) {
    this.ctx = ctx;
    this.entities = [];
    this.ctx.translate(this.ctx.canvas.clientWidth / 2, this.ctx.canvas.clientHeight / 2);
    this.ctx.save();
  }
  Drawing.prototype.add = function(entity) {
    this.entities.push(entity);
  };
  Drawing.prototype.draw = function() {
    var entity, i, vertex, _i, _len, _ref, _ref2;
    _ref = this.entities;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      entity = _ref[_i];
      this.ctx.save();
      vertex = entity.shape.vertex;
      this.ctx.translate(entity.transform.x, entity.transform.y);
      this.ctx.rotate(entity.transform.angle);
      this.ctx.scale(entity.transform.scale, entity.transform.scale);
      this.ctx.beginPath();
      this.ctx.moveTo(vertex[0].x, vertex[0].y);
      for (i = 1, _ref2 = vertex.length; 1 <= _ref2 ? i < _ref2 : i > _ref2; 1 <= _ref2 ? i++ : i--) {
        this.ctx.lineTo(vertex[i].x, vertex[i].y);
      }
      this.ctx.closePath();
      if (entity.style instanceof Fill) {
        this.ctx.fillStyle = entity.style.color;
        this.ctx.fill();
      } else if (entity.style instanceof Wire) {
        this.ctx.strokeStyle = entity.style.color;
        this.ctx.lineWidth = entity.style.lineWidth;
        this.ctx.stroke();
      }
      this.ctx.restore();
    }
  };
  return Drawing;
})();
if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
  module.exports.Entity = Entity;
}