'use strict'

describe('receipt', function(){

  var receipt

  beforeEach(function(){
    receipt = new Receipt();
  });

  it('calculates the total bill', function(){
    var custOrder = [{ "Cafe Latte": 3, "Cortado": 2 }]
    receipt.hipsterCoffee()
    receipt.bill(custOrder)
    expect(receipt.list).toEqual(23.35);
  });

});
