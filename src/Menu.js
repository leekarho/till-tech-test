(function(exports){
  function Menu(){
    this.order = {};
  }

  Menu.prototype.custOrder = function(food, quantity){
    this.order[food] = quantity;
  }

  exports.Menu = Menu;
})(this);
