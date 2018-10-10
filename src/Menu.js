(function(exports){
  function Menu(){
    this.order = {};
  }

  Menu.prototype.custOrder = function(food, quantity){
    this.order[food] = quantity;
  }

  Menu.prototype.hipsterCoffee = function(api = 'https://raw.githubusercontent.com/makersacademy/course/master/individual_challenges/hipstercoffee.json?token=AmYty96_i7g_mFyG5GtRoBom4yffkCejks5bxzgBwA%3D%3D'){
    fetch(api)
    .then(resp => resp.json())
    .then(result => console.log(result))
  }

  exports.Menu = Menu;
})(this);
