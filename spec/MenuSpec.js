'use strict'

describe('menu', function(){

  var menu

  beforeEach(function(){
    menu = new Menu();
  });

  it('customer can make an order', function(){
    menu.custOrder("Cafe Latte", 3)
    menu.custOrder("Cortado", 2)
    expect(menu.order).toEqual({ "Cafe Latte": 3, "Cortado": 2 });
  });

});
