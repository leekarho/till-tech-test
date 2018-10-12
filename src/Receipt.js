(function(exports){
  function Receipt(){
    this.list = {};
    this.priceOfOrders = [];
    this.totalBill;
  }

  Receipt.prototype.hipsterCoffee = function(api = 'https://raw.githubusercontent.com/makersacademy/course/master/individual_challenges/hipstercoffee.json?token=AmYty96_i7g_mFyG5GtRoBom4yffkCejks5bxzgBwA%3D%3D'){
    var self = this
    fetch(api)
      .then(response => response.json())
      .then(data => self.list = data[0].prices)
  }

  Receipt.prototype.bill = function(custOrder) {
    for (var key in custOrder) {
      this.priceOfOrders.push(this.list[0][key] * custOrder[key])
    }
    this.totalBill = this.priceOfOrders.reduce(function(a, b) { return a + b; }, 0);
  }

  exports.Receipt = Receipt;
})(this);
