'use strict'

describe('receipt', function(){

  var receipt
  var custOrder = { "Cafe Latte": 3, "Cortado": 2 }

  beforeEach(function(){
    receipt = new Receipt(custOrder);
  });

  it('calculates the total bill', function(){
    receipt.menuList = [{ "Cafe Latte": 4.75, "Cortado": 4.55 }]
    receipt.bill()
    expect(receipt.totalBill).toEqual(23.35);
  });

  it('populates listOfOrders', function(){
    receipt.print()
    expect(receipt.listOfOrders).toEqual([{ "Cafe Latte": 3, "Cortado": 2 }])
  })

});
