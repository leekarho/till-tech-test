(function(exports){
  function Menu(){
    this.order = {};
  }

  Menu.prototype.cust_order = function(food, quantity){
    this.order[food] = quantity;
  }

  exports.Menu = Menu;
})(this);
