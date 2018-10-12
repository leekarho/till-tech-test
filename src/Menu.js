(function(exports){
  function Menu(name){
    this.order = {};
    this.name = name
  }

  Menu.prototype.custOrder = function(food, quantity){
    this.order[food] = quantity;
  }

  exports.Menu = Menu;
})(this);
