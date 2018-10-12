'use strict'

describe('receipt', function(){

  var receipt

  beforeEach(function(){
    receipt = new Receipt();
  });

  it('calculates the total bill', function(){
    var custOrder = { "Cafe Latte": 3, "Cortado": 2 }
    receipt.list = [{ "Cafe Latte": 4.75, "Cortado": 4.55 }]
    receipt.bill(custOrder)
    expect(receipt.totalBill).toEqual(23.35);
  });

});
