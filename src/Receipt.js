(function(exports){
  function Receipt(custOrder){
    this.menuList = {};
    this.priceOfOrders = [];
    this.totalBill;
    this.custOrder = custOrder
  }

  Receipt.prototype.hipsterCoffee = function(api = 'https://raw.githubusercontent.com/makersacademy/course/master/individual_challenges/hipstercoffee.json?token=AmYty96_i7g_mFyG5GtRoBom4yffkCejks5bxzgBwA%3D%3D'){
    var self = this
    fetch(api)
      .then(response => response.json())
      .then(data => self.menuList = data[0].prices)
  }

  Receipt.prototype.bill = function() {
    for (var key in this.custOrder) {
      this.priceOfOrders.push(this.menuList[0][key] * this.custOrder[key])
    }
    this.totalBill = this.priceOfOrders.reduce(function(a, b) { return a + b; }, 0);
  }

  Receipt.prototype.print = function() {
    for (var key in this.custOrder) {
      console.log(this.custOrder[key] + " x " + key)
    }
  }

  exports.Receipt = Receipt;
})(this);
